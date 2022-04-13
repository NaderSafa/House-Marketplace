// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDBe5hP4VilC943BYEqODVEh3u3bL9DAM',
  authDomain: 'house-marketplace-app-adea6.firebaseapp.com',
  projectId: 'house-marketplace-app-adea6',
  storageBucket: 'house-marketplace-app-adea6.appspot.com',
  messagingSenderId: '348240878733',
  appId: '1:348240878733:web:203bfaaafe0e0ec95456c4',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
