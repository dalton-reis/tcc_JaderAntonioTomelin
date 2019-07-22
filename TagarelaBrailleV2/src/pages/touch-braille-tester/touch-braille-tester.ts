import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Audio } from '../../pages/utilBraille/audio';
//import { HTTP } from '@ionic-native/http/ngx';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-touch-braille-tester',
  templateUrl: 'touch-braille-tester.html',
  providers: [
    Audio
  ]
})

export class TouchBrailleTesterPage {

  pAtualC1 = '000000';
  serverHostname = 'http://192.168.3.4';

  constructor( public navCtrl: NavController, public navParams: NavParams, private audio: Audio, private http: HttpClient) {
  }

  ionViewDidLoad() {
    this.audio.tocar("touchbrailletester", 100)
  }

  marcar(posicao: string) {
    if (document.getElementById(posicao).style.backgroundColor === "black") {
      document.getElementById(posicao).style.backgroundColor = "transparent";
    } else {
      document.getElementById(posicao).style.backgroundColor = "black";
    }

    this.pAtualC1 = "";
    if (document.getElementById('c1p1').style.backgroundColor === "black") { this.pAtualC1 = this.pAtualC1 + '1'; } else { this.pAtualC1 = this.pAtualC1 + '0'; }
    if (document.getElementById('c1p2').style.backgroundColor === "black") { this.pAtualC1 = this.pAtualC1 + '1'; } else { this.pAtualC1 = this.pAtualC1 + '0'; }
    if (document.getElementById('c1p3').style.backgroundColor === "black") { this.pAtualC1 = this.pAtualC1 + '1'; } else { this.pAtualC1 = this.pAtualC1 + '0'; }
    if (document.getElementById('c1p4').style.backgroundColor === "black") { this.pAtualC1 = this.pAtualC1 + '1'; } else { this.pAtualC1 = this.pAtualC1 + '0'; }
    if (document.getElementById('c1p5').style.backgroundColor === "black") { this.pAtualC1 = this.pAtualC1 + '1'; } else { this.pAtualC1 = this.pAtualC1 + '0'; }
    if (document.getElementById('c1p6').style.backgroundColor === "black") { this.pAtualC1 = this.pAtualC1 + '1'; } else { this.pAtualC1 = this.pAtualC1 + '0'; }

    var param = parseInt(this.pAtualC1, 2);
  
    var serverRequest = this.serverHostname + '/TouchBraille?cell=' + param;

    console.log(serverRequest);

    // verificar depois porque ocorre erro
    this.http.get(serverRequest).subscribe(
      data => {
      console.log(data);
    },
      err => {
      console.log("Error occured.");
      err;
    });
  
  }

  limpaMarcacao() {
    document.getElementById('c1p1').style.backgroundColor = "transparent";
    document.getElementById('c1p2').style.backgroundColor = "transparent";
    document.getElementById('c1p3').style.backgroundColor = "transparent";
    document.getElementById('c1p4').style.backgroundColor = "transparent";
    document.getElementById('c1p5').style.backgroundColor = "transparent";
    document.getElementById('c1p6').style.backgroundColor = "transparent";
    this.pAtualC1 = "000000";
  }
}
