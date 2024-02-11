// Create variables targetting the relevant DOM elements here 👇
//sections  

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
var makeNewButton = document.querySelector(".make-new-button");
var createNewCoverButton = document.querySelector(".create-new-book-button")
//form Sections










// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover ;









// Add your event listeners here 👇
addEventListener('load', showRandomCover);
randomCoverButton.addEventListener('click', showRandomCover);
makeNewButton.addEventListener('click', clickMakeNewButton)
viewSavedButton.addEventListener('click', clickViewSavedButton)
homeButton.addEventListener('click', clickHomeButton)
createNewCoverButton.addEventListener('click', createUserCover);
saveCoverButton.addEventListener('click', saveCover);









// Create your event handlers and other functions here 👇
function updateMainCover(){
 
}

// for this function i need to create a cover that is custom. the parts of the cover come from the input fields on the form view of the webpage. 
// i need to make DOM variable for the input fields and the button  to create the new cover 
// create a variable for custom cover that envokes createCover
//current cover is assigned to the customCover
//replicate code from show random cover

function createUserCover(event){
  var userCover = document.getElementById("cover").value
  var userTitle = document.getElementById("title").value
  var userDescriptor1 = document.getElementById("descriptor1").value
  var userDescriptor2 = document.getElementById("descriptor2").value
  //create custom cover variable
  var customCover = createCover(userCover,userTitle, userDescriptor1, userDescriptor2)
  //assign current to custom
  currentCover = customCover
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tag1.innerText = currentCover.tagline1;
  tag2.innerText = currentCover.tagline2;
  event.preventDefault()
  clickHomeButton()
  // to prevent random poster
  
  covers.push(userCover)  
  titles.push(userTitle)
  descriptors.push(userDescriptor1)
  descriptors.push(userDescriptor2)
   
  }

  
  


//Coding Notes: Fixed the issue of the cover object being displayed in the form section. values from the input boxed are being ran and the consoles prove that the values are being recorded. It is just not pushing into the DOM object. 


//This initiates when "Make Your Own Cover" button is clicked
function clickMakeNewButton(){
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formViewSection.classList.remove('hidden');
  //below ensures the rest are hidden
  mainCoverSection.classList.add('hidden');
  viewHome.classList.add('hidden')
  viewSavedSection.classList.add('hidden');
  savedCoverSection.classList.add('hidden');
}

//This initiates when "View Saved Covers Button" is clicked
function clickViewSavedButton(){
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedCoverSection.classList.remove('hidden');
  viewSavedSection.classList.remove('hidden');
  //below ensures the rest are hidden
  mainCoverSection.classList.add('hidden');
  viewHome.classList.add('hidden')
  formViewSection.classList.add('hidden');
}
//This initiates when "Home Button" is clicked
function clickHomeButton(){
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  mainCoverSection.classList.remove('hidden');
  viewHome.classList.remove('hidden')
  //below ensures the rest are hidden
  formViewSection.classList.add('hidden');
  savedCoverSection.classList.add('hidden');
  viewSavedSection.classList.add('hidden');
}
//<--------------ITERATION 3---------------->
// var savedCovers = [];
// function clickSaveButton (){
//   //Goal: When a user clicks the “View Saved Covers” button, we should see the saved covers section
//   ///This changes the section to SavedCover Section
//   savedCoverSection.classList.remove('hidden');
//   //below ensures the rest are hidden
//   formViewSection.classList.add('hidden');
//   viewHome.classList.add('hidden')
//   viewSavedSection.classList.add('hidden');

//   //Goal: When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array
// //this is the variable being returned from createCustomCover(){

//   //Goal: Save a cover exactly nce:
// //if the array savedCovers doesn't include current cover, push saved cover
// if (!savedCovers.includes(currentCover)){
//       savedCovers.push(currentCover)
//  }

//  //Goal: All the covers in the savedCovers array should be displayed in the saved covers section


// };

function clickSaveButton(){
saveCover()
displaySavedCovers()
}


function displaySavedCovers(){
  savedCoverSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++){
    currentCover = savedCovers[i];
    savedCoverSection.insertAdjacentHTML("afterbegin", 
      `<div class="mini-cover" id="${currentCover.id}">
      <img class="cover-image" src="${currentCover.coverImg}">
      <h2 class="cover-title">${currentCover.title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}n</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
      </div>`
  )}  
  covers.push(userCover)  
  titles.push(userTitle)
  descriptors.push(userDescriptor1)
  descriptors.push(userDescriptor2)
}
function saveCover (currentCover){
if (!savedCovers.includes(currentCover)){
    savedCovers.push(currentCover); 
  }
  displaySavedCovers()
  savedCoverSection.classList.remove('hidden');
  formViewSection.classList.add('hidden');
  viewHome.classList.add('hidden')
  viewSavedSection.classList.remove('hidden');

};
//--------------END ITERATION 3---------------->

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
  return currentCover;}


