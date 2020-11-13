import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';
import {Router} from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userID : any
  store : any
  constructor(private router : Router, private firestore : AngularFirestore) { }

  ngOnInit() {
    var user = firebase.auth().currentUser
    this.userID = user.uid;

    firebase.firestore().collection('user').doc(this.userID).get().then(snapshot => {
      this.userID =snapshot.data();
    })
  }

}