import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs, getDoc, setDoc, doc, arrayUnion, updateDoc, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWcsAbj7wDjZ3-JGVkU4Jq66C1dt1AZXM",
    authDomain: "dpg-holiday-voting.firebaseapp.com",
    projectId: "dpg-holiday-voting",
    storageBucket: "dpg-holiday-voting.appspot.com",
    messagingSenderId: "983551029046",
    appId: "1:983551029046:web:4749828d29b45c49010d97"
  };
const app = initializeApp(firebaseConfig)
const db = getFirestore()

const signInButton = document.getElementById('signInButton')


signInButton.addEventListener('click', () => {
    setUser(document.getElementById('signIn').value )
})

function setUser(userInput) {
    setDoc(doc(db, "users", userInput), {
        festive: "",
        team: "",
        ugliest: ""
    })
    .then(() => {
        localStorage.setItem('DPG-user', userInput)
        console.log(`${userInput} set as current user`);
    })
    // addDoc(collection(db, "users"), {
    //     username: userInput,
    //     festive: "",
    //     team: "",
    //     ugliest: ""
    // })

}

function getUserId(username) {
    getDoc()
}

function checkCurrentUser() {
    if (localStorage.getItem('DPG-user')) {
        console.log('signed in');
        console.log(localStorage.getItem('DPG-user'));
    } else {
        console.log('not signed in');
    }
}

checkCurrentUser()

