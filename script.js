function locomotivescroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#all"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#all" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#all", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#all").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotivescroll()


function mouse() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: 10,
      y: 20,
      left: dets.x,
      top: dets.y,
      duration: 1,
      ease: "power2.out",

    })
  })
}
mouse()


var text = document.querySelector(".text");
var imgg = document.querySelector(".imgg");
var icon1 = document.querySelector(".ri-arrow-down-double-line")
  .addEventListener("click", function () {
    text.style.height = "100%";
    icon1.style.display = "none";
  })
  var icon2 = document.querySelector(".ri-arrow-up-double-fill")
  .addEventListener("click", function () {
    text.style.height = "25%";
  })


function loading() {
  var tl = gsap.timeline()
    .from(".loading h1", {
      y: 50,
      duration: 2,
      delay: 1,
      opacity: -1,
      ease: "power2.out",
    })
    .to(".loading .load2", {
      height: "0%",
      duration: 1.2,
      ease: "power2.out",
    })
    .to(".loading .load1", {
      height: "0%",
      delay:-1,
      duration: 1,
      // ease: "power2.out",
    })
    .to(".loading ", {
      height: "0%",
      ease: "power2.out",
      opacity: -1,
    })
    .from(".nav", {
      y: -100,
      duration: 1,
      opacity: 0,
      ease: "bounce.out",
    })
    .from(".center-img", {
      // y: -100,
      scale: 2,
      duration: 1,
      opacity: 0,
      // delay:1,
      ease: "bounce.out",
    })
    .from(".center-text", {
      y: -100,
      duration: 1,
      opacity: 0,
    })
    .from("#lines", {
      opacity: 0,
      duration: 1,
    })
    .from(".right", {
      x: -50,
      opacity: 0,
      ease: "power3.out",
    })
    .from(".left", {
      x: 50,
      opacity: 0,
      // delay: 1 ,
      ease: "power3.out",
    })
    .from("#page2 .back6", {
      x: -100,
      // duration: .2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page2 .back6",
        scroller: "#all",
        // markers:true,
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      }
    })
    .from("#page2 .back7", {
      x: 100,
      // duration: .2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page2 .back7",
        scroller: "#all",
        // markers:true,
        start: "top 75%",
        end: "top 50%",
        scrub: 1,
      }
    })
    .from("#page2 .onecan", {
      y: 100,
      // duration: 1.2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page2 .onecan",
        scroller: "#all",
        // markers:true,
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
      }
    })
    .from("#page3 .back4", {
      x: -100,
      // duration: .2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page3 .back4",
        scroller: "#all",
        // markers:true,
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      }
    })
    .from("#page3 .div3head", {
      // y: 100,
      opacity: 0,
      // delay: 0,
      // ease: "circ.out",
      scrollTrigger: {
        trigger: "#page3 .div3head",
        scroller: "#all",
        // markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
      }
    })
    .from("#page3 .vdoside", {
      y: 100,
      opacity: 0,
      // delay: 0,
      // ease: "circ.out",
      scrollTrigger: {
        trigger: "#page3 .vdoside",
        scroller: "#all",
        // markers: true,
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      }
    }) 
    .from("#page3 .back5", {
      x: -100,
      // duration: .2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page3 .back5",
        scroller: "#all",
        // markers:true,
        start: "top 50%",
        end: "top 10%",
        scrub: 1,
      }
    })
    .from("#page3 .textside", {
      y: 100,
      opacity: 0,
      duration: 1,
      // delay: 0,
      // ease: "circ.out",
      scrollTrigger: {
        trigger: "#page3 .textside",
        scroller: "#all",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      }
    })
    .from("#page4 h1", {
      y: 100,
      opacity: 0,
      // delay: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "#all",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      }
    })
    .from("#page4 .back1", {
      scale:2,
      // duration: .2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page4 .back1",
        scroller: "#all",
        // markers:true,
        start: "top 60%",
        end: "top 0%",
        scrub: 1,
      }
    })
    .from("#page4 .img4", {
      scale: -1,
      opacity: 0,
      // delay: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page4 .img4",
        scroller: "#all",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      }
    })
    .from("#page4 .back2", {
      scale:3,
      // duration: .2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page4 .back2",
        scroller: "#all",
        // markers:true,
        start: "top 40%",
        end: "top -40%",
        scrub: 1,
      }
    })
    .from("#page4 .back3", {
      scale:2,
      // duration: .2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page4 .back3",
        scroller: "#all",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
      }
    })
    .from("#page5 .div5", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page5 .div5",
        scroller: "#all",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      }
    })
    .from("#page5 .back8", {
      x: -100,
      // duration: .2,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page5 .back8",
        scroller: "#all",
        // markers:true,
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
      }
    })
    .from("#page5 .email", {
      y: 100,
      opacity: 0,
      // delay: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#page5 .email",
        scroller: "#all",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 2,
      }
    })
    .from("#page6 ", {
      y: 100,
      opacity: 1,
      // delay: 0,
      // ease: "circ.out",
      scrollTrigger: {
        trigger: "#page6 ",
        scroller: "#all",
        // markers: true,
        start: "top 100%",
        end: "top 100%",
        scrub: 2,
      }
    })


}

loading()








