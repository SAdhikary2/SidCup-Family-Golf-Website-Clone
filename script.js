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