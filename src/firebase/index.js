import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBAJK1I1tSyz-2JkZoz4a1Mdo1XcMY5pjs',
  authDomain: 'porfolio-3becc.firebaseapp.com',
  databaseURL: 'https://porfolio-3becc-default-rtdb.firebaseio.com',
  projectId: 'porfolio-3becc',
  storageBucket: 'porfolio-3becc.appspot.com',
  messagingSenderId: '627476385236',
  appId: '1:627476385236:web:ec2dea1a23dbaeae495a41',
  measurementId: 'G-66C20LNYKL',
};
export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
