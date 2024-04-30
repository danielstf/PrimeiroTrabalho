import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmYCvZQXF43-NaJckaCBFRDSfIsRXVgew",
  authDomain: "miniblog-90095.firebaseapp.com",
  projectId: "miniblog-90095",
  storageBucket: "miniblog-90095.appspot.com",
  messagingSenderId: "524775686400",
  appId: "1:524775686400:web:dc5802f81acb2956a2f3e5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
