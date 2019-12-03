//Back to top button//
//Get the button:
mybutton = document.getElementById("top-button");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//ScrollMagic animations//
var tl = new TimelineMax({onUpdate: updatePercentage});
var tl2 = new TimelineMax({onUpdate: updatePercentage});
var tl3 = new TimelineMax({onUpdate: updatePercentage});
var tl4 = new TimelineMax({onUpdate: updatePercentage});
var tl5 = new TimelineMax({onUpdate: updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from(".dz-what-is-line", .5, {x:-200, opacity: 0});

tl2.from(".dz-structure-line", .5, {x:-200, opacity: 0});
tl2.from(".beginner", .5, {x:200, opacity: 0}, "=-.5");
tl2.from(".intermediate", .5, {x:200, opacity: 0}, "=-.3");
tl2.from(".advanced", .5, {x:200, opacity: 0}, "=-.1");

tl3.from(".dz-benefits-line", .5, {x:-200, opacity: 0});

tl4.from(".dz-exercises-line", .5, {y:100, opacity: 0});

tl5.from("#footer-message", 0.5, {scale:1.3, opacity: 0}, "=.2");

const scene = new ScrollMagic.Scene({
  triggerElement: ".dz-info",
  triggerHook: "onCenter"
})
  .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".dz-structure",
    triggerHook: "10%"
})
    .setTween(tl2)
      .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits",
    triggerHook: "onCenter"
})
    .setTween(tl3)
      .addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".dz-exercises-title",
    triggerHook: "onCenter"
})
    .setTween(tl4)
      .addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".dz-footer",
    triggerHook: "onEnter"
})
    .setTween(tl5)
      .addTo(controller);

const imageWhatIs = new ScrollMagic.Scene({
    triggerElement: ".dz-info",
    triggerHook: "10%",
    duration: "80%"
})
    .setClassToggle("#reveal1", "visible")
      .addTo(controller);

function updatePercentage() {
  tl.progress();
}
