import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';
 
const config = {
  apiKey: "AIzaSyBDFfMmZmc6IfYgn_s6ptQCgwLXW4b8174",
  authDomain: "netflix-clone-f1a2a.firebaseapp.com",
  projectId: "netflix-clone-f1a2a",
  storageBucket: "netflix-clone-f1a2a.appspot.com",
  messagingSenderId: "160669663029",
  appId: "1:160669663029:web:6ada8a04deeda2e2f0567c",
  measurementId: "G-JLYGMV6Z9L"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
