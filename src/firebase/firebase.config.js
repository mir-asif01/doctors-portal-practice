// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId

  // apiKey: "AIzaSyDEbBrrK6a_bM7K5VQojU72m8vBQq_HD74",
  // authDomain: "doctors-portal-6a37e.firebaseapp.com",
  // projectId: "doctors-portal-6a37e",
  // storageBucket: "doctors-portal-6a37e.appspot.com",
  // messagingSenderId: "648674219141",
  // appId: "1:648674219141:web:df355407367f75483945ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;