const crsr=document.querySelector('#cursor')
const blur=document.querySelector('#cursor-blur')
document.addEventListener("mousemove",function(variable){
    crsr.style.left=variable.x+"px"
    crsr.style.top=variable.y+"px"
    blur.style.left=variable.x - 150 +"px"
    blur.style.top=variable.y - 150 +"px"
})



gsap.to("#nav",{
 backgroundColor:"#000",
 height: "100px" ,
 duration:0.5,
 scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -15%",
    end:"top -16%",
    scrub:1
 }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -40%",
        end:"top -80%",
        scrub:2

    }
})

//For navber mouse hover
const h4=document.querySelectorAll('#nav h4');
h4.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4;
        crsr.style.border="0.5px solid #fff"
        crsr.style.backgroundColor="transparent"
     });
     elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
     })
});

//About us page scroller animation
gsap.from('#About-us img,#About-us-in',{
    y:90,
    opacity: 0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:"#About-us",
        scroller:'body',
        start:"top 70%",
        end:"top 50%",
        // markers:true,
        scrub:1
    }
});


//colon scroller animation
gsap.from('#colon1',{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4
    }
})

gsap.from('#colon2',{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4
    }
})

gsap.from('#page4 h1',{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4
    }
})