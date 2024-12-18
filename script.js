document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const testimonials = document.querySelectorAll(".testimonial");
  const profileImages = document.querySelectorAll(".profile-image");
  let currentIndex = 0;

  function updateSlider(direction) {
    // Retire la classe active des éléments actuels
    testimonials[currentIndex].classList.remove("active");
    profileImages[currentIndex].classList.remove("active");

    // Met à jour l'index
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % testimonials.length;
    } else {
      currentIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
    }

    // Ajoute la classe active aux nouveaux éléments
    testimonials[currentIndex].classList.add("active");
    profileImages[currentIndex].classList.add("active");
  }

  // Gestionnaires d'événements pour les boutons
  prevBtn.addEventListener("click", () => updateSlider("prev"));
  nextBtn.addEventListener("click", () => updateSlider("next"));

  // Gestion des touches clavier (flèches gauche/droite)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      updateSlider("prev");
    } else if (e.key === "ArrowRight") {
      updateSlider("next");
    }
  });
});
