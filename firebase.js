const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT",
  projectId: "madrasa-result"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
