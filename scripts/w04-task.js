/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const profile = {
    name:"Marvil Garcia",
    photo: "images/marvil.jpeg",
    favoriteFood : [
        "Yaroa", 
        "Pizza", 
        "Rice, Beans and chicken",
        "Tacos"
    ],
    hobbies:[
        "Listening to music",
        "Watching movies",
        "Playing voleibol",
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
profile.placesLived.push(
    {
    place: "Dominican Republic", 
    length: "20 years", 
    },
    {
    place: "Mexico", 
    length: "2 years", 
    }
)
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = profile.name;

/* Photo with attributes */
const image = document.getElementById("photo");

image.src = profile.photo;
image.alt = profile.name;

const favoriteFoodsList = document.querySelector("#favorite-foods");

profile.favoriteFood.forEach(food => {
    const listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
});


/* Hobbies List */
const hobbiesList = document.querySelector("#hobbies");

profile.hobbies.forEach(myhobbies => {
    const listItem = document.createElement("li");
    listItem.textContent = myhobbies;
    hobbies.appendChild(listItem);
});

/* Places Lived DataList */

const placesLiveditems = document.querySelector("#places-lived");

placesLiveditems.innerHTML = "";

profile.placesLived.forEach(place => {
    const dtElement = document.createElement("dt");
    dtElement.textContent = place.place;

    // Create <dd> element for length
    const ddElement = document.createElement("dd");
    ddElement.textContent = place.length;

    placesLiveditems.appendChild(dtElement);
    placesLiveditems.appendChild(ddElement);
})

