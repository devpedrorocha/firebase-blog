import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLN1NH3mVjJWQMNwUQ5kZt_IBmdG3dJsY",
  authDomain: "vuex-4-fb-auth-ee951.firebaseapp.com",
  projectId: "vuex-4-fb-auth-ee951",
  storageBucket: "vuex-4-fb-auth-ee951.appspot.com",
  messagingSenderId: "771649525473",
  appId: "1:771649525473:web:82fceed895d92a12dc49a0",
};

//init firebase

initializeApp(firebaseConfig);

//init firebase auth

const auth = getAuth();

export { auth };
