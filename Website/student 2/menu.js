var slideshow = document.getElementById("slideshow");
var artistName = document.getElementById("artist-name");
var albumName = document.getElementById("album-name");
var images = ["Images/FwgDN8yXwAUrB6k.jpg", "Images/The_Weeknd_-_Dawn_FM.png", "Images/Joji_-_Nectar.png", "Images/Doja_Cat_-_Planet_Her.png"];
var names = ["Travis Scott", "The Weeknd", "Joji", "Doja Cat"]
var albums = ["Utopia", "Dawn FM", "Nectar", "Planet Her"]
var imageIndex = 0;
var stringIndex = 0;

function showImage() {
    slideshow.src = images[imageIndex];
    imageIndex++;
    if (imageIndex >= images.length) {
      imageIndex = 0;
    }
    setTimeout(showImage, 2000);
  }

  function showText() {
    artistName.textContent = names[stringIndex];
    albumName.textContent = albums[stringIndex];
    stringIndex++;
    if (stringIndex >= names.length) {
      stringIndex = 0;
    }
    setTimeout(showText, 2000);

}
  showImage();
  showText();