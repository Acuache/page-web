document.addEventListener("DOMContentLoaded", () => {
  const input__search = document.querySelector(".search__input");
  const icon__search = document.querySelector(".navbar__button");
  icon__search.addEventListener("click", () => {
    let visible = document.querySelector(".visible");
    if (visible) {
      input__search.style.width = "0";
      input__search.style.padding = "0";
      input__search.classList.remove("visible");
    } else {
      input__search.style.width = "20rem";
      input__search.style.paddingLeft = "1rem";
      input__search.classList.add("visible");
    }
  });
});
