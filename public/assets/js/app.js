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
const swiper = new Swiper(".swiper", {
  spaceBetween: 24,
  slidesPerView: 1,
  observer: true,
  observeParents: true,

  breakpoints: {
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
  },
});

// Popular Companies Swiper
const popularCompany = new Swiper(".popular__swiper", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 90,

  breakpoints: {
    330: {
      slidesPerView: 1.2,
      spaceBetween: 14,
    },

    359: {
      slidesPerView: 1.3,
      spaceBetween: 14,
    },

    411: {
      slidesPerView: 1.5,
      spaceBetween: 32,
    },

    420: {
      slidesPerView: 1.6,
      spaceBetween: 32,
    },

    486: {
      slidesPerView: 2,
      spaceBetween: 82,
    },

    500: {
      slidesPerView: 2,
      spaceBetween: 52,
    },
    555: {
      slidesPerView: 2.2,
      spaceBetween: 54,
    },
    640: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 24,
    },
    1025: {
      slidesPerView: 3.2,
      spaceBetween: 24,
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// News Swiper
const news = new Swiper(".news", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 32,

  breakpoints: {
    360: {
      slidesPerView: 1.3,
      spaceBetween: 32,
    },
    
    400: {
      slidesPerView: 1.5,
      spaceBetween: 32,
    },
    
    436: {
      slidesPerView: 1.5,
      spaceBetween: 32,
    },

    460: {
      slidesPerView: 1.8,
      spaceBetween: 32,
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 62,
    },
    640: {
      slidesPerView: 2.3,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },

    1025: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
