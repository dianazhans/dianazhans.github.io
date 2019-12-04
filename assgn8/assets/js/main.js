// //Back to top button//
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
//section lines//
var tl = new TimelineMax({onUpdate: updatePercentage}); //what-is line//
var tl2 = new TimelineMax({onUpdate: updatePercentage}); //structure line//
var tl3 = new TimelineMax({onUpdate: updatePercentage}); //benefits line//
var tl4 = new TimelineMax({onUpdate: updatePercentage}); //exercises line//
var tl5 = new TimelineMax({onUpdate: updatePercentage}); //footer message//
//benefits//
var tl6 = new TimelineMax({onUpdate: updatePercentage}); //benefits-01//
var tl7 = new TimelineMax({onUpdate: updatePercentage}); //benefits-02//
var tl8 = new TimelineMax({onUpdate: updatePercentage}); //benefits-03//
var tl9 = new TimelineMax({onUpdate: updatePercentage}); //benefits-04//
var tl10 = new TimelineMax({onUpdate: updatePercentage}); //benefits-05//
var tl11 = new TimelineMax({onUpdate: updatePercentage}); //benefits-06//
var tl12 = new TimelineMax({onUpdate: updatePercentage}); //benefits-07//
var tl13 = new TimelineMax({onUpdate: updatePercentage}); //benefits-08//
//what-is-image//
var tl16 = new TimelineMax({onUpdate: updatePercentage}); //what-is image//
//exercises//
var tl17 = new TimelineMax({onUpdate: updatePercentage}); //push-up//
var tl18 = new TimelineMax({onUpdate: updatePercentage}); //lunge//
var tl19 = new TimelineMax({onUpdate: updatePercentage}); //step-up//
var tl20 = new TimelineMax({onUpdate: updatePercentage}); //tricep-dips//
var tl21 = new TimelineMax({onUpdate: updatePercentage}); //squat-jump//
var tl22 = new TimelineMax({onUpdate: updatePercentage}); //high-knees//
var tl23 = new TimelineMax({onUpdate: updatePercentage}); //burpee//
const controller = new ScrollMagic.Controller();

tl.from(".dz-what-is-line", .5, {x:-200, opacity: 0});

tl2.from(".dz-structure-line", .5, {x:-200, opacity: 0});
tl2.from(".beginner", .5, {x:200, opacity: 0}, "=-.5");
tl2.from(".intermediate", .5, {x:200, opacity: 0}, "=-.3");
tl2.from(".advanced", .5, {x:200, opacity: 0}, "=-.1");

tl3.from(".dz-benefits-line", .5, {x:-200, opacity: 0});

tl4.from(".dz-exercises-line", .5, {y:100, opacity: 0});

tl5.from("#footer-message", .5, {scale:1.3, opacity: 0}, "=.2");

//benefits animations//
tl6.from(".dz-benefits-01", .5, {x:-200, opacity: 0});
tl7.from(".dz-benefits-02", .5, {x:-200, opacity: 0});
tl8.from(".dz-benefits-03", .5, {x:-200, opacity: 0});
tl9.from(".dz-benefits-04", .5, {x:-200, opacity: 0});
tl10.from(".dz-benefits-05", .5, {x:-200, opacity: 0});
tl11.from(".dz-benefits-06", .5, {x:-200, opacity: 0});
tl12.from(".dz-benefits-07", .5, {x:-200, opacity: 0});
tl13.from(".dz-benefits-08", .5, {x:-200, opacity: 0});

tl16.from(".dz-what-is-image", .5, {x:200, opacity: 0});

tl17.from(".dz-push-up", .5, {y:200, opacity: 0});
tl18.from(".dz-lunge", .5, {y:200, opacity: 0});
tl19.from(".dz-step-up", .5, {y:200, opacity: 0});
tl20.from(".dz-tricep-dips", .5, {y:200, opacity: 0});
tl21.from(".dz-squat-jump", .5, {y:200, opacity: 0});
tl22.from(".dz-high-knees", .5, {y:200, opacity: 0});
tl23.from(".dz-burpee", .5, {y:200, opacity: 0});

const scene = new ScrollMagic.Scene({
  triggerElement: ".dz-info",
  triggerHook: "10%"
})
  .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".dz-structure",
    triggerHook: "onCenter"
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

const scene6 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits-01",
    triggerHook: "onEnter"
})
    .setTween(tl6)
      .addTo(controller);

const scene7 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits-02",
    triggerHook: "onEnter"
})
    .setTween(tl7)
      .addTo(controller);

const scene8 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits-03",
    triggerHook: "onEnter"
})
    .setTween(tl8)
      .addTo(controller);

const scene9 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits-04",
    triggerHook: "onEnter"
})
    .setTween(tl9)
      .addTo(controller);

const scene10 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits-05",
    triggerHook: "onEnter"
})
    .setTween(tl10)
      .addTo(controller);

const scene11 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits-06",
    triggerHook: "onEnter"
})
    .setTween(tl11)
      .addTo(controller);

const scene12 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits-07",
    triggerHook: "onEnter"
})
    .setTween(tl12)
      .addTo(controller);

const scene13 = new ScrollMagic.Scene({
    triggerElement: ".dz-benefits-08",
    triggerHook: "onEnter"
})
    .setTween(tl13)
      .addTo(controller);

const scene16 = new ScrollMagic.Scene({
    triggerElement: ".dz-what-is-image",
    triggerHook: "10%"
})
    .setTween(tl16)
      .addTo(controller);

const scene17 = new ScrollMagic.Scene({
    triggerElement: ".dz-push-up",
    triggerHook: "onEnter"
})
    .setTween(tl17)
      .addTo(controller);

const scene18 = new ScrollMagic.Scene({
    triggerElement: ".dz-lunge",
    triggerHook: "onEnter"
})
    .setTween(tl18)
      .addTo(controller);

const scene19 = new ScrollMagic.Scene({
    triggerElement: ".dz-step-up",
    triggerHook: "onEnter"
})
    .setTween(tl19)
      .addTo(controller);

const scene20 = new ScrollMagic.Scene({
    triggerElement: ".dz-tricep-dips",
    triggerHook: "onEnter"
})
    .setTween(tl20)
      .addTo(controller);

const scene21 = new ScrollMagic.Scene({
    triggerElement: ".dz-squat-jump",
    triggerHook: "onEnter"
})
    .setTween(tl21)
      .addTo(controller);

const scene22 = new ScrollMagic.Scene({
    triggerElement: ".dz-high-knees",
    triggerHook: "onEnter"
})
    .setTween(tl22)
      .addTo(controller);

const scene23 = new ScrollMagic.Scene({
    triggerElement: ".dz-burpee",
    triggerHook: "onEnter"
})
    .setTween(tl23)
      .addTo(controller);

function updatePercentage() {
  tl.progress();
}
