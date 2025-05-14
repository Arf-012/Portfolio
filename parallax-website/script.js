document.addEventListener("DOMContentLoaded", () => {
  console.log("Parallax Project Loaded");

  // Optional enhancement: scroll effect (like fade)
  const contentSections = document.querySelectorAll(".content");

  window.addEventListener("scroll", () => {
    contentSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });

  contentSections.forEach(section => {
    section.style.transition = "all 1s ease";
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
  });
});
