let clefType = null;
let score = 0;
let notes = [];
function fetchNotesData() {
    fetch("https://raw.githubusercontent.com/marvilgarcia/cse121b/main/notesData.json")
        .then(response => response.json())
        .then(data => {
            notes = data.notes;
            console.log('Notes loaded:', notes); // Check if notes are loaded correctly
        })
        .catch(error => {
            console.error('Error fetching notes data:', error);
        });
}

function chooseClef(type) {
    clefType = type;
    document.getElementById('chooseType').style.display = 'none';
    document.getElementById('noteDisplay').style.display = 'block';
    document.getElementById('feedback').style.display = 'block';
    showRandomNote();
}

function showRandomNote() {
    let filteredNotes = notes.filter(note => note.staff === clefType);
    console.log('Filtered notes:', filteredNotes); // Check filtered notes
    let randomIndex = Math.floor(Math.random() * filteredNotes.length);
    let randomNote = filteredNotes[randomIndex];
    console.log('Random note:', randomNote); // Check random note
    document.getElementById('noteImage').src = randomNote.image;
}

// Other functions remain the same


function checkAnswer(answer) {
    // Logic to check if the answer is correct
    let isCorrect = false; // Replace with actual logic to check the answer
    if (isCorrect) {
        score++;
        document.getElementById('score').innerText = score;
        document.getElementById('feedbackText').innerText = 'Correct!';
    } else {
        document.getElementById('feedbackText').innerText = 'Incorrect. Try again.';
    }
    showRandomNote();
}

// Fetch the notes data when the page loads
fetchNotesData();
