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
const allUglyVotes = []

function getAllUglyVotes() {
    let uglyDocs = query(collection(db, "users"), where("ugliest", "!=", ""))
    getDocs(uglyDocs)
        .then((docs) => {
            docs.forEach(user => {
               allUglyVotes.push(user.data().ugliest)
               console.log(user.data().ugliest)
               console.log("count")
            })
        })
        // .then(console.log(allUglyVotes))
        .catch((error) => console.error(error))
        .finally(console.log(allUglyVotes))
}


// Vote counter
function voteCounter(votesArray) {
    let counts = {}
    console.log(votesArray);
    for (let i = 0; i < votesArray.length; i++) {
        const element = votesArray[i];
        console.log(element);
    }
    // votesArray.forEach(() => {console.log("item")})
    // votesArray.forEach((x) => { counts[x] = (counts[x] || 0) + 1 })
    // return counts
}

getAllUglyVotes()