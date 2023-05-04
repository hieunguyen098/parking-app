import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCB8ikdTKJSHOyBgi_5k3NMgGJisW43VmQ',
    authDomain: 'sparking-app.firebaseapp.com',
    projectId: 'sparking-app',
    storageBucket: 'sparking-app.appspot.com',
    messagingSenderId: '195418970686',
    appId: '1:195418970686:web:b22d851640c505e780cf6f',
    measurementId: 'G-E6PBC72LZC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storageRef = ref(getStorage(app, 'gs://sparking-app.appspot.com/'), 'avatar');
