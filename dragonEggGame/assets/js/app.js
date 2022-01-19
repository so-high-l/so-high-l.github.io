const navbtn = document.querySelector("#navbtn");
const heroNavigationMenu = document.querySelector(".hero-navigation-menu");
navbtn.addEventListener("click", function () {
  if (navbtn.style.rotate === "") {
    navbtn.style.rotate = "90deg";
    heroNavigationMenu.style.right = "0px";
  } else {
    navbtn.style.rotate = "";
    heroNavigationMenu.style.right = "-600px";
  }
});

var tl1 = gsap.timeline();
// tl1.from("#block-hero", { duration: 0.8, width: "0" });
tl1.from(".hero-navigation-btn", { duration: 1, opacity: "0", x: "20px" });
tl1.from(".communcaracter", { duration: 0.5, x: 300, opacity: 0 });
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
tl4.to(".communcaracter", {
  duration: 0.5,
  scale: 1.02,
  // ease: Power1.easeInOut,
});
// cursor circle
const cursor = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

// gallery carousels
//eggs
const p = "./assets/images/";
let image1 = document.querySelector("#eggs-imgs");
let dragonsimages = [
  "rareWbg.jpeg",
  "rareWbg2.jpeg",
  "rareWbg3.jpeg",
  "rareWbg4.jpeg",
  "rareWbg5.jpeg",
  "rareWbg6.jpeg",
  "epicWbg.jpeg",
  "communWbg.jpeg",
];
let eggsimages = ["egg1.jpeg", "egg2.jpeg", "egg3.jpeg", "egg4.jpeg"];
setInterval(function () {
  let random = Math.floor(Math.random() * 4);
  image1.src = p + eggsimages[random];
}, 300);

// dragons
let image2 = document.querySelector("#dragons-imgs");
setInterval(function () {
  let random = Math.floor(Math.random() * 8);
  image2.src = p + dragonsimages[random];
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
