  //this allows my image to expand when clicked and this also shows the text from images' alt in "Photo Gallery"
function myFunction(imgs) {
  expandImg = document.getElementById("expandedImg");
  imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
