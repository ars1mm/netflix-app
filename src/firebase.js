
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithCredential, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATUjeQR1pwb2L0oS9sUbSd2UtuYyANVaM",
  authDomain: "netflix-clone-3cf73.firebaseapp.com",
  projectId: "netflix-clone-3cf73",
  storageBucket: "netflix-clone-3cf73.appspot.com",
  messagingSenderId: "202071383555",
  appId: "1:202071383555:web:4516d82bd3e8175267f836"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,passsword)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,passsword)
       const user = res.user;
       await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
       })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
const login = async(email, passsword) => {
    try {
       await signInWithEmailAndPassword(auth,email,passsword)
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
const logout = () => {
    signOut(auth);
}

export {auth, db, signup, login, logout};