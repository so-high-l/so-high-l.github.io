const navbtn = document.querySelector("#navbtn");
const heroNavigationMenu = document.querySelector(".hero-navigation-menu");
navbtn.addEventListener("click", function () {
  if (
    navbtn.src === "https://img.icons8.com/ios-filled/30/ffffff/menu--v1.png"
  ) {
    navbtn.src =
      "https://img.icons8.com/ios-filled/30/ffffff/delete-sign--v1.png";
    heroNavigationMenu.style.right = "0";
  } else {
    navbtn.src = "https://img.icons8.com/ios-filled/30/ffffff/menu--v1.png";
    if (window.innerWidth > "1500") {
      heroNavigationMenu.style.right = "-3000px";
    } else if (window.innerWidth > "600") {
      heroNavigationMenu.style.right = "-1500px";
    } else if (window.innerWidth > "400") {
      heroNavigationMenu.style.right = "-600px";
    } else {
      heroNavigationMenu.style.right = "-600px";
    }
  }
});

var tl1 = gsap.timeline();
// tl1.from("#block-hero", { duration: 0.8, width: "0" });
tl1.from(".hero-navigation-btn", { duration: 1, opacity: "0", x: "20px" });
tl1.from(".commoncaracter", { duration: 0.5, x: 300, opacity: 0 });
tl1.from(".epiccaracter", { duration: 0.5, x: -300, opacity: 0 });
tl1.from(".rarecaracter", { duration: 0.5, y: 10, opacity: 0 });
tl1.from(".hero-content", {
  duration: 0.6,
  opacity: "0",
  y: "200px",
});
tl1.from(".section-content-hz", { duration: 0.5, opacity: "0", y: "20px" });

var tl2 = gsap.timeline({ repeat: -1, yoyo: true });
tl2.to(".rarecaracter", {
  duration: 0.5,
  y: 0,
  // ease: Power1.easeInOut,
});

var tl3 = gsap.timeline({ repeat: -1, yoyo: true });
tl3.to(".epiccaracter", {
  duration: 0.5,
  scale: 1.02,
  // ease: Power1.easeInOut,
});

var tl4 = gsap.timeline({ repeat: -1, yoyo: true });
tl4.to(".commoncaracter", {
  duration: 0.5,
  scale: 1.02,
  // ease: Power1.easeInOut,
});
// cursor circle

// gallery carousels
//eggs
const p1 = "./assets/images/nft/dragon/";
const p2 = "./assets/images/nft/egg/";
let image1 = document.querySelector("#eggs-imgs");

let eggsimages = [
  "egg1.png",
  "egg2.png",
  "egg3.png",
  "egg4.png",
  "egg5.png",
  "egg6.png",
  "egg7.png",
  "egg8.png",
  "egg9.png",
  "egg10.png",
  "egg11.png",
  "egg12.png",
  "egg13.png",
  "egg14.png",
  "egg15.png",
  "egg16.png",
  "egg17.png",
  "egg18.png",
  "egg19.png",
  "egg20.png",
  "egg21.png",
  "egg22.png",
  "egg23.png",
  "egg24.png",
  "egg25.png",
  "queenegg.png",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 26);
  image1.src = p2 + eggsimages[random];
}, 300);

// dragons
let image2 = document.querySelector("#dragons-imgs");
let dragonsimages = [
  "d1.png",
  "d2.png",
  "d3.png",
  "d4.png",
  "d5.png",
  "d6.png",
  "d7.png",
  "d8.png",
  "d9.png",
  "d10.png",
  "d11.png",
  "d12.png",
  "d13.png",
  "d14.png",
  "d15.png",
  "queen.png",
  "queen.png",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 17);
  image2.src = p1 + dragonsimages[random];
}, 300);

// roadmap animation
("use strict");

function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

const sections = qs(".section", true);
const timeline = qs(".timeline");
const line = qs(".line");
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist = targetY - timelineRect.top;
  console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach((item) => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);
