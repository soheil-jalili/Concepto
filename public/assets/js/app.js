// Menu
const menuBtn = document.querySelector("#btn__menu"),
  overlay = document.querySelector("#overlay"),
  closeBtn = document.querySelector("#closeBtn"),
  menuItems = document.querySelector("#menu__items");

menuBtn.addEventListener("click", () => {
  menuItems.classList.remove(
    "-right-1/2",
    "-right-3/4",
    "max-[325px]:-right-3/4"
  );

  menuItems.classList.add("right-0");
  overlay.classList.add("visible", "opacity-100");
});

const closeMenu = () => {
  menuItems.classList.remove("right-0");

  menuItems.classList.add("-right-1/2", "max-[325px]:-right-3/4");

  overlay.classList.remove("visible", "opacity-100");
};

overlay.addEventListener("click", closeMenu);
closeBtn.addEventListener("click", closeMenu);



// Slider
var swiper = new Swiper(".mySwiper", {});
