import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


  restuList = []
  constructor(private menu: MenuController, public firebaseService: FirebaseService) { }

  ngOnInit() {
  

  this.firebaseService. getResturants().subscribe(data => {
    this.restuList = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        resName: e.payload.doc.data()['resName'],
        resDes: e.payload.doc.data()['resDes'],
        resAdd: e.payload.doc.data()['resAdd'],
        resTel: e.payload.doc.data()['resTel'],
        resEmail: e.payload.doc.data()['resEmail'],
        resRate: e.payload.doc.data()['resRate'],
        img: e.payload.doc.data()['img'],
      };
    })
    console.log(this.restuList)
  });
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}