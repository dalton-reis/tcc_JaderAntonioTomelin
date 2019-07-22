import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

// plugin installation needed:
// cordova plugin add cordova-plugin-chrome-apps-sockets-udp
// https://www.npmjs.com/package/cordova-plugin-chrome-apps-sockets-udp
declare var chrome: any;

@Injectable()
export class UDPService {

    private socketid: number;
    private udpstream: BehaviorSubject<Object> = new BehaviorSubject({});

    ipReceived: String;

    constructor() {
        this.ipReceived = null;
    }

    sendUDPMessage(message: string, port: number, addresses: Array<string>, ttl: number, timetolisten: number) {

        function str2ab(str) {
            var buf = new ArrayBuffer(str.length);
            var bufView = new Uint8Array(buf);
            for (var i = 0, strLen = str.length; i < strLen; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return buf;
        }

        function ab2str(buf) {
            return String.fromCharCode.apply(null, new Uint8Array(buf));
        }

        if (chrome && typeof chrome.sockets !== 'undefined') {
            chrome.sockets.udp.onReceive.addListener(
                (info) => {
                    console.log('Recv from socket: ', info, ab2str(info.data) );
                    this.ipReceived = info.remoteAddress;
                    this.udpstream.next(info);
                }
            );

            chrome.sockets.udp.onReceiveError.addListener(
                (error) => {
                    console.log('Recv  ERROR from socket: ', error);
                    this.udpstream.next({ 'error': error });
                }
            );

            let SENDBUFFER = str2ab(message);

            chrome.sockets.udp.create((createInfo) => {
                chrome.sockets.udp.bind(createInfo.socketId, '0.0.0.0', port, (bindresult) => {
                    this.socketid = createInfo.socketId;

                    chrome.sockets.udp.setMulticastTimeToLive(createInfo.socketId, ttl, (ttlresult) => {
                        chrome.sockets.udp.setBroadcast(createInfo.socketId, true, function (sbresult) {

                            addresses.map(address => {
                                chrome.sockets.udp.send(createInfo.socketId, SENDBUFFER, address, port, (sendresult) => {
                                    if (sendresult < 0) {
                                        console.log('send fail: ' + sendresult);
                                        // close all the stuff, send has failed
                                        this.closeUDPService();
                                        this.udpstream.next({ 'error': sendresult });
                                    } else {
                                        console.log('sendTo: success ' + port, createInfo, bindresult, ttlresult, sbresult, sendresult);
                                    }
                                });
                            });
                        });
                    });
                });
            });

            // and close the listener after a while
            /*setTimeout(() => {
                this.closeUDPService();
            }, timetolisten);*/

            this.closeUDPService();
        }
        // return the stream
        // return this.udpstream.asObservable().(1);
    }

    closeUDPService() {
        // close the socket
        if (chrome && typeof chrome.sockets !== 'undefined') {
            chrome.sockets.udp.close(this.socketid);
        }

        // close the stream
        this.udpstream.complete();
    }

}
