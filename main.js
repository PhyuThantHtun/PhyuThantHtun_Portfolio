import './style.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';



let options = {
    strings: ['Phyu Thant Htun', 'Frontend Developer'],
    typeSpeed: 30,
    loop:true,
    backDelay:2000,
    backSpeed:30
  };
  
  let typed = new Typed('.element', options);

  let toDown = {
    distance: '50px',
    origin: 'top',
    interval : 300,
    duration: 700

};

ScrollReveal().reveal('.to-down', toDown);

let toRight = {
  distance: '50px',
  origin: 'left',
  interval : 300,
  duration: 900

};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
  distance: '50px',
  origin: 'right',
  interval : 300,
  duration: 900

};

ScrollReveal().reveal('.to-left', toLeft);