import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC2MKoCwmQl4TWWJ6Z4aB7yF1bm7xPdn0M',
  authDomain: 'fir-tutorial-db-575d3.firebaseapp.com',
  projectId: 'fir-tutorial-db-575d3',
  storageBucket: 'fir-tutorial-db-575d3.appspot.com',
  messagingSenderId: '592949318815',
  appId: '1:592949318815:web:ae05554fb11c27ada2beaa',
};
const app = initializeApp(firebaseConfig, 'HELTH_CHECK');
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
