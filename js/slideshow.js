let currentSlide = 0;
let slides = [];

export function initSlideshow() {
  slides = [
    "https://picsum.photos/id/20/1200/600",
    "https://picsum.photos/id/30/1200/600",
  ];

  showSlide(0);
  setInterval(nextSlide, 5000);
}

function showSlide(index) {
  const container = document.getElementById("slidesContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="w-full h-full bg-cover"
         style="background-image:url('${slides[index]}')">
    </div>`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}