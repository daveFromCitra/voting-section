import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs, getDoc, setDoc, doc, arrayUnion, updateDoc, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Firebase configuration
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

function getAllCategoryVotesGraph(category) {
    // Finds corresponding graph area
    const ctx = document.getElementById(category);

    // Sets up the query, get all users who's CATEGORY in question isn't blank
    let voteDocs = query(collection(db, "users"), where(category, "!=", ""))
    getDocs(voteDocs)
        .then((docs) => {
            // Collects the votes for sorting
            let voteCount = []
            docs.forEach(user => {
                let voteVote = user.data()[category]
                // Adds to the count for a user
                voteCount[voteVote] = (voteCount[voteVote] || 0) + 1
            })
            // Sorts the list of contestants by vote count
            const sorted = Object.entries(voteCount)
                .sort(([,a],[,b]) => b-a)
                .reduce((r, [k, v]) => ({...r, [k]: v}), {})
            // Places the sorted list into the HTML table
            let voteLabels = []
            let voteData = []
            for (const [key, value] of Object.entries(sorted)) {
                voteLabels.length < 5 ? voteLabels.push(key) : console.log(key)
                voteData.length < 5 ? voteData.push(value) : console.log(value)
                // voteLabels.push(key)
                // voteData.push(value)

            }
            // Sets up a new chart object from a class
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: voteLabels,
                    datasets: [{
                        label: 'Votes',
                        data: voteData,
                        borderWidth: 1
                    }]
                },
                options: {

                }
            })
        })
        .catch((error) => console.error(error))
}

getAllCategoryVotesGraph('ugliest')
getAllCategoryVotesGraph('festive')
getAllCategoryVotesGraph('team')