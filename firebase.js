import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, getAuth } from "firebase/auth"
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { Error } from "./utils";


// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyCMa8zteOOhtpF4q2H-i8G3OmMPkdCNc_c",
    authDomain: "pan-sweep.firebaseapp.com",
    projectId: "pan-sweep",
    storageBucket: "pan-sweep.appspot.com",
    messagingSenderId: "874014487279",
    appId: "1:874014487279:web:107b8f1b46fae5d9fa211a"
  };


const app = initializeApp(firebaseConfig)


const auth = getAuth(app);

const db = getFirestore(app);
export default app


const logInWithEmailAndPassword = async ({email, password}) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success!!", auth.currentUser)
    } catch (err) {
      console.error(err);
      if(err.code == "auth/wrong-password"){
        throw new Error({
          message : "Invalid password",
          code : err.code
        })
      }
      throw err
    }
  };

  const registerWithEmailAndPassword = async ({firstName, lastName, email, password, phoneNumber}) => {
    try {
     console.log({email, firstName, lastName, phoneNumber})
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name : firstName + " " + lastName,
        firstName,
        lastName,
        phoneNumber,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error("err!!!!!!!" , err.code);
      if(err.code == "auth/email-already-in-use"){
        throw new Error({
          message : "This email is already in use",
          code : err.code,
        })
      }
      if (err.code == "invalid-email"){
        throw new Error({
          message :"Enter a valid email address",
          code : err.code
        })
      
      }

      if (err.code == "weak-password"){
        throw new Error({
          message :"Password must be 6 or more characters long",
          code : err.code
        })
      }
      throw err


      

     
    }
  };

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
  };