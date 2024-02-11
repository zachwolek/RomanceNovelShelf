// Create variables targetting the relevant DOM elements here 👇
var mainCoverSection = document.querySelector(".main-cover");
var formViewSection = document.querySelector(".form-view");
var savedCoverSection = document.querySelector(".saved-covers-section");
var viewSavedSection = document.querySelector(".saved-view");
var viewHomeSection = document.querySelector(".home-view")
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tag1 = document.querySelector(".tagline-1");
var tag2 = document.querySelector(".tagline-2");
var viewHomeButton = document.querySelector(".home-button")
var randomCoverButton = document.querySelector(".random-cover-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedButton = document.querySelector(".view-saved-button")
var makeNewButton = document.querySelector(".make-new-button");
var createNewCoverButton = document.querySelector(".create-new-book-button")
document.querySelector("title").textContent ="Romantasy"

// We've provided a few variables below
var savedCovers = [
  //createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover ;


// Add your event listeners here 👇
addEventListener('load', showRandomCover);
randomCoverButton.addEventListener('click', showRandomCover);
makeNewButton.addEventListener('click', clickMakeNewButton)
viewSavedButton.addEventListener('click', clickViewSavedButton)
viewHomeButton.addEventListener('click', clickHomeButton)
createNewCoverButton.addEventListener('click', createUserCover);
saveCoverButton.addEventListener('click', saveCover);
viewSavedSection.addEventListener('dblclick', removeCover)


// Create your event handlers and other functions here 👇
//switch to form
function clickMakeNewButton(){
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  viewHomeButton.classList.remove('hidden');
  formViewSection.classList.remove('hidden');
  //below ensures the rest are hidden
  mainCoverSection.classList.add('hidden');
  viewHomeSection.classList.add('hidden')
  viewSavedSection.classList.add('hidden');
  savedCoverSection.classList.add('hidden');
}
//switch to saved
function clickViewSavedButton(){
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  viewHomeButton.classList.remove('hidden');
  savedCoverSection.classList.remove('hidden');
  viewSavedSection.classList.remove('hidden');
  //below ensures the rest are hidden
  mainCoverSection.classList.add('hidden');
  viewHomeSection.classList.add('hidden')
  formViewSection.classList.add('hidden');
}

//switch to home
function clickHomeButton(){
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewHomeButton.classList.add('hidden');
  mainCoverSection.classList.remove('hidden');
  viewHomeSection.classList.remove('hidden')
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
  viewHomeSection.classList.remove('hidden')
  //below ensures the rest are hidden
  formViewSection.classList.add('hidden');
  savedCoverSection.classList.add('hidden');
  viewSavedSection.classList.add('hidden');

  return currentCover;
}
  
function createUserCover(event){
  var userCover = document.getElementById("cover").value
  var userTitle = document.getElementById("title").value
  var userDescriptor1 = document.getElementById("descriptor1").value
  var userDescriptor2 = document.getElementById("descriptor2").value
  
  var customCover = createCover(userCover,userTitle, userDescriptor1, userDescriptor2)
    
  currentCover = customCover
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tag1.innerText = currentCover.tagline1;
  tag2.innerText = currentCover.tagline2;
  event.preventDefault()
  clickHomeButton()
  
  covers.push(userCover)  
  titles.push(userTitle)
  descriptors.push(userDescriptor1)
  descriptors.push(userDescriptor2)
     
}

function saveCover (){
  if (!savedCovers.includes(currentCover)){
      savedCovers.push(currentCover); 
    }
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
      <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
      </div>`
    );
  }  
}
  
function removeCover(event){
  var deleteId = event.target
  savedCover = deleteId.closest('div')
  if(savedCover){
    var id = savedCover.id;
    for (let i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id == id);{
      savedCovers.splice(i,1);
      savedCover.remove()
      break;
      }
    }
  }
}
