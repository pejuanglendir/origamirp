const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf);

  const preloader = gsap.timeline({ ease: "power1.out" });
  preloader.fromTo(".preloader",{ 
    y: "100%",
    },
    {
        duration: 1.2,
        stagger: 0.25,
        y: "0%"
    })
  .fromTo(".preloader", {
    y: "0%" },
    {
        duration: 1.2,
        y: "-100%"
    },
    "+=2"
  );

let hero = gsap.timeline();
    hero.startTime(3.4);
    hero.from(".line-left, .line-right", {
        opacity:0, 
        y: 800, 
        ease: "ease(.3)", 
        duration: 1})

    hero.from(".heading", {
            opacity:0,
            y:100,
            stagger: .05,
            duration: 1.3,
            ease: "back.out(1.7)",
            }, 1)

            hero.from(".hero-image", {
                opacity:0,
                y:100,
                stagger: .05,
                duration: 1.3,
                ease: "back.out(1.7)",
                });

               // gsap.to("#feature-heading", {
                  //  scrollTrigger: {
                     // trigger: "#feature",
                     // scrub: 0.5,
                     // start: "top bottom",
                    //  end: "bottom center",
                    //  ease: "power2"
                   // },
                  //  y: "-80%",
                 // });

                  
                  const imganim2 = gsap.to("#feature-heading, #description-about", {
                    y: 0,
                    opacity:1,
                    autoAlpha: 1,
                    duration: 2.5,
                    ease: "power4.out"
                });
                
                ScrollTrigger.create({
                    trigger: "#feature",
                    start: "bottom bottom",
                    end: "top top",
                    animation: imganim2,
                    toggleActions: "play reverse play reverse"
                })

  const section_2 = document.getElementById("horizontal");
  let box_items = gsap.utils.toArray(".origami_slider_item");
  
gsap.to(box_items, {
    xPercent: -100 * (box_items.length - 1),
    ease: "sine.out",
    scrollTrigger: {
      trigger: section_2,
      pin: true,
      scrub: 3,
      snap: 1 / (box_items.length - 1),
      end: "+=" + section_2.offsetWidth
    }
  });


gsap.set("#heading-statistik", {transformPerspective: 700});

