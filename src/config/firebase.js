
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCZpQ2h_G1HAHtEXGtQh7mrcgMsvgUJtqU",
  authDomain: "tiktok-ebac-6e312.firebaseapp.com",
  projectId: "tiktok-ebac-6e312",
  storageBucket: "tiktok-ebac-6e312.appspot.com",
  messagingSenderId: "711935034888",
  appId: "1:711935034888:web:234a3217e8ae399d96b3bd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;