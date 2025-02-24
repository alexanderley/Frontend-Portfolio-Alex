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

// Make sure ScrollTrigger is correctly set up and there are no conflicts
ScrollTrigger.defaults({
  scroller: window,
});

// Animates contet of the starter section once the page has been reloaded
gsap.from(".starter-img", { duration: 2, x: "100%", opacity: 0, delay: 1 });

// Timeline will ensure that the effect get played one after another, setting the default duration will create a durantion wich will apply for all of the elements inside of the timeline
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
      trigger: project, // Trigger each project individually
      start: "top bottom", // Start the animation when the top of the project reaches the bottom of the viewport
      toggleActions: "play none none none", // Play the animation when in view
      // markers: true, // Optional: shows markers for debugging
    },
    y: "100%", // Slide from below (you can change this to x or other values)
    opacity: 0,
    duration: 1,
    ease: "expo", // Adjust easing as needed
    delay: index * 0.2, // Adds a staggered delay for each element (optional)
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
