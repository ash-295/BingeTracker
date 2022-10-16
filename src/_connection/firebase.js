import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCs7Szd2CaBSV0_k66Lu37cLzXvIY2j_Cg",
  authDomain: "bingetracker-77455.firebaseapp.com",
  projectId: "bingetracker-77455",
  storageBucket: "bingetracker-77455.appspot.com",
  messagingSenderId: "616873315236",
  appId: "1:616873315236:web:cf2c0803d970fc1ed1cf31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default auth;

export { provider };