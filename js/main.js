document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const items = document.querySelectorAll(".projectItem");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  function showImage(index) {
    items.forEach((item, i) => {
      item.style.display = i === index ? "block" : "none";
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % items.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showImage(currentIndex);
  }

  const intervalId = setInterval(nextImage, 4000);
  leftArrow.addEventListener("click", function() {
    clearInterval(intervalId);
    prevImage();
  });

  rightArrow.addEventListener("click", function() {
    clearInterval(intervalId);
    nextImage();
  });
  const container = document.querySelector(".ProjectsFlex");
  container.addEventListener("mouseenter", function() {
    clearInterval(intervalId);
  });

  container.addEventListener("mouseleave", function() {
    intervalId = setInterval(nextImage, 4000);
  });

  showImage(currentIndex);
});
