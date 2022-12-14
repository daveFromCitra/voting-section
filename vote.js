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

const ugliestSweaterButton = document.getElementById('ugliest')
const festiveButton = document.getElementById('festive')
const teamButton = document.getElementById('team')
let currentUser = localStorage.getItem('DPG-user')
const urlParams = location.search;
const orderRefId = urlParams.match(/(?![?refId=])[A-z0-9]{1,}/g)[0];
const userDisplay = orderRefId.replaceAll('_', ' ')
document.getElementById('userTitle').innerText = userDisplay


if (currentUser) {
    console.log(currentUser);
} else {
    let userId = uuid()
    setDoc(doc(db, "users", userId), {
    })
        .then(() => {
            localStorage.setItem('DPG-user', userId)
            currentUser = userId;
            console.log(`${userId} set as current user`);
        })
}

function uuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


function ugliestVote() {
    setDoc(doc(db, "users", currentUser), { ugliest: orderRefId }, { merge: true })
    votingConfirmation()
    checkVote("ugliest")
}

function festiveVote() {
    setDoc(doc(db, "users", currentUser), { festive: orderRefId }, { merge: true })
    votingConfirmation()
    checkVote("festive")
}

function teamVote() {
    setDoc(doc(db, "users", currentUser), { team: orderRefId }, { merge: true })
    votingConfirmation()
    checkVote("team")
}

function checkVote(category) {
    getDoc(doc(db, "users", currentUser))
        .then((doc) => {
            if (doc.data()[category] !== orderRefId) return;
            // If you voted for this person
            document.getElementById(category).style.background = "#f2a900"
            document.getElementById(category + "Check").innerHTML = "<i class='fa-regular fa-square-check'></i>"
        })
}



function votingConfirmation() {
    document.getElementById("voteConfirmation").innerHTML = `You just voted for ${orderRefId}!`
}

//EVENT LISTENERS
if (ugliestSweaterButton) {
    ugliestSweaterButton.addEventListener("click", () => { ugliestVote() })
    checkVote("ugliest")
}

if (festiveButton) {
    festiveButton.addEventListener("click", () => { festiveVote() })
    checkVote("festive")
}

if (teamButton) {
    teamButton.addEventListener("click", () => { teamVote() })
    checkVote("team")
}


