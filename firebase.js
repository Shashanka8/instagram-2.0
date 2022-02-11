// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpkJ-GVhyA7NP8h-aY6lccgO7Kdrk9KfE',
  authDomain: 'insta-2-e78e4.firebaseapp.com',
  projectId: 'insta-2-e78e4',
  storageBucket: 'insta-2-e78e4.appspot.com',
  messagingSenderId: '872613498993',
  appId: '1:872613498993:web:88d9fbfc18f342d24c8bd0',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
