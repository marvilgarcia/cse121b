/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        const imageUrl = document.createElement("img")
        imageUrl.setAttribute("src", temple.imageUrl);
        imageUrl.setAttribute("alt", temple.location);
        article.appendChild(templeName);
        article.appendChild(imageUrl);
        templesElement.appendChild(article);
    });


}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
    }
}
/* reset Function */
function reset(){
    templesElement.innerHTML = "";
}
/* filterTemples Function */
function filterTemples(temples){
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
       
        
    }

}

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();
