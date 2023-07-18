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
        start:"top-50%",
        end:"top-100%",
        scrub:2

    }
})