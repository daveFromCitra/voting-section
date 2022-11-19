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
            let uglyCount = {}
            docs.forEach(user => {
                let uglyVote = user.data().ugliest
                uglyCount[uglyVote] = (uglyCount[uglyVote] || 0) + 1

            })
            console.log(uglyCount);
        })
        .catch((error) => console.error(error))
}

function getAllFestiveVotes() {
    let uglyDocs = query(collection(db, "users"), where("festive", "!=", ""))
    getDocs(uglyDocs)
        .then((docs) => {
            let uglyCount = {}
            docs.forEach(user => {
                let uglyVote = user.data().festive
                uglyCount[uglyVote] = (uglyCount[uglyVote] || 0) + 1

            })
            console.log(uglyCount);
        })
        .catch((error) => console.error(error))
}

function getAllTeamVotes() {
    let uglyDocs = query(collection(db, "users"), where("team", "!=", ""))
    getDocs(uglyDocs)
        .then((docs) => {
            let uglyCount = {}
            docs.forEach(user => {
                let uglyVote = user.data().team
                uglyCount[uglyVote] = (uglyCount[uglyVote] || 0) + 1

            })
            console.log(uglyCount);
        })
        .catch((error) => console.error(error))
}

getAllUglyVotes()
getAllFestiveVotes()
getAllTeamVotes()