$('#home').mousemove(function(event){
    var moveX = (($(window).width() / 50) - event.pageX) * 0.01;
    var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
    $('.unicorn').css('margin-left', moveX + 'px');
    $('.unicorn').css('margin-top', -moveY + 'px');
 
  }); 
// $('#section-2').mousemove(function(event){
//     var moveX = (($(window).width() / 50) - event.pageX) * 0.07;
//     var moveY = (($(window).height() / 50) - event.pageY) * 0.08;
//     $('.sec-2-element-4').css('margin-left', moveX + 'px');
//     $('.sec-2-element-2').css('margin-top', -moveY + 'px');
//     $('.sec-2-element-2').css('margin-left', -moveY + 'px');
//     $('.element-3-small').css('margin-top', -moveY + 'px');
//     $('.element-3-small').css('margin-left', -moveY + 'px');
//     $('.sec-2-element-1').css('margin-top', -moveY + 'px');
//     $('.sec-2-element-1').css('margin-left', -moveY + 'px');
 
//   }); 



const throttled = (delay, fn) => {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

const movableElementsWrapper = document.querySelector('.movable-elemnts-containet');

const mouseMoveHandler = (e) => {
      const y = e.movementY;
      const x = e.movementX;
  
      let moveX = x > 0 ? -x : x;
      let moveY = y > 0 ? -y : y;

      const movableElements =   document.querySelectorAll('.movable');

      movableElements.forEach(
        (movableElement) => {
          gsap.to(movableElement, {x: moveX, y: moveY, duration: 1})
        }
      );
   };
const speed = 0.35;

const mouseMoveHandler2 = (e) => {
  const movableElements =   document.querySelectorAll('.movable');

  movableElements.forEach(
    (movableElement) => {
      const  shiftValue = movableElement.getAttribute('data-value');
      const moveX = (e.clientX * shiftValue) / 250;
      const moveY = (e.clientY * shiftValue) / 250;
      
      
      gsap.to(movableElement, {x: moveX, y: moveY, duration: 1})

    }
  );
};

const tHandler = throttled(200, mouseMoveHandler2);
movableElementsWrapper.onmousemove = tHandler;

  
gsap.registerPlugin(ScrollTrigger,TextPlugin);


let tl2 = gsap.timeline({
    scrollTrigger :{
        trigger : "#home",
        pin: true, 
        toggleActions: 'play none play none',
        scrub: true,
        nullTargetWarn: false,
        start : "top top",
        end: '+=1500',
      }
        });

        tl2.fromTo('#section-2', 5, {y:"0%", },{y:"-100%"},'first')
        tl2.fromTo('.element-container', 5, {},{delay:15},'second')
        
        tl2.from('.slid-text-one',9,{x:'-100%',opacity:0,delay:3},'se')
        tl2.from('.slid-text-two',9,{x:'-100%',opacity:0,delay:5},'se')
        tl2.from('.slid-text-three',9,{x:'-100%',opacity:0,delay:6},'se')
        tl2.from('.slid-text-four',9,{x:'-100%',opacity:0,delay:9},'se')
        tl2.to('.sec-2-element-1',9,{rotation:-70,delay:10},'se')
    

       let ext = gsap.timeline({
          scrollTrigger :{
              trigger : ".extinstion",
          //  markers:true,
              toggleActions: 'play none play none',
              scrub: true,
              nullTargetWarn: false,
              start : "top top",
              end: '+=1600',
            }

     
              });
              ext.to('.extinstion',1,{backgroundColor:'#fff'},'first')
    

        let sections = gsap.utils.toArray(".card");
        let maxWidth = 0;
        
        const getMaxWidth = () => {
          maxWidth = 0;
          sections.forEach((section) => {
            maxWidth += section.offsetWidth;
          });
        };
 
 
 
 let projectSlides = gsap.timeline({
  scrollTrigger : {
    trigger: '.projects',
    pin: true,
    start: 'top top',
    end: '=+800%',
    scrub: true
  }
 });

 

 projectSlides.to('.card.one', 15 , {x: '-170%'},'d')
 projectSlides.to('.card.two', 15 , {x: '-190%'},'d')
 projectSlides.to('.card.three', 15 , {x: '-200%'},'d')


 let sec3Extention = gsap.timeline({
  scrollTrigger : {
    trigger: '.sec-3-to-4',
    pin: false,
    start: 'top top',
    end: '=+80%',
    scrub: true
  }
 });
 sec3Extention.to('.sec-3-to-4',1,{backgroundColor: '#171717'})
 
 
        let tlsB = gsap.timeline({
          scrollTrigger :{
              trigger : ".slider-container",
              // markers:true,
              scrub: 1,
              nullTargetWarn: false,
              start : "top top",
              end: '+=3600',
            }
              });

              tlsB.to('.scroll-bar-container',{display:'flex'})
              tlsB.to('.first',9,{backgroundColor:'#003566'})
              tlsB.to('.first',9,{backgroundColor:'#dbdbdb'})
              tlsB.to('.second',9,{backgroundColor:'#003566'})
              tlsB.to('.second',9,{backgroundColor:'#003566'})
              tlsB.to('.second',9,{backgroundColor:'#dbdbdb'})
              tlsB.to('.third',9,{backgroundColor:'#003566'})
              tlsB.to('.third',9,{backgroundColor:'#003566'})
              tlsB.to('.third',9,{backgroundColor:'#003566'})
              tlsB.to('.third',9,{backgroundColor:'#dbdbdb'})

              tlsB.to('.scroll-bar-container',9,{display:'none'},'final-1')
             
      
       
    let secF = gsap.timeline({
            scrollTrigger :{
                trigger : ".section-4",
                pin: true, 
                scrub: 1.5,
                // markers:true,
                start : "top top",
                end: '+=1500',
              }
                });
          secF.to('.why-important',5,{y:'-30%',opacity:0})
          secF.to('.bulding-blocks',5,{y:'-15%', opacity:1})
           secF.fromTo('.text-one',5,{opacity:0,y:'200%'},{y:'-100%',opacity: 1},'first')
           secF.to('.first-dot',5,{backgroundColor:'#fff'},'first')
           secF.to('first-dot',5,{})
           secF.to('.text-one',5,{opacity:0, y:'-200%'}, 'second')
           secF.to('.first-dot',5,{backgroundColor:'#1E1E1E'},'second')
           secF.to('.second-dot',5,{backgroundColor:'#fff'},'second-2')
           secF.fromTo('.text-two',5,{opacity:0,y:'200%'},{y:'-100%',opacity: 1},'second-2')
           secF.to('.second-dot',5,{backgroundColor:'#1E1E1E'},'third')
           secF.to('.third-dot',5,{backgroundColor:'#fff'},'third')
           secF.to('.text-two',5,{opacity:0, y:'-300%'}, 'third')
           secF.fromTo('.text-three',5,{opacity:0,y:'300%'},{y:'-100%',opacity: 1},'third-2')
           secF.to('.third-dot',5,{backgroundColor:'#1E1E1E'},'fourth')
           secF.to('.forth-dot',5,{backgroundColor:'#fff'},'fourth')
           secF.to('.text-three',5,{opacity:0, y:'-400%'}, 'fourth')
           secF.fromTo('.text-four',5,{opacity:0,y:'100%'},{y:'-100%',opacity: 1},'fourth-2')
           secF.to('.forth-dot',5,{backgroundColor:'#1E1E1E'},'fourth-3')
           secF.to('.fifth-dot',5,{backgroundColor:'#fff'},'fifth-3')
           secF.to('.text-four',5,{opacity:0, y:'-500%'},'fifth-3')

           secF.fromTo('.text-five',5,{opacity:0,y:'100%'},{y:'-100%',opacity: 1},'fifth')
           secF.to('.fifth-dot',5,{backgroundColor:'#1E1E1E'},'fifth')
           secF.to('.sixth-dot',5,{backgroundColor:'#fff'},'fifth')
           secF.to('.text-five',5,{opacity:0, y:'-400%'}, 'fifth-2')
           
           secF.fromTo('.text-six',5,{opacity:0,y:'100%'},{y:'-100%',opacity: 1},'six')




     let secFive= gsap.timeline({
       scrollTrigger:{
         trigger: '.ext-3',
         scrub: 1.5,
         start : "center center",
         end: '+=1200',


       }
     })


     secFive.from('.title-container',15,{scale:-5},'title animation');
     secFive.from('.title-container',1,{y:-'150%'},'tixtle animation');
     secFive.to({}, {duration: 2}) 
 
      


     let YellowExt= gsap.timeline({
       scrollTrigger:{
         trigger: '.ext-3',
         scrub: true,
        //  markers:true,
         start : "top top",
         end: '+=1000',


       }
     })
     console.log($(window).width())
     console.log(window.screen.availWidth)

     YellowExt.to('.ext-3',5,{backgroundColor:"#FDB913"});

     let secFiveT= gsap.timeline({
      scrollTrigger:{
        trigger: '.title-container',
        scrub: 1.5,
       
        start : "bottom =+80%",
        end: '+=600',


      }
    })

    secFiveT.to('.visually-captivating',5,{x:'80%'},'k')
   
    secFiveT.to('.conversion-as',5,{x:'-100%'},'k')
   
    secFiveT.to('.concise',5,{x:'90%'},'k')
   
    secFiveT.from('.sec-5-button',1,{y:'200%', opacity:0},'ks')
 
    let secSix= gsap.timeline({
      scrollTrigger:{
         trigger: '.section-6',
        scrub: 2.5,
        pin:true,
        // markers:true,
        start : "top top",
        end: '+300 ',
        onLeave: self => $('.section-6').css({'position':'fixed','transform': 'translate(0px, 0px)','z-index':'-55'})


      }
    })
    
    secSix.fromTo('.bg-reotation',2,{rotation: 0, opacity: 0},{rotation:25, opacity:1})  
   
 
    secSix.from('#engaeg-btn',2,{y:'100%', opacity:0})  
     
     
    //



    let titleScale= gsap.timeline({
      scrollTrigger:{
        trigger: '.sec-6-button',
        scrub: 2,
        // markers:true,
        start : "top top",
        end: '+100% ',
    


      }
    })
     
    titleScale.from('.heading-1',1,{scale: 0})

    //


    let secSev= gsap.timeline({
      scrollTrigger:{
        trigger: '.section-7',
        scrub: 1.3,
        pin:true,
        // markers:true,
        start : "top top",
        end: '+200% ',
  

      }
    })
     
    secSev.to('.section-7', {delay:4 },)
//2
    secSev.to('.section-7', {backgroundColor: '#FFF5FA'},'f')
    secSev.to('.sec-7-number', {color: '#F05B89'},'f')
    secSev.to('#sec-7-number',{text: '.02'},'f')
    secSev.to('.slid-2',{display: 'block'},'f-1')
    secSev.to('.slid-1',{display: 'none'},'f')
    .to({}, {duration: 2})
    //slide-3
    secSev.to('.section-7', {backgroundColor: '#FCE6E9'},'s')
    secSev.to('.sec-7-number', {color: '#C4161C'},'s')
    secSev.to('#sec-7-number',{text: '.03'},'s')
    secSev.to('.slid-3',{display: 'block'},'s-2')
    secSev.to('.slid-2',{display: 'none'},'s')
    .to({}, {duration: 2})
    //slide-4
    secSev.to('.section-7', {backgroundColor: '#FFF5DE'},'3rd')
    secSev.to('.sec-7-number', {color: '#FDB913'},'3rd')
    secSev.to('#sec-7-number',{text: '.04'},'3rd')
    secSev.to('.slid-4',{display: 'block'},'3rd-2')
    secSev.to('.slid-3',{display: 'none'},'3rd')
    .to({}, {duration: 2})
    //slide-5
    secSev.to('.section-7', {backgroundColor: '#F9FFE9'},'4rd')
    secSev.to('.sec-7-number', {color: '#9ACA4C'},'4rd')
    secSev.to('#sec-7-number',{text: '.05'},'4rd')
    secSev.to('.slid-5',{display: 'block'},'4rd-2')
    secSev.to('.slid-4',{display: 'none'},'4rd')
    .to({}, {duration: 2})
    //slide-6
    secSev.to('.section-7', {backgroundColor: '#E6FFFB'},'5rd')
    secSev.to('.sec-7-number', {color: '#5EC5B6'},'5rd')
    secSev.to('#sec-7-number',{text: '.06'},'5rd')
    secSev.to('.slid-6',{display: 'block'},'5rd-2')
    secSev.to('.slid-5',{display: 'none'},'5rd')
    .to({}, {duration: 2})
    //slide-5
    secSev.to('.section-7', {backgroundColor: '#FFF3E9'},'6rd')
    secSev.to('.sec-7-number', {color: '#C69A6C'},'6rd')
    secSev.to('#sec-7-number',{text: '.07'},'6rd')
    secSev.to('.slid-7',{display: 'block'},'6rd-2')
    secSev.to('.slid-6',{display: 'none'},'6rd')
    .to({}, {duration: 2})


//8


let secEight= gsap.timeline({
  scrollTrigger:{
    trigger: '.section-8',
    scrub: 1.3,
    pin:true,
    // markers:true,
    start : "top top",
    end: '+50% ',


  }
})
 
secEight.from('.sec-8-col-1-text', 2, {y:'100%', x:'-100%',opacity:0}, 'firstText')
secEight.from('.sec-8-col-2-text', 2 , {y:'100%', x:'100%',opacity:0}, 'firstText')
    

let secTen= gsap.timeline({
  scrollTrigger:{
    trigger: '.sec-10-extntion',
    scrub: 2,
    // markers:true,
    start : "bottom bottom ",
    end: '+=500',
   

 
  }
})


secTen.from('.sec-10-text',15,{opacity:0, scale:-0.5 ,y :'100%'},'animation')
secTen.from('.sec-10-text-2',15,{opacity:0, scale:-0.5,y :'100%'},'animation-2')
secTen.from('.sec-10-titel',15,{opacity:0, scale:-0.5,y :'100%'},'animation-3')
secTen.from('.joyce',15,{opacity:0, scale:-0.5,y :'100%'},'animation-3')


let secEliven= gsap.timeline({
  scrollTrigger:{
    trigger: '.section-9',
    scrub: 1.7,
    pin:false,
    // markers:true,
    start : "top =+50%",
    end: 'center center',


  }
})

// secEliven.from('.sec-9-col-1-text', { x:'-150%'})
// secEliven.from('.sec-9-col-1-p', { x:'-150%'})
// secEliven.from('#engaeg-btn', { x:'-150%'})
 