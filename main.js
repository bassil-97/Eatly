const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let slideIndex = 0;

prevBtn.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener("click", () => {
  if (slideIndex < slider.children.length - 3) {
    slideIndex++;
    updateSlider();
  }
});

function updateSlider() {
  const translateX = slideIndex * -25; // 25% for each slide
  slider.style.transform = `translateX(${translateX}%)`;
}
