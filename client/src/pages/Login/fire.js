import firebase from 'firebase';

 
const config = {
  apiKey: "AIzaSyBiX6YQubQG3_csnHygDt_DMCXmacI7Zcs",
  authDomain: "burnout-efe61.firebaseapp.com",
  databaseURL: "https://burnout-efe61.firebaseio.com",
  projectId: "burnout-efe61",
  storageBucket: "",
  messagingSenderId: "25456994910"
};

 const fire = firebase.initializeApp(config);
export default fire;