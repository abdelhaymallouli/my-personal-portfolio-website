document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const floatingIcons = document.querySelectorAll('.floating-icons img');

  floatingIcons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
          icon.style.transform = 'scale(1.2)';
      });

      icon.addEventListener('mouseout', () => {
          icon.style.transform = 'scale(1)';
      });
  });
});
