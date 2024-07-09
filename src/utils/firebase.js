// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: "blog-34823.firebaseapp.com",
	projectId: "blog-34823",
	storageBucket: "blog-34823.appspot.com",
	messagingSenderId: "629670224429",
	appId: "1:629670224429:web:786a3c3f3d523773654ea4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
