import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpnI6T7i7fn-NVCM4KWo4nXBg82dmNcJs",
  authDomain: "app-pizza-a4508.firebaseapp.com",
  projectId: "app-pizza-a4508",
  storageBucket: "app-pizza-a4508.appspot.com",
  messagingSenderId: "544032684521",
  appId: "1:544032684521:web:6d80efc5c1ab489885b378"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
