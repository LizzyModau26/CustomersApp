import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage implements OnInit {
  userId: any
//  booking: any;
booking = [];

  constructor() { }
 
  ngOnInit() {

    let user = firebase.auth().currentUser;
    this.userId = user.uid;
    console.log('user id Booked: ', user)
    const userBookings = firebase.firestore().collectionGroup('bookings').where('userId', '==', this.userId).orderBy('date', 'desc');
    userBookings.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.booking.push(doc.data())
        //this.booking[Symbol]
        // this.booking.push(doc.data())
        console.info('doc-id: ', doc.id, '=>', 'doc-data: ', doc.data());
        console.log('userBookings: ', this.booking)
      })
    })
  }

}
