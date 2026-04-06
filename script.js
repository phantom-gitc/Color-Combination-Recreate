function timelineOne() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top",
      end: "+=" + window.innerHeight * 10,
      scrub: 0.01,
      pin: true,
    },
  });

  tl.to("#overlay #centerimg", {
    left: "50%",
    ease: Power1,
  })
    .to(
      "#circle",
      {
        scale: 0.2,
        ease: Power1,
      },
      "a"
    )
    .to(
      "#overlay #purple",
      {
        top: "50%",
        ease: Power1,
      },
      "a"
    )
    .to(
      "#overlay #mainheading",
      {
        top: "150%",
        ease: Power1,
      },
      "a"
    )
    .to(
      "#overlay #centerimg img",
      {
        scale: 0,
        ease: Power1,
      },
      "a"
    )
    .to(
      "#overlay #centerimg span",
      {
        opacity: 0,
        ease: Power1,
      },
      "a"
    )
    .to(
      "#smcircle",
      {
        scale: 0.7,
        ease: Power1,
      },
      "a"
    )
    .to(
      "#circle #btm img",
      {
        rotate: "-180deg",
        ease: Power1,
        stagger: 0.05,
      },
      "a"
    )

    .to(
      "#smcircle ,#circle",
      {
        scale: 0,
        ease: Power1,
      },
      "same"
    )
    .to(
      "#purple",
      {
        scale: 0,
        opacity: 0,
        ease: Power1,
      },
      "same"
    )
    .to(
      "#sechead",
      {
        rotate: "0",
        bottom: "-5%",
        ease: Power1,
        // delay:-.5,
      },
      "same"
    )
    .to("#sidepurple", {
      top: "0%",
      delay: -0.4,
      ease: Power1,
    })
    .to("#sidepurple", {
      top: "-70%",
      delay: 0.2,
      ease: Power1,
    })
    .to(
      "#imagecontainer img",
      {
        scale: 1.25,
        ease: Power0,
      },
      "same"
    );
}

function timelineTwo() {
  gsap.set("#second-overlay #stop .circle1", { top: "150%", scale: 0.5 });
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#second-page",
      start: "top top",
      pin: true,
      scrub: 0.01,
      end: "+=" + window.innerHeight * 12,
    },
  });

  tl2
    .to(".circle1", {
      top: "50%",
      scale: 1,
      duration: 3,
      ease: Power1,
      stagger: 0.1,
    })
    .to(".circle1", {
      top: "50%",
      duration: 3,
      left: "50%",
      scale: 1,
      ease: Power1,
    })
    .to(".circle1", {
      scale: 0.7,
      duration: 3,
      ease: Power1,
    })
    .to(
      ".circle1",
      {
        scale: 10,
        duration: 3,
        ease: Power1,
      },
      "Z"
    )
    .to(
      "#one",
      {
        top: "-100%",
        duration: 3,
        ease: Power1,
      },
      "Z"
    )
    .to(
      "#two",
      {
        top: "0%",
        duration: 3,
        ease: Power1,
      },
      "Z"
    )
    .to(
      "#stop>h1",
      {
        left: "-150%",
        delay: 2,
        duration: 10,
        ease: Power1,
      },
      "Z"
    )
    .to("#head1", {
      opacity: 0,
      duration: 3,
      ease: Power1,
      delay: -8,
    })
    .to(
      "#head2",
      {
        opacity: 1,
        duration: 2,
        ease: Power1,
        delay: -5,
      },
      "change"
    )
    .to(
      "#two",
      {
        top: "-100%",
        duration: 3,
        ease: Power1,
        delay: 3,
      },
      "Z"
    )
    .to(
      "#three",
      {
        top: "0%",
        duration: 3,
        ease: Power1,
        delay: -2.5,
      },
      "change"
    )
    .to(
      "#stop .pi",
      {
        background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,

        ease: Power1,
        delay: 5.5,
      },
      "Z"
    )
    .to("#blocks .bl", {
      top: "0%",
      duration: 3,
      ease: Power1,
      stagger: 0.5,
    })
    .to(
      "#line1",
      {
        duration: 3,
        display: "flex",
        left: "-15%",
        ease: Power0,
      },
      "c"
    )
    .to(
      "#line2",
      {
        duration: 3,
        display: "flex",
        left: "-10%",
        ease: Power0,
      },
      "c"
    );
}

function timelineThree() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#head2-page3",
      start: "top top",

      // pin: true,
      scrub: 2,

      // markers:true
    },
  });
  tl3
    .to(
      "#sliding",
      {
        left: "120%",
        duration: 10,
        ease: Power1,
      },
      "w"
    )
    .to(
      "#cOLOR-COMBINATIONs h1",
      {
        left: "-120%",
        duration: 10,
        ease: Power1,
      },
      "w"
    )

    .to(".prism-text", {
      textAlign: "center",

      delay: -3,
      duration: 10,
      ease: Power1,
    });
}
function timelinefour() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#head3-page3",
      start: "top top",

      pin: true,
      scrub: 2,

      // markers:true
    },
  });
  tl4.to(
    "head3-text ",
    {
      left: "-120%",
      duration: 10,
      ease: Power1,
    },

  );
}
window.addEventListener("DOMContentLoaded", function () {
  timelineOne();
  timelineTwo();
  timelineThree();
  timelinefour();
});

function backgroundAnimation() {
  var page3CirclePart2 = document.querySelector(".page3-circle-part2");
  var thirdPage = document.querySelector("#third-page");

  page3CirclePart2.addEventListener("mouseenter", function () {
    thirdPage.style.backgroundColor = "#f1d7d7d3";
  });
  page3CirclePart2.addEventListener("mouseleave", function () {
    thirdPage.style.backgroundColor = "#ffff";
  });
  var page3CirclePart3 = document.querySelector(".page3-circle-part3");

  page3CirclePart3.addEventListener("mouseenter", function () {
    thirdPage.style.backgroundColor = "  #d5a7b481";
  });
  page3CirclePart3.addEventListener("mouseleave", function () {
    thirdPage.style.backgroundColor = "#ffff";
  });
  var prism = document.querySelector(".prism-text-image");

  prism.addEventListener("mouseenter", function () {
    thirdPage.style.backgroundColor = "  #706993";
  });
  prism.addEventListener("mouseleave", function () {
    thirdPage.style.backgroundColor = "#ffff";
  });
}

backgroundAnimation();
