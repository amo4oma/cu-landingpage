$('#home').mousemove(function(event){
    var moveX = (($(window).width() / 50) - event.pageX) * 0.01;
    var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
    $('.unicorn').css('margin-left', moveX + 'px');
    $('.unicorn').css('margin-top', -moveY + 'px');
 
  }); 
$('#section-2').mousemove(function(event){
    var moveX = (($(window).width() / 50) - event.pageX) * 0.07;
    var moveY = (($(window).height() / 50) - event.pageY) * 0.08;
    $('.sec-2-element-4').css('margin-left', moveX + 'px');
    $('.sec-2-element-2').css('margin-top', -moveY + 'px');
    $('.sec-2-element-2').css('margin-left', -moveY + 'px');
    $('.element-3-small').css('margin-top', -moveY + 'px');
    $('.element-3-small').css('margin-left', -moveY + 'px');
    $('.sec-2-element-1').css('margin-top', -moveY + 'px');
    $('.sec-2-element-1').css('margin-left', -moveY + 'px');
 
  }); 

      
let tl2 = gsap.timeline({
    scrollTrigger :{
        trigger : "#home",
        pin: true, 
        toggleActions: 'play none play none',
        scrub: true,
        nullTargetWarn: false,
        start : "top top",
        end: '+=800',
      }
        });

        tl2.fromTo('#section-2', 5, {y:"0%", },{y:"-100%"},'first')
        tl2.fromTo('.sec-2-element-1', 10, {y:"100%", },{y:"-170%", rotation : -50},'s');


        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".card");
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".slider-container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
          },
         
        });
 
        

        // let tl = gsap.timeline({
        //     scrollTrigger :{
        //         trigger : ".black",
        //         pin: true, 
        //         scrub: true,
 
        //         start : "center center",
        //         end: 'bottom bottom',
        //       }
        //         });
        //         tl.to( CSSRulePlugin.getRule(".black"), {duration: 1, cssRule: { backgroundColor : "#000",}}, "BGC-change");
    


               