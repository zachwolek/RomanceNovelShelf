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
createNewCoverButton.addEventListener('click', function(event){
  createCustomCover(event)
})
createNewCoverButton.addEventListener('click', createCustomCover);
saveCoverButton.addEventListerner('click', clickSaveButton);









// Create your event handlers and other functions here 👇
function updateMainCover(){
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tag1.innerText = currentCover.tagline1;
  tag2.innerText = currentCover.tagline2;
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
  //to view the current poster 
 updateMainCover();
 event.preventDefault()
 clickHomeButton()
  // to prevent random poster
  
  covers.push(userCover)  
  titles.push(userTitle)
  descriptors.push(userDescriptor1)
  descriptors.push(userDescriptor2)
   
  }

  
  


//Coding Notes: Fixed the issue of the cover object being displayed in the form section. values from the input boxed are being ran and the consoles prove that the values are being recorded. It is just not pushing into the DOM object. 

