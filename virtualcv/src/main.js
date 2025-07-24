import './style.css'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/all'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger);

gsap.to("h1", {
  duration: 1,
  text: "Hello World, I'm Humaid",
  ease: "power1.inOut"
})

gsap.from("#about", {
  duration: 1.5,
  x: -50,
  opacity: 0,
  ease: "power2.out"
});

// gsap.from("#education", {
//   duration: 1.5,
//   x: -50,
//   opacity: 0,
//   ease: "power2.out"
// });

gsap.from(".timeline-item", {
  scrollTrigger: {
    trigger: ".timeline-item",
    start: "top 80%",
    toggleActions: "play pause resume reset",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2
});

gsap.from(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
    toggleActions: "play none resume reset",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2
});

gsap.from(".edu-section", {
  scrollTrigger: {
    trigger: ".edu-section",
    start: "top 80%",
    toggleActions: "play none resume reset",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2
});

gsap.from(".language", {
  scale: 0.6,
  scrollTrigger: {
    trigger: ".language",
    start: "top 85%",
    toggleActions: "play none resume reset"
  },
   opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.1
});
