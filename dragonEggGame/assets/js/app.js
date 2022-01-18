const navbtn = document.querySelector("#navbtn");
const heroNavigationMenu = document.querySelector(".hero-navigation-menu");
navbtn.addEventListener("click", function () {
  if (
    navbtn.getAttribute("src") ===
    "https://img.icons8.com/dotty/80/ffffff/dinosaur-egg.png"
  ) {
    navbtn.setAttribute(
      "src",
      "https://img.icons8.com/ios/80/ffffff/egg-pokemon.png"
    );
    heroNavigationMenu.style.right = "0px";
  } else {
    navbtn.setAttribute(
      "src",
      "https://img.icons8.com/dotty/80/ffffff/dinosaur-egg.png"
    );
    heroNavigationMenu.style.right = "-600px";
  }
});

var tl1 = gsap.timeline();
// tl1.from("#block-hero", { duration: 0.8, width: "0" });
tl1.from(".hero-navigation-btn", { duration: 1, opacity: "0", x: "20px" });
tl1.from(".communcaracter", { duration: 0.5, x: 300, opacity: 0 });
tl1.from(".epiccaracter", { duration: 0.5, x: 300, y: -300, opacity: 0 });
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
