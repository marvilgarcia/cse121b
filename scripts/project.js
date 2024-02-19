let clefType = null;
let score = 0;
let notes = [];

function fetchNotesData() {
    fetch("https://drive.google.com/file/d/1lmHTZPJe5rZYHNtKUi2jMFWa8X843rQm/view?usp=sharing")
        .then(response => response.json())
        .then(data => {
            notes = data.notes;
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
    let randomIndex = Math.floor(Math.random() * filteredNotes.length);
    let randomNote = filteredNotes[randomIndex];
    document.getElementById('noteImage').src = randomNote.image;
}

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