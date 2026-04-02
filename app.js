console.log("Ei pedal");

// ==================== THEME TOGGLE ====================

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

// ==================== NAV: STICKY SCROLL + HAMBURGER ====================

const navEl = document.getElementById("nav");
const hamburger = document.getElementById("navHamburger");
const navMenu = document.getElementById("navMenu");

window.addEventListener("scroll", () => {
  navEl.classList.toggle("scrolled", window.scrollY > 30);
});

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  navMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menuItem")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("open");
    }
  });
}

const wrapper = document.querySelector(".sliderWrapper");
const sliderNavItems = document.querySelectorAll(".sliderNavItem");

const womanWrapper = document.querySelector(".womanWrapper");
const womanMenuItems = document.querySelectorAll(".womanItem");
const womanSliderItems = document.querySelectorAll(".womanSliderItem");

const womanNavItem = document.querySelector("#womanNavItem");
const womanCategory = document.querySelector("#womanCategory");

if (womanNavItem && womanCategory) {
  womanNavItem.addEventListener("click", () => {
    womanCategory.scrollIntoView({ behavior: "smooth" });
  });
}

const manWrapper = document.querySelector(".manSliderWrapper");
const manMenuItems = document.querySelectorAll(".manItem");
const manSliderItems = document.querySelectorAll(".manSliderItem");

const manNavItem = document.querySelector("#manNavItem");
const manCategory = document.querySelector("#manCategory");

if (manNavItem && manCategory) {
  manNavItem.addEventListener("click", () => {
    manCategory.scrollIntoView({ behavior: "smooth" });
  });
}

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/products/air.png",
      },
      {
        code: "darkblue",
        img: "./img/products/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/products/jordan.png",
      },
      {
        code: "green",
        img: "./img/products/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 219,
    colors: [
      {
        code: "lightgray",
        img: "./img/products/blazer.png",
      },
      {
        code: "green",
        img: "./img/products/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 529,
    colors: [
      {
        code: "black",
        img: "./img/products/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/products/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 49,
    colors: [
      {
        code: "gray",
        img: "./img/products/hippie.png",
      },
      {
        code: "black",
        img: "./img/products/hippie2.png",
      },
    ],
  },
];

const womanProducts = [
  {
    id: 1,
    title: "Air Force 1",
    price: 419,
    colors: [
      {
        code: "white",
        img: "./img/woman/woman_airforce1.png",
      },
      {
        code: "pink",
        img: "./img/woman/woman_airforce2.png",
      },
    ],
  },
  {
    id: 2,
    title: "AIR JORDAN LOW",
    price: 359,
    colors: [
      {
        code: "pink",
        img: "./img/woman/jordan_pink.png",
      },
      {
        code: "gray",
        img: "./img/woman/jordan_gray.png",
      },
    ],
  },
  {
    id: 3,
    title: "Nike Vomero",
    price: 129,
    colors: [
      {
        code: "pink",
        img: "./img/woman/vomero_woman2.png",
      },
      {
        code: "green",
        img: "./img/woman/vomero_woman1.png",
      },
      {
        code: "blue",
        img: "./img/woman/vomero_woman3.png",
      },
    ],
  },
];

const manProducts = [
  {
    id: 1,
    title: "NIKE LUKA SNEAKERS",
    price: 129,
    colors: [
      {
        code: "red",
        img: "./img/man/luka_red.png",
      },
      {
        code: "black",
        img: "./img/man/luka_black.png",
      },
    ],
  },
  {
    id: 2,
    title: "AIR PEGASUS SHOES",
    price: 359,
    colors: [
      {
        code: "white",
        img: "./img/man/running_white.png",
      },
      {
        code: "black",
        img: "./img/man/running_black.png",
      },
    ],
  },
  {
    id: 3,
    title: "Nike Skate Low",
    price: 129,
    colors: [
      {
        code: "beige",
        img: "./img/man/skateboard.png",
      },
    ],
  },
];

let choosenProduct = products[0];
let choosenWomanProduct = womanProducts[0];
let choosenManProduct = manProducts[0];

const currentProductImage = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const currentWomanProductImage = document.querySelector(".womanProductImg");
const currentWomanProductTitle = document.querySelector(".womanProductTitle");
const currentWomanProductPrice = document.querySelector(".womanProductPrice");
const currentWomanProductColors = document.querySelectorAll(".womanColor");
const currentWomanProductSizes = document.querySelectorAll(".womanSize");

function syncWomanColorSwatches() {
  currentWomanProductColors.forEach((el, i) => {
    const c = choosenWomanProduct.colors[i];
    if (c) {
      el.style.display = "";
      el.style.backgroundColor = c.code;
    } else {
      el.style.display = "none";
    }
  });
}

const currentManProductImage = document.querySelector(".manProductImg");
const currentManProductTitle = document.querySelector(".manProductTitle");
const currentManProductPrice = document.querySelector(".manProductPrice");
const currentManProductColors = document.querySelectorAll(".manColor");
const currentManProductSizes = document.querySelectorAll(".manSize");
const manColorRow = document.querySelector(".manColorRow");

function syncManColorSwatches() {
  const colors = choosenManProduct.colors;
  currentManProductColors.forEach((el, i) => {
    const c = colors[i];
    if (c) {
      el.style.display = "";
      el.style.backgroundColor = c.code;
    } else {
      el.style.display = "none";
    }
  });
  if (manColorRow) {
    manColorRow.style.display = colors.length <= 1 ? "none" : "";
  }
}

sliderNavItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImage.src = choosenProduct.colors[0].img;
    currentProductColors.forEach((color, i) => {
      color.style.backgroundColor = choosenProduct.colors[i].code;
    });

    sliderNavItems.forEach((btn) => btn.classList.remove("is-active"));
    item.classList.add("is-active");
  });
});

if (womanWrapper && womanSliderItems.length) {
  const womanSlideCount = womanSliderItems.length;
  /* Slides sized to .womanSlider width (not 100vw) so images are not clipped */
  womanWrapper.style.width = `${womanSlideCount * 100}%`;
  womanSliderItems.forEach((slide) => {
    slide.style.flex = `0 0 ${100 / womanSlideCount}%`;
    slide.style.minWidth = "0";
  });

  womanMenuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the choosen woman product
      choosenWomanProduct = womanProducts[index];

      //change texts of currentWomanProduct
      if (currentWomanProductTitle) {
        currentWomanProductTitle.textContent = choosenWomanProduct.title;
      }
      if (currentWomanProductPrice) {
        currentWomanProductPrice.textContent = "$" + choosenWomanProduct.price;
      }
      if (currentWomanProductImage) {
        currentWomanProductImage.src = choosenWomanProduct.colors[0].img;
      }
      syncWomanColorSwatches();

      womanWrapper.style.transform = `translateX(${(-100 * index) / womanSlideCount}%)`;
    });
  });
}

if (manWrapper && manSliderItems.length) {
  const manSlideCount = manSliderItems.length;
  manWrapper.style.width = `${manSlideCount * 100}%`;
  manSliderItems.forEach((slide) => {
    slide.style.flex = `0 0 ${100 / manSlideCount}%`;
    slide.style.minWidth = "0";
  });

  manMenuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the choosen man product
      choosenManProduct = manProducts[index];

      //change texts of currentManProduct
      if (currentManProductTitle) {
        currentManProductTitle.textContent = choosenManProduct.title;
      }
      if (currentManProductPrice) {
        currentManProductPrice.textContent = "$" + choosenManProduct.price;
      }
      if (currentManProductImage) {
        currentManProductImage.src = choosenManProduct.colors[0].img;
      }
      syncManColorSwatches();

      manWrapper.style.transform = `translateX(${(-100 * index) / manSlideCount}%)`;
    });
  });
}

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImage.src = choosenProduct.colors[index].img;
  });
});

currentWomanProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    const variant = choosenWomanProduct.colors[index];
    if (!variant) return;
    currentWomanProductImage.src = variant.img;
  });
});

syncWomanColorSwatches();

currentManProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    const variant = choosenManProduct.colors[index];
    if (!variant) return;
    currentManProductImage.src = variant.img;
  });
});

syncManColorSwatches();

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

currentWomanProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentWomanProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

currentManProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentManProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const womanProductButton = document.querySelector(".womanProductButton");
const womanPayment = document.querySelector(".womanProduct .payment");
const womanClose = document.querySelector(".womanProduct .close");

if (womanProductButton && womanPayment) {
  womanProductButton.addEventListener("click", () => {
    womanPayment.style.display = "flex";
  });
}

if (womanClose && womanPayment) {
  womanClose.addEventListener("click", () => {
    womanPayment.style.display = "none";
  });
}

const manProductButton = document.querySelector(".manProductButton");
const manPayment = document.querySelector(".manProduct .payment");
const manClose = document.querySelector(".manProduct .close");

if (manProductButton && manPayment) {
  manProductButton.addEventListener("click", () => {
    manPayment.style.display = "flex";
  });
}

if (manClose && manPayment) {
  manClose.addEventListener("click", () => {
    manPayment.style.display = "none";
  });
}

// ==================== SALE SECTION ====================

// Thumbnail gallery – swap main image
const saleMainImg = document.getElementById("saleMainImg");
const saleThumbs = document.querySelectorAll(".saleThumb");
const saleGalleryImages = [
  "./img/sale/product1/nike_dunk_low_jordan_1.png",
  "./img/sale/product1/nike_dunk_low_jordan_2.png",
  "./img/sale/product1/nike_dunk_low_jordan_3.png",
  "./img/sale/product1/nike_dunk_low_jordan_4.png",
];

saleThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    saleThumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    if (saleMainImg) saleMainImg.src = thumb.dataset.full;
  });
});

// Size selector
const saleSizeBtns = document.querySelectorAll(".saleSizeBtn");
saleSizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    saleSizeBtns.forEach((b) => b.classList.remove("saleSizeActive"));
    btn.classList.add("saleSizeActive");
  });
});

// Countdown timer (2 days + 14 hours from now)
(function initSaleTimer() {
  const stored = localStorage.getItem("saleEnd");
  let end;
  if (stored && Number(stored) > Date.now()) {
    end = Number(stored);
  } else {
    end = Date.now() + 2 * 86400000 + 14 * 3600000 + 36 * 60000;
    localStorage.setItem("saleEnd", end);
  }

  const daysEl = document.getElementById("saleDays");
  const hoursEl = document.getElementById("saleHours");
  const minsEl = document.getElementById("saleMins");
  const secsEl = document.getElementById("saleSecs");
  if (!daysEl) return;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const diff = Math.max(0, end - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    daysEl.textContent = pad(d);
    hoursEl.textContent = pad(h);
    minsEl.textContent = pad(m);
    secsEl.textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);
})();

// ==================== LIGHTBOX ====================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxOverlay = document.querySelector(".lightboxOverlay");
let lbIndex = 0;

function openLightbox(index) {
  lbIndex = index;
  updateLightbox();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function updateLightbox() {
  lightboxImg.src = saleGalleryImages[lbIndex];
  lightboxCounter.textContent = `${lbIndex + 1} / ${saleGalleryImages.length}`;
}

if (saleMainImg) {
  document.querySelector(".saleProductMain").addEventListener("click", () => {
    const currentSrc = saleMainImg.src;
    const idx = saleGalleryImages.findIndex((img) =>
      currentSrc.includes(img.replace("./", "")),
    );
    openLightbox(idx >= 0 ? idx : 0);
  });
}

saleThumbs.forEach((thumb, i) => {
  thumb.addEventListener("dblclick", () => openLightbox(i));
});

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightboxOverlay) lightboxOverlay.addEventListener("click", closeLightbox);

if (lightboxPrev) {
  lightboxPrev.addEventListener("click", () => {
    lbIndex =
      (lbIndex - 1 + saleGalleryImages.length) % saleGalleryImages.length;
    updateLightbox();
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener("click", () => {
    lbIndex = (lbIndex + 1) % saleGalleryImages.length;
    updateLightbox();
  });
}

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") {
    lbIndex =
      (lbIndex - 1 + saleGalleryImages.length) % saleGalleryImages.length;
    updateLightbox();
  }
  if (e.key === "ArrowRight") {
    lbIndex = (lbIndex + 1) % saleGalleryImages.length;
    updateLightbox();
  }
});
