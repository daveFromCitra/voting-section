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

function getAllUglyVotesTable() {
    const uglyTable = document.getElementById('uglyTable')
    let uglyDocs = query(collection(db, "users"), where("ugliest", "!=", ""))
    getDocs(uglyDocs)
        .then((docs) => {
            let uglyCount = []
            docs.forEach(user => {
                let uglyVote = user.data().ugliest
                uglyCount[uglyVote] = (uglyCount[uglyVote] || 0) + 1

            })
            let uglyTableContent = '<tr><th>Contestant</th><th>Votes</th></tr>'
            let uglyObject = {}
            for (const [key, value] of Object.entries(uglyCount)) {
                console.log(`${key} got ${value} votes.`)
                uglyTableContent = uglyTableContent + `<tr><td>${key}<td><td>${value}<td></tr>`
            }
            //console.log(uglyCount);
            uglyTable.innerHTML = uglyTableContent
        })
        .catch((error) => console.error(error))
}

function getAllFestiveVotesTable() {
    const festiveTable = document.getElementById('festiveTable')
    let festiveDocs = query(collection(db, "users"), where("festive", "!=", ""))
    getDocs(festiveDocs)
        .then((docs) => {
            let festiveCount = []
            docs.forEach(user => {
                let festiveVote = user.data().festive
                festiveCount[festiveVote] = (festiveCount[festiveVote] || 0) + 1

            })
            let festiveTableContent = '<tr><th>Contestant</th><th>Votes</th></tr>'
            let uglyObject = {}
            for (const [key, value] of Object.entries(festiveCount)) {
                console.log(`${key} got ${value} votes.`)
                festiveTableContent = festiveTableContent + `<tr><td>${key}<td><td>${value}<td></tr>`
            }
            //console.log(uglyCount);
            festiveTable.innerHTML = festiveTableContent
        })
        .catch((error) => console.error(error))
}

function getAllTeamVotesTable() {
    const teamTable = document.getElementById('teamTable')
    let teamDocs = query(collection(db, "users"), where("team", "!=", ""))
    getDocs(teamDocs)
        .then((docs) => {
            let teamCount = []
            docs.forEach(user => {
                let teamVote = user.data().team
                teamCount[teamVote] = (teamCount[teamVote] || 0) + 1

            })
            let teamTableContent = '<tr><th>Contestant</th><th>Votes</th></tr>'
            let uglyObject = {}
            for (const [key, value] of Object.entries(teamCount)) {
                console.log(`${key} got ${value} votes.`)
                teamTableContent = teamTableContent + `<tr><td>${key}<td><td>${value}<td></tr>`
            }
            //console.log(uglyCount);
            teamTable.innerHTML = teamTableContent
        })
        .catch((error) => console.error(error))
}



function getAllUglyVotes() {
    let uglyDocs = query(collection(db, "users"), where("ugliest", "!=", ""))
    getDocs(uglyDocs)
        .then((docs) => {
            let uglyCount = {}
            docs.forEach(user => {
                let uglyVote = user.data().ugliest
                uglyCount[uglyVote] = (uglyCount[uglyVote] || 0) + 1

            })
            //console.log(uglyCount);
            return uglyCount
        })
        .catch((error) => console.error(error))
}

// function getAllFestiveVotes() {
//     let uglyDocs = query(collection(db, "users"), where("festive", "!=", ""))
//     getDocs(uglyDocs)
//         .then((docs) => {
//             let uglyCount = {}
//             docs.forEach(user => {
//                 let uglyVote = user.data().festive
//                 uglyCount[uglyVote] = (uglyCount[uglyVote] || 0) + 1

//             })
//             console.log(uglyCount);
//         })
//         .catch((error) => console.error(error))
// }

// function getAllTeamVotes() {
//     let uglyDocs = query(collection(db, "users"), where("team", "!=", ""))
//     getDocs(uglyDocs)
//         .then((docs) => {
//             let uglyCount = {}
//             docs.forEach(user => {
//                 let uglyVote = user.data().team
//                 uglyCount[uglyVote] = (uglyCount[uglyVote] || 0) + 1

//             })
//             console.log(uglyCount);
//         })
//         .catch((error) => console.error(error))
// }

// getAllUglyVotes()
// getAllFestiveVotes()
// getAllTeamVotes()
getAllUglyVotesTable()
getAllFestiveVotesTable()
getAllTeamVotesTable()

