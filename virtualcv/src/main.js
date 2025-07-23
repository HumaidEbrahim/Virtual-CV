import './style.css'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/all'
gsap.registerPlugin(TextPlugin)

gsap.to("h1", {
  duration: 2,
  text: "Hello World, I'm Humaid",
  ease: "power1.inOut"
})

gsap.from("#about", {
  duration: 1.5,
  x: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("#education", {
  duration: 1.5,
  x: -50,
  opacity: 0,
  ease: "power2.out"
});

