import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEgI_g4ytvykbq1hPRCpWco7kftTWGkZE",
  authDomain: "nurik-74232.firebaseapp.com",
  projectId: "nurik-74232",
  storageBucket: "nurik-74232.appspot.com",
  messagingSenderId: "391158439202",
  appId: "1:391158439202:web:d42e0983e1288f8393997b",
  measurementId: "G-2SQ5KE9GF6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
