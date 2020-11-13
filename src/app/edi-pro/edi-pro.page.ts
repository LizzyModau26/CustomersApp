
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from "../services/firebase.service";

import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edi-pro',
  templateUrl: './edi-pro.page.html',
  styleUrls: ['./edi-pro.page.scss'],
})
export class EdiProPage implements OnInit {


  profileForm: FormGroup
  userID: any
  selectedFile: File = null;
  upLoadedFile: any;



  constructor(public firebaseService: FirebaseService,
    public firestore: AngularFirestore, private fb : FormBuilder, private router : Router


  ) { }


  ngOnInit() {
    this.EditProPage();
  }

  EditProPage(){
    this.profileForm = this.fb.group({
      userName: new FormControl(),
      userAdd: new FormControl(),
      userEmail: new FormControl(),
      userNumb: new FormControl(),
      img: new FormControl(),
    })
  }
  addUser() {
    var user = firebase.auth().currentUser
    this.userID = user.uid;

    this.firebaseService.addProfile().doc(this.userID).set({
      resID: this.userID,
      userName: this.profileForm.value.userName,
      userAdd: this.profileForm.value.userAdd,
      userNumb: this.profileForm.value.userNumb,
      userEmail: this.profileForm.value.userEmail,
      img: this.profileForm.value.img,
     }).then(function (docRef) {
      console.log('Successful, docRef.id' );
    })
    this.profileForm.reset();
    this.router.navigate["profile"];
    
  }

  addPic(event) {
    const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadstart = (p) => {
        console.log(p);
      };
      reader.onloadend = (e) => {
        console.log(e.target);
        this.upLoadedFile = reader.result;
        this.profileForm.get('img').setValue(this.upLoadedFile);
        
      };
    }
}
