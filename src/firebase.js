import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCrCjCYke-f3o0uVfqi9u04_HtZ0hd-OrE",
    authDomain: "linkedin-clone-yt-5077b.firebaseapp.com",
    projectId: "linkedin-clone-yt-5077b",
    storageBucket: "linkedin-clone-yt-5077b.appspot.com",
    messagingSenderId: "809322194449",
    appId: "1:809322194449:web:29db57afea7f46d7d9f3b0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };