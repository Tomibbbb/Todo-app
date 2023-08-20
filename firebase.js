const firebaseConfig = {
    apiKey: "AIzaSyD13V__LhKlv50EMSoFOvHODR7QO6em1vk",
    authDomain: "to-do-59df5.firebaseapp.com",
    projectId: "to-do-59df5",
    storageBucket: "to-do-59df5.appspot.com",
    messagingSenderId: "295855816480",
    appId: "1:295855816480:web:1b79e53c1170417559a145",
    measurementId: "G-QPGPQPBVCM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 // const db = getFirestore(app);

var db = firebase.firstore();