import firebase from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDImkU9cRJHJeUMTrPeD3vM3y_4csIgMqw",
  authDomain: "cursos-web-70d41.firebaseapp.com",
  projectId: "cursos-web-70d41",
  storageBucket: "cursos-web-70d41.appspot.com",
  messagingSenderId: "831946766634",
  appId: "1:831946766634:web:26176251ee4f1d1f97c653"
};



const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = ()=>{
    return firebase.firestore(app)
}