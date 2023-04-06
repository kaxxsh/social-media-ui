import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNc38vI6NlwLM2Lx9QaVr8Vk54mmS6hB4",
  authDomain: "connect-cfadd.firebaseapp.com",
  databaseURL: "https://connect-cfadd-default-rtdb.firebaseio.com",
  projectId: "connect-cfadd",
  storageBucket: "connect-cfadd.appspot.com",
  messagingSenderId: "774878325418",
  appId: "1:774878325418:web:75e1f150754f9a1430fed3",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
