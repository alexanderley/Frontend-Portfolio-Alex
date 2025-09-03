// Smooth scroll on button click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// makes th site stay on the button
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Register the scroll Plugin
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  scroller: window,
});

// Animates contet of the starter section once the page has been reloaded
gsap.from(".starter-img", { duration: 2, x: "100%", opacity: 0, delay: 1 });

const timeline = gsap.timeline({ defaults: { duration: 1 }, delay: 1 });
const timeline2 = gsap.timeline({ defaults: { duration: 1 }, delay: 1 });

timeline
  .from(".introHeadline", { y: "200%", opacity: 0, ease: "elastic" })
  .from(".heroImage", { x: "100%", opacity: 0, ease: "elastic" })
  .from(".heroTextContainer", { x: "-100%", opacity: 0, ease: "elastic" });

// #Todo The users are causing a Problem!!
timeline2
  .from(".rings", { x: "-100%", opacity: 0, ease: "elastic" })
  .from(".skillTextContainer", { x: "-100%", opacity: 0, ease: "elastic" })
  .from(".circle", { opacity: 0, ease: "elastic" });

gsap.utils.toArray(".project").forEach((project, index) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: "top bottom",
      toggleActions: "play none none none",
    },
    y: "100%",
    opacity: 0,
    duration: 1,
    ease: "expo",
    delay: index * 0.2,
  });
});

gsap.utils.toArray(".contactGrid").forEach((skillTextContainer) => {
  gsap.from(skillTextContainer, {
    scrollTrigger: {
      trigger: ".contactGrid", // The section that triggers the animation
      // start: "top -250px",
      start: "-400px",
      toggleActions: "play none none none", // Play the animation when in view
      // markers: true, // Optional: shows markers for debugging
    },
    x: "-100%", // Animation properties for sliding in from the left
    opacity: 0,
    duration: 1,
    ease: "expo", // You can adjust the easing to your preference
  });
});
