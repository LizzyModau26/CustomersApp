import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import {ActivatedRoute  }  from '@angular/router';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  uid = this.activatedActivated.snapshot.params.id;
  id: any
  userId: any
  // isSubmitted : true
  resID: any
  bookForm: FormGroup
  constructor(public activatedActivated : ActivatedRoute, private fb : FormBuilder, private alertCtrl :AlertController, private loadingCtrl : LoadingController ) { }

  ngOnInit() {
    
    this.id = this.activatedActivated.snapshot.paramMap.get('id')
    console.log('ID: ', this.id)

    this.ValidateInfo();
  }
  ValidateInfo(){
    this.bookForm = this.fb.group({
      useName: new FormControl(),
      useNum: new FormControl(),
      numOfGuest: new FormControl(),
      numOfTable: new FormControl(),
      useEmail: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
      
    })
  }
async makeBooking() {
  const alert = await this.alertCtrl.create({
    message: `Thank you for making a booking with us, please click Okay to confirm.`,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: blah => {
          console.log('Confirm Cancel: ', blah);
        },
      },
      {
        text: 'Okay',
        handler: () => {
          var user = firebase.auth().currentUser;
          this.userId = user.uid;
          console.log('userId booking: ', this.userId);
          this.resID = this.uid;
          console.log('Owner ID booking: ', this.id)
          // this.isSubmitted = true;
          // if(this.bookingForm.valid){
            firebase.firestore().collection('resturants').doc(this.id).collection('bookings').add({
              userId: this.userId,
              resID: this.uid,
              date: this.bookForm.value.date,
              time: this.bookForm.value.time,
              useName: this.bookForm.value.useName,
              useEmail: this.bookForm.value.useEmail,
              useNum: this.bookForm.value.useNum,
              numOfTable: this.bookForm.value.numOfTable,
              numOfGuest: this.bookForm.value.numOfGuest,
              status: 'Pending'
            }).then(() => {
             
              this.bookForm.reset();
            }).catch(function (error) {
              console.log(error)
            })
          // }else{
          //   console.log('Invalid fields')
          // }
        },
      },
    ],
  });
  return await alert.present();
  }
  }
