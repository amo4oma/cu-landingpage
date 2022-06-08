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
        tl2.fromTo('.sec-2-element-1', 10, {y:"100%", },{y:"-170%", rotation : -50},'s')


        let tl = gsap.timeline({
            scrollTrigger :{
                trigger : "#projects",
                pin: true, 
                scrub: true,
                nullTargetWarn: false,
                start : "top top",
                end: '+=1900',
              }
                });

                tl.to('.one',5, {x: '-250%'},"1");
                tl.to('.two',5, {x: '-350%'},"2");
                tl.to('.three',5, {x: '-450%'},"3");
                tl.to('.four',5, {x: '-600%'},"4");
                tl.to('.five',5, {x: '-700%'},"5");
                tl.to( CSSRulePlugin.getRule("#projects"), {duration: 2, cssRule: { backgroundColor : "#000",}}, "BGC-change");

               