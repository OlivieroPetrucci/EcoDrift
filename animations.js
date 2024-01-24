import './style/style.css';
import { gsap } from "gsap-trial";
import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";
import { SplitText } from 'gsap-trial/SplitText';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollToPlugin } from 'gsap-trial/ScrollToPlugin';
import { MotionPathPlugin } from "gsap-trial/MotionPathPlugin";
import { MotionPathHelper } from "gsap-trial/MotionPathHelper";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import SplitType from 'split-type';

import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(
  ScrambleTextPlugin, 
  ScrollTrigger, 
  SplitText, 
  ScrollToPlugin, 
  MotionPathPlugin, 
  MotionPathHelper, 
  ScrollSmoother
  );

let hero_1_text_1 = new SplitText("#hero-text-1", {type: "chars"});
let hero_1_text_1_chars = hero_1_text_1.chars;
let hero_1_text_2 = new SplitText("#hero-text-2", {type: "chars"});
let hero_1_text_2_chars = hero_1_text_2.chars;
let hero_1_high_1 = new SplitText("#hero-text-highlight-1", {type: "chars"});
let hero_1_high_1_chars = hero_1_high_1.chars;
let hero_1_high_2 = new SplitText("#hero-text-highlight-2", {type: "chars"});
let hero_1_high_2_chars = hero_1_high_2.chars;

let hero_2_text_1 = new SplitText("#hero-2-text-1", {type: "chars"});
let hero_2_text_1_chars = hero_2_text_1.chars;
let hero_2_text_2 = new SplitText("#hero-2-text-2", {type: "chars"});
let hero_2_text_2_chars = hero_2_text_2.chars;
let hero_2_text_3 = new SplitText("#hero-2-text-3", {type: "chars"});
let hero_2_text_3_chars = hero_2_text_3.chars;
let hero_2_high_1 = new SplitText("#hero-2-text-highlight-1", {type: "chars"});
let hero_2_high_1_chars = hero_2_high_1.chars;
let hero_2_high_2 = new SplitText("#hero-2-text-highlight-2", {type: "chars"});
let hero_2_high_2_chars = hero_2_high_2.chars; 
let hero_2_high_3 = new SplitText("#hero-2-text-highlight-3", {type: "chars"});
let hero_2_high_3_chars = hero_2_high_3.chars;

let hero = document.getElementById("hero");
let hero_2 = document.getElementById("hero-2");
const body = document.body;
const html = document.html;

let hero_text_anim = gsap.timeline({defaults: {duration: 1, ease: "none"}});
hero_text_anim.from(hero_1_text_1_chars, {duration: 0.04, autoAlpha:0, stagger: 0.06})
.from(hero_1_high_1_chars, {duration:0.4, yPercent:130, stagger:0.04, ease:"back.out"})
.from(hero_1_text_2_chars, {duration: 0.03, autoAlpha:0, stagger: 0.06})
.from(hero_1_high_2_chars, {duration:0.4, yPercent:130, stagger:0.04, ease:"back.out"})
.to(hero, {duration: 0.8, autoAlpha: 0, y: -200, ease: "power2.out", onComplete: () => {
  hero.parentNode.removeChild(hero);
  document.documentElement.style.overflow = 'auto';
  document.documentElement.style.height = 'auto';
  document.body.style.overflow = 'auto';
  document.body.style.height = 'auto';
  setTimeout(function() {
    window.scrollBy(0, 50);
  }, 200);
  
  setTimeout(function() {
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  }, 500);
}});



let hero_2_text_anim = gsap.timeline({defaults: {duration: 1, ease: "none"}, 
scrollTrigger: {
  trigger: hero_2,
  start: "51% center",
  scrub: false,
  markers: false,
}});
hero_2_text_anim.to(hero, {duration: 0.6, autoAlpha: 0, y: -200, ease: "power2.out", onComplete: () => {hero.parentNode.removeChild(hero)} })
.to(window, {duration: 0.6, scrollTo: hero_2, ease: "power2.out"}, "-=0.7")
.from(hero_2_text_1_chars, {duration: 0.06, autoAlpha:0, stagger: 0.06})
.from(hero_2_high_1_chars, {duration:0.6, yPercent:130, stagger:0.04, ease:"back.out"})
.from(hero_2_text_2_chars, {duration: 0.06, autoAlpha:0, stagger: 0.06})
.from(hero_2_high_2_chars, {duration:0.6, yPercent:130, stagger:0.04, ease:"back.out", onStart: plants})
.from(hero_2_text_3_chars, {duration: 0.06, autoAlpha:0, stagger: 0.06})
.from(hero_2_high_3_chars, {duration:0.6, yPercent:130, stagger:0.04, ease:"back.out", onStart: logoPath1, onComplete: () => {
  setTimeout(function() {
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  }, 200);
}});

function plants() {
  let plant_1 = document.getElementById("plant-1");
  let plant_2 = document.getElementById("plant-2");
  let plant_21 = document.getElementById("plant-21");
  let plant_3 = document.getElementById("plant-3");

  let plants_anim = gsap.timeline({defaults: {duration: 1, ease: "power2.out"}});

  plants_anim.set(plant_1, { transformOrigin: "50% 100%", scaleY: 0, autoAlpha:0 })
  .set(plant_2, { transformOrigin: "50% 100%", scaleY: 0, autoAlpha:0 }, "-=1")
  .set(plant_21, { transformOrigin: "50% 100%", scaleY: 0, autoAlpha:0 }, "-=1")
  .to(plant_1, { scaleY: 1, autoAlpha:1, duration: 1.2 })
  .to(plant_2, { scaleY: 1, autoAlpha:1, duration: 0.8 }, "-=0.8")
  .to(plant_21, { scaleY: 1, autoAlpha:1, duration: 0.8 }, "-=0.8")
  .to(plant_3, { autoAlpha:1, duration: 0.6 });
}


function logoPath1() {
  const pathBehind = document.getElementById("path-behind-1");
  let logo_path_anim = gsap.timeline({ defaults: { duration: 1, ease: "none" } });

  logo_path_anim.set("#logo-path-1", { scale: 0.5, autoAlpha: 1 })
  .to(
    "#logo-path-1",
    {
      immediateRender: true,
      motionPath: {
        path: "#path-1",
        align: "#path-1",
        alignOrigin: [0.5, 0.5],
      },
      onUpdate: () => {
      const pathLength = pathBehind.getTotalLength();
      const progress = logo_path_anim.progress();
      const offset = pathLength * (1 - progress);

      gsap.set(pathBehind, { autoAlpha: 1 });

      pathBehind.style.strokeDasharray = pathLength;
      pathBehind.style.strokeDashoffset = offset;
      },
    }
  )
  .to("#logo-path-1", {
    ease: "stance.out",
    rotate: 386,
  }, "-=1");
} 


const calc = document.getElementById("calc");
const calc_text_cont = document.getElementById("calc-text-cont");
const quest_box1 = document.getElementById("quest-box1");
const quest_box2 = document.getElementById("quest-box2");
const result_box = document.getElementById("result-box");

let calc_path_anim = gsap.timeline({defaults: {duration: 1, ease: "none"},
scrollTrigger: {
  trigger: calc,
  start: "-20% center",
  scrub: false,
  markers: false,
}});

calc_path_anim.to("body", {duration: 0, onComplete: logoPath2})

function logoPath2() {
  const pathBehind = document.getElementById("path-behind-2");
  let logo_path_anim = gsap.timeline({ defaults: { duration: 2.2, ease: "none" } });

  logo_path_anim.set("#logo-path-2", { scale: 1, autoAlpha: 1 })
  .to(
    "#logo-path-2",
    {
      immediateRender: true,
      motionPath: {
        path: "#path-2",
        align: "#path-2",
        alignOrigin: [0.5, 0.5],
      },
      onUpdate: () => {
      const pathLength = pathBehind.getTotalLength();
      const progress = logo_path_anim.progress();
      const offset = pathLength * (1 - progress);

      gsap.set(pathBehind, { autoAlpha: 1 });

      pathBehind.style.strokeDasharray = pathLength;
      pathBehind.style.strokeDashoffset = offset; 
      }, 
    }
  )
  .to("#logo-path-2", {
    ease: "stance.out",
    rotate: 386,
  }, "-=2.2");

  //MotionPathHelper.create("#logo-path-2");
}

let calc_enter_anim = gsap.timeline({defaults: {duration: 1, ease: "none"}, 
scrollTrigger: {
  trigger: calc,
  start: "top center",
  scrub: false,
  markers: false,
}});

calc_enter_anim.set(calc_text_cont, {y: 800})
.set(quest_box1, {x: -800})
.set(quest_box2, {x: -800})
.set(result_box, {y: 800})
.to(calc_text_cont, {duration: 0.8, autoAlpha: 1, y: 0, ease: "power2.out"})
.to(quest_box1, {duration: 0.8, autoAlpha: 1, x: 0, ease: "power2.out"}, "-=0.4")
.to(quest_box2, {duration: 0.8, autoAlpha: 1, x: 0, ease: "power2.out"}, "-=0.4")
.to(result_box, {duration: 0.8, autoAlpha: 1, y: 0, ease: "power2.out"});

gsap.to("#logo-path-2", {
  rotation: 360, 
  duration: 5,   
  repeat: -1,    
  ease: "linear" 
});



const container = document.querySelector(".container-hor");
const sections = gsap.utils.toArray(".container-hor section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container-hor",
    pin: true,
    scrub: 1,
    end: "+=2000",
    //snap: 1 / (sections.length - 1),
    markers: false,
  }
});

/* const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char,i) => {
  const text = new SplitType(char, { types: 'chars' });
  gsap.from(text.chars, {
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      markers: false,
    }
  })
}); */

const lenis = new Lenis()

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
