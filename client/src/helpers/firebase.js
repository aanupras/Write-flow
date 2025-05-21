import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuINpADfCcdm3nHkBdYLxq48rYUZLqNuM",
    authDomain: "blog-1f7b7.firebaseapp.com",
    projectId: "blog-1f7b7",
    storageBucket: "blog-1f7b7.firebasestorage.app",
    messagingSenderId: "391338812554",
    appId: "1:391338812554:web:335b10e9b926d0b1cff973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider };
