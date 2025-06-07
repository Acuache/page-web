document.addEventListener("DOMContentLoaded", () => {
  let icon = document.querySelector(".navbar__mobile-btn");
  let navbar = document.querySelector(".navbar__mobile-list");

  icon.addEventListener("click", () => {
    if (icon.classList.contains("visible")) {
      navbar.style.maxHeight = "0";
      navbar.style.padding = "0";
      icon.classList.remove("visible");
    } else {
      navbar.style.maxHeight = "fit-content";
      navbar.style.padding = "1.5rem";
      icon.classList.add("visible");
    }
  });

  let links = document.querySelectorAll(".mobile-list__item");
  for (link of links) {
    let submenu = link.querySelector(".mobile-list__msubmenu");
    if (!submenu) continue;

    link.addEventListener("click", () => {
      if (icon.classList.contains("sub-visible")) {
        submenu.style.display = "none";
        icon.classList.remove("sub-visible");
      } else {
        submenu.style.display = "block";
        icon.classList.add("sub-visible");
      }
    });
  }
});
