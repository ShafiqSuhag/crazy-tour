import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// const app = initializeApp(firebaseConfig);


const firebaseInit = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInit;