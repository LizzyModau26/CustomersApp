import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore  } from '@angular/fire/firestore';
import { Resturants } from '../shared/resturants.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

isLoggedIn = false

  constructor(
    public firebaseAuth: AngularFireAuth, public firestore: AngularFirestore) { }

    async signIn(email: string, password: string,){
      await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res =>{
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))

      })
    }

    async signUp(email: string, password: string){
      await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
      .then(res =>{
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))

      })
    }

    getResturants() {
      return this.firestore.collection('resturants').snapshotChanges();
    }
  }