// import {firebaseConfig}from './utils/constants'
// import firebase from 'firebase/app'
// import "firebase/auth";
import { auth, db } from './utils/constants'

export async function createAndFetchUser(userId,name,email){
  try{
      const ref = db.ref('users/' + userId )
      await ref.set({
        userId: userId,
        username: name,
        email: email,
      });
  }
  catch(error){
    console.log(error)
  }
  }
  export async function fetchUser(userId){

    try{
      let snapshot = await db.ref('users/' + userId).get();
      const data = snapshot.exists();
      if(data){
        return snapshot.val()
      }
      else{
        return false
      }
    }
    catch(error){
      console.log(error)
    }
}