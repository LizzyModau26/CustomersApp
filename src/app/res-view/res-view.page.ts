import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  }  from '@angular/router';

import firebase from 'firebase/app';
import 'firebase/firestore';
@Component({
  selector: 'app-res-view',
  templateUrl: './res-view.page.html',
  styleUrls: ['./res-view.page.scss'],
})
export class ResViewPage implements OnInit {

  uid = this.activatedActivated.snapshot.params.id;
  id: any
  resturants : any = [];
  restu: any = [];
  constructor(public activatedActivated : ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedActivated.snapshot.paramMap.get('id')
    console.log('ID: ', this.id)
   
    firebase.firestore().collection('resturants').doc(this.id).get().then(snapshot => {
      this.resturants = snapshot.data();
      console.log('new data: ', this.resturants)
    });

    firebase.firestore().collection('resturants').doc(this.id).collection('dishes').get().then(snapshot => {
      this.restu = snapshot.docs;
      console.log('new data: ', this.restu)
    });
  }

}
