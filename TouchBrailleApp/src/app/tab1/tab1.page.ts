import { Component } from '@angular/core';
import { UDPService } from '../../providers/udp.provider';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private udpService: UDPService;
  private http: HTTP;

  private buttonColorP1: String = 'dark';
  private buttonColorP2: String = 'dark';
  private buttonColorP3: String = 'dark';
  private buttonColorP4: String = 'dark';
  private buttonColorP5: String = 'dark';
  private buttonColorP6: String = 'dark';
  private buttonColorConnect: String = 'danger';

  private isClickedP1: Boolean = false;
  private isClickedP2: Boolean = false;
  private isClickedP3: Boolean = false;
  private isClickedP4: Boolean = false;
  private isClickedP5: Boolean = false;
  private isClickedP6: Boolean = false;

  constructor(platform: Platform) {
    platform.ready().then(readySource => {
      console.log('Platform ready!');
      console.log(`Ready source ${readySource}`);
      if (readySource === 'cordova') {
        this.udpService = new UDPService();
      }
    });

    this.http = new HTTP();
  }

  getButtonColor(buttonClicked: Boolean) {
    if (buttonClicked) {
      return 'tertiary';
    } else {
      return 'dark';
    }
  }

  sendInfoToServer() {
    /*if (this.udpService.ipReceived == null) {
      return;
    }*/

    // var serverRequest = 'http://' + this.udpService.ipReceived.toString();
    var serverRequest = 'http://192.168.3.4';

    var param = 0;

    if (this.isClickedP1) param += 1;
    if (this.isClickedP2) param += 2;
    if (this.isClickedP3) param += 4;
    if (this.isClickedP4) param += 8;
    if (this.isClickedP5) param += 16;
    if (this.isClickedP6) param += 32;

    serverRequest += '/TouchBraille?cell=' + param;
    console.log(serverRequest);

    this.http.get(serverRequest, {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

  clickP1() {
    this.isClickedP1 = !this.isClickedP1;
    this.buttonColorP1 = this.getButtonColor(this.isClickedP1);
    this.sendInfoToServer();
  }

  clickP2() {
    this.isClickedP2 = !this.isClickedP2;
    this.buttonColorP2 = this.getButtonColor(this.isClickedP2);
    this.sendInfoToServer();
  }

  clickP3() {
    this.isClickedP3 = !this.isClickedP3;
    this.buttonColorP3 = this.getButtonColor(this.isClickedP3);
    this.sendInfoToServer();
  }

  clickP4() {
    this.isClickedP4 = !this.isClickedP4;
    this.buttonColorP4 = this.getButtonColor(this.isClickedP4);
    this.sendInfoToServer();
  }

  clickP5() {
    this.isClickedP5 = !this.isClickedP5;
    this.buttonColorP5 = this.getButtonColor(this.isClickedP5);
    this.sendInfoToServer();
  }

  clickP6() {
    this.isClickedP6 = !this.isClickedP6;
    this.buttonColorP6 = this.getButtonColor(this.isClickedP6);
    this.sendInfoToServer();
  }

  connect() {

    this.udpService.ipReceived = null;
    this.buttonColorConnect = 'danger';
    
    this.udpService.sendUDPMessage('Jader Tomelin esta enviando um dado.', 555, ['224.3.4.95'], 1000, 1000);

    var qtdTentativas = 0;

    setTimeout(() => {
      if (this.udpService.ipReceived === null && qtdTentativas < 5) {
        qtdTentativas++;
        this.udpService.sendUDPMessage('Jader Tomelin esta enviando um dado.', 555, ['224.3.4.95'], 1000, 1000);
      } else {
        if (this.udpService.ipReceived !== null) {
          console.log('encontrou o IP');
          this.buttonColorConnect = 'success';
        } else {
          console.log('nao encontrou o IP');
        }
      }
    }, 1000);
  }
}
