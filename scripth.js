/* style.css */

body {
    font-family: Arial, sans-serif; /* Fallback font family */
    text-align: center; /* Center-align text */
    margin: 0; /* Remove default margin */
    background-color: #FADADD; /* Set background color to light pink */
}

#container {
    display: flex; /* Use flexbox layout */
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center-align items horizontally */
    justify-content: center; /* Center-align items vertically */
    height: 100vh; /* Make the container full viewport height */
}

#image-container {
    display: flex; /* Ensures images are arranged properly */
    justify-content: center; /* Centers images horizontally */
    align-items: center; /* Centers images vertically */
    margin-top: 20px; /* Adds space above the image */
}

#question {
    font-family: 'Sacramento', cursive; /* Apply Sacramento font to the question */
    font-size: 52px; /* Set font size for the question */
}

#options {
    margin-top: 20px; /* Add space above the options */
}

button {
    padding: 10px 20px; /* Set padding for buttons */
    margin: 0 10px; /* Set margin around buttons */
    font-size: 26px; /* Set font size for buttons */
    font-family: 'Sacramento', cursive; /* Apply Sacramento font to the options */
    background-color: #FB607F; /* Set button background color */
    color: white; /* Set text color to white */
    border: none; /* Remove button border */
    cursor: pointer; /* Set cursor to pointer on hover */
}
// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
