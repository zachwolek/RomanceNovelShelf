// Create variables targetting the relevant DOM elements here 👇
//sections  
var controlSection = document.querySelector(".controls"); // I think we can delete this
var mainCoverSection = document.querySelector(".main-cover");
var formViewSection = document.querySelector(".form-view");
var savedCoverSection = document.querySelector(".saved-covers-section");
var viewSavedSection = document.querySelector(".saved-view");
var viewHome = document.querySelector(".home-view")
//Cover Object
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tag1 = document.querySelector(".tagline-1");
var tag2 = document.querySelector(".tagline-2");
//Buttons
var homeButton = document.querySelector(".home-button")
var randomCoverButton = document.querySelector(".random-cover-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedButton = document.querySelector(".view-saved-button")
var makeNewButton = document.querySelector(".make-new-button")


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover ;

// Add your event listeners here 👇
addEventListener('load', showRandomCover);

//We need to add Home button
randomCoverButton.addEventListener('click', showRandomCover);
makeNewButton.addEventListener('click', clickMakeNewButton)
viewSavedButton.addEventListener('click', clickViewSavedButton)
homeButton.addEventListener('click', clickHomeButton)


// Create your event handlers and other functions here 👇
//This initiates when "Make Your Own Cover" button is clicked
function clickMakeNewButton(){
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formViewSection.classList.remove('hidden');
//below ensures the rest are hidden
  viewHome.classList.add('hidden');
  viewSavedSection.classList.add('hidden');
  savedCoverSection.classList.add('hidden');
}

//This initiates when "View Saved Covers Button" is clicked
function clickViewSavedButton(){
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedCoverSection.classList.remove('hidden');
  //below ensures the rest are hidden
  viewHome.classList.add('hidden');
  formViewSection.classList.add('hidden');
  viewSavedSection.classList.add('hidden');
}
//This initiates when "Home Button" is clicked
function clickHomeButton(){
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewHome.classList.remove('hidden');
  //below ensures the rest are hidden
  formViewSection.classList.add('hidden');
  savedCoverSection.classList.add('hidden');
  viewSavedSection.classList.add('hidden');
}




// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

//for this function we need to get a random cover, a random title, and two random taglines from the arrays on the data.js file to appear on the screen. So there needs to be variables for randomCover, randomTitle, randomTagline1 and randomTagline2. we also need to create a variable for the new cover
//we need to use the getRandomIndex function and the createCover functions to get the data needed. we also need to access the items on the DOM

//This is running currentCover = showRandomCover();
function showRandomCover(){
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];
  var newCover = createCover(randomCover, randomTitle, randomTagline1,randomTagline2);
  currentCover = newCover;
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tag1.innerText = currentCover.tagline1;
  tag2.innerText = currentCover.tagline2;

  return currentCover;
}