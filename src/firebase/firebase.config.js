// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJvDUcX26BLf0WXERKFv5pfbaTlE3yGJg",
    authDomain: "news-portal-5a199.firebaseapp.com",
    projectId: "news-portal-5a199",
    storageBucket: "news-portal-5a199.appspot.com",
    messagingSenderId: "1071210434756",
    appId: "1:1071210434756:web:cd8457ee9dae3a172ef991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app