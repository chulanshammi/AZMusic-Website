function getRandomRGB() {
  // Generate random values between 0 and 255 for each RGB component
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Return the RGB values as a string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function to change the color of the element with id "melody"
function changeColorAtTime() {
  var melodyElement = document.getElementById("melody");
  var playNowElement=document.getElementById("play-now")
  let  randomRgb=getRandomRGB();

  melodyElement.style.color = randomRgb;
  playNowElement.style.backgroundColor = randomRgb;
}

setInterval(changeColorAtTime, 1000);

let selectedSongs = [];
const thumbnails = document.querySelectorAll(".thumbnail");

// Add a click event listener to each thumbnail
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnail.classList.toggle("active");
    const songName = thumbnail.querySelector(".song-name").innerText;
    const isSongSelected = thumbnail.classList.contains("active");

    if (isSongSelected) {
      selectedSongs.push(songName);
    } else {
      const index = selectedSongs.indexOf(songName);
      if (index !== -1) {
        selectedSongs.splice(index, 1);
      }
    }
  });
});

//variables for popup
const popup = document.querySelector(".popup");
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");
const closeBtn = document.getElementById("close-btn");
const colorBtn = document.getElementById("color-btn");
const topBar = document.getElementById("top-bar");

//java script for changing of colors
const colors = [
"rgba(190, 180, 180, 0.983)",
"rgba(2, 38, 44, 0.993)",
"rgba(83, 74, 74, 0.973)",
"rgba(0, 0, 0, 0.97)",
];
const topBarColors = [
"rgba(2, 17, 39, 0.877)",
"rgba(13, 200, 233, 0.575)",
"rgba(117, 66, 104, 0.767)",
"rgba(255, 255, 255, 0.5)",
];

let indexColor = 0;

colorBtn.addEventListener("click", themeChanger);

function themeChanger() {
if (indexColor === 3) {
  let randomColors = getRandomRGBAwithOpactiy();
  let randomTopBarColors = getRandomRGBAwithOpactiy();

  colors[4] = randomColors;
  topBarColors[4] = randomTopBarColors;
}

popup.style.background = colors[indexColor];
topBar.style.background = topBarColors[indexColor];
outputDiv.style.background=topBarColors[indexColor];

indexColor = (indexColor + 1) % colors.length;
}

function getRandomRGBAwithOpactiy() {
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

return `rgba(${red}, ${green}, ${blue}, 0.98)`;
}

function getRandomRGBAwithOpactiy() {
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

return `rgba(${red}, ${green}, ${blue},0.98)`;
}



const outputDiv = document.getElementById("songName");
let currentIndex = 0;

function writeToDiv() {
  if (currentIndex < selectedSongs.length) {
    outputDiv.innerHTML = selectedSongs[currentIndex];
    console.log(selectedSongs[currentIndex]);
    currentIndex = (currentIndex + 1) % selectedSongs.length;
    
  }
}

//event listner of close-btn
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
  header.classList.remove("hidden");
  });
  
  const playNowButton = document.getElementById("play-now");
  
  
  const togglePopup = () => {
  popup.classList.toggle("active");
  header.classList.toggle("hidden");
  writeToDiv();
  };
  
  playNowButton.addEventListener("click", togglePopup);

rightArrow.addEventListener("click",writeToDiv);



// java script for validating of form

const subscriptionForm = document.getElementById("subscriptionForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subscribeButton = document.getElementById("subscribeButton");

// Function to check if the form inputs are valid
function checkFormValidity() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const isNameValid = name !== "";
  const isEmailValid = emailRegex.test(email);
  const isPhoneValid = phoneRegex.test(phone);

  subscribeButton.disabled = !(isNameValid && isEmailValid && isPhoneValid);
}

// Add event listeners for input fields to check validity on change
nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
phoneInput.addEventListener("input", checkFormValidity);

// Handle form submission
subscriptionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const personalizedMessage = `Dear ${name}, you have successfully subscribed for a personalized newsletter.`;
  alert(personalizedMessage);
});