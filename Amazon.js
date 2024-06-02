// Function to change background color and image
function changeBackground() {
    const body = document.body;
    const colors = ['#73fe85', '#ffffcf', '#0996e8', '#7DC486']; // List of colors
    const images = ['img/d5.jpg', 'img/d7.jpg', 'img/d4.jpg', 'img/d3.jpg']; // List of images

    let index = 0;

    // Function to change background color and image
    function setBackground() {
        body.style.backgroundColor = colors[index];
        body.style.backgroundImage = `url(${images[index]})`;

        // Increment index or reset to 0
        index = (index + 1) % colors.length;
    }

    // Call the setBackground function every 5 seconds
    setInterval(setBackground, 5000);
}

// Call the changeBackground function when the window loads
window.onload = changeBackground;
