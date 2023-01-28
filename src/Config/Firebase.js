// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCqGmkuAF5_24eXjzCOx_yYisxKwiwu7M",
    authDomain: "typescript-crud-app.firebaseapp.com",
    projectId: "typescript-crud-app",
    storageBucket: "typescript-crud-app.appspot.com",
    messagingSenderId: "909125237458",
    appId: "1:909125237458:web:c4c88e3db7372846d28b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();