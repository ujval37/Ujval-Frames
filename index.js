function loadImage(url) {
  var imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ""; // Clear previous image

  var imageElement = document.createElement("img");
  imageElement.src = url;
  imageElement.style.maxWidth = "100%"; // Ensure image fits within container
  imageElement.style.maxHeight = "100%"; // Ensure image fits within container

  imageContainer.appendChild(imageElement);
}