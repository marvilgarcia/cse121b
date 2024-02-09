/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Marvil Garcia";
let currentYear = "2024";
let profilePicture = { path: "images/marvil.jpeg", alt: "marvil.jpeg" };






/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture.path);
imageElement.setAttribute("alt", profilePicture.alt);




/* Step 5 - Array */


let favoriteFood = ["Yaroa", "Pizza", "Rice, Beans and chicken", "Tacos"];
foodElement.innerHTML = favoriteFood;
let newFood = "Avocado";
favoriteFood.push(newFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;


