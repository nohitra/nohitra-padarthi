const images = [
    "C:\\Users\\Hi\\Pictures\\mypictures\\23481A0560.jpg",
    "C:\\Users\\Hi\\Pictures\\img 16.webp",
    "C:\\Users\\Hi\\Pictures\\img 6.jpg",
    "C:\\Users\\Hi\\Pictures\\img 4.jpg",
    "C:\\Users\\Hi\\Pictures\\How AI is Changing Blog Writing and Why You Should Care_.jpeg",
    "C:\\Users\\Hi\\Pictures\\1aa13529-214a-4883-bfea-a83d15b01588.jpeg",
    "C:\\Users\\Hi\\Pictures\\img 2.jpg"
];

let currentIndex = 0;
let slideshowInterval;

function openModal(index) {
    currentIndex = index;
    showImage(currentIndex);
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    startSlideshow(); // Start the slideshow when the modal opens
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    stopSlideshow(); // Stop the slideshow when the modal closes
}

function showImage(index) {
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
    modalImage.src = images[index];
    caption.innerHTML = images[index].split('\\').pop(); // Display the image name
}

function changeSlide(direction) {
    currentIndex += direction;

    // Loop back to the start or end if necessary
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Go to last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Go to first image
    }

    showImage(currentIndex);
}

function startSlideshow() {
    stopSlideshow(); // Clear any existing interval
    slideshowInterval = setInterval(() => {
        changeSlide(1); // Automatically change to the next image
    }, 3000); // Change image every 3 seconds
}

function stopSlideshow() {
    clearInterval(slideshowInterval); // Stop the slideshow
}
