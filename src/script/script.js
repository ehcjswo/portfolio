// split 쪼개기
document.querySelectorAll(".split").forEach((text) => {
    let splitWrap = text.innerText
        .split("")
        .join("</span><span aria-hidden='true'>");
    text.innerHTML = "<span aria-hidden='true'>" + splitWrap + "</span>";
    text.setAttribute("aria-label", text.innerText);
    });

    const load = document.querySelector(".loadLine");
    const l1 = document.querySelector("._l1");
    const l2 = document.querySelector("._l2");
    const l3 = document.querySelector("._l3");
    const l4 = document.querySelector("._l4");
    const l5 = document.querySelector("._l5");
    const l6 = document.querySelector("._l6");
    const l7 = document.querySelector("._l7");
    const l8 = document.querySelector("._l8");
    const l9 = document.querySelector("._l9");
    const l10 = document.querySelector("._l10");
    const l11 = document.querySelector("._l11");
    const l12 = document.querySelector("._l12");
    const circle = document.querySelector("._c1");
    const box1 = document.querySelector(".blackBox1");
    const box2 = document.querySelector(".blackBox2");
    const box3 = document.querySelector(".whiteBox1");
    const box4 = document.querySelector(".whiteBox2");
    // 초기 상태 설정
    gsap.set(load, {opacity: 1})
    gsap.set(l6, {attr: {x2: 1500, y2: 0}}); 
    gsap.set(l7, {attr: {x2: 1920, y2: 0}}); 
    gsap.set(l10, {attr: {x2: 1500, y2: 0 }});
    gsap.set(box3, {x:"-200%"})
    gsap.set(box4, {x:"200%"})

    gsap.set(l1, {attr: {x2: 0, y2: 0}}); 
    gsap.set(l2, {attr: {x2: 0, y2: 0}}); 
    gsap.set(l3, {attr: {x2: 0, y2: 0}}); 
    gsap.set(l4, {attr: {x2: 0, y2: 0}}); 
    gsap.set(l5, {attr: {x2: 0, y2: 0}});
    gsap.set(l8, {attr: {x2: 1860, y2: 0}});
    gsap.set(l9, {attr: {x2: 1740, y2: 0}});
    gsap.set(l11, {attr: {x1:0, x2:0}});
    gsap.set(l12, {attr: {y1:0, y2:0}});
    gsap.set(circle, {autoAlpha:0});
    
    
    // 처음 왔을때 로딩
    let t4 = gsap.timeline();
    t4.set(".carousel-item", {height:0})
    t4.set(".carousel", {opacity:1})
    t4.set(".split", {opacity:0, zIndex:11});
    t4.set(box1, {opacity:1, });
    t4.set(box2, {opacity:1});
    t4.set(".home", {zIndex:1});
    t4.set(".boxText1", {autoAlpha:0, y:"40%"});
    t4.set(".boxText2", {autoAlpha:0, y:"-40%"});
    

    // t4.to(".split",0.1, {opacity:0,delay:1,});
    t4.to(".boxText1",1, {autoAlpha:1,y:0, delay:0},"1");
    t4.to(".boxText2",1, {autoAlpha:1,y:0, delay:0},"1");
    // t4.to(".split",0.1, {opacity:1, zIndex:11,delay:0.9},"1");
    // t4.to(".split",0.1, {opacity:0, zIndex:1, delay:0.1},"2");
    t4.to(box1,3, {y:"-200%", ease:"power4.inOut", delay:0.5},"2")
    t4.to(box2,3, {y:"200%", ease:"power4.inOut", delay:0.5},"2")
    // t4.to(".split", {opacity:0 },"2");
    
    t4.to(".carousel-item",1, {height:"clamp(200px, 40vw, 400px)", delay:1},"2");
    t4.to("#page", {opacity:1 },"2");
    t4.to(".home", {opacity:1,},"2");
    t4.to(".home", {zIndex:11, delay:1.5},"2");



    // home 이동
    function homeClick() {
    document.querySelector(".home").addEventListener("click", (e) => {
        e.preventDefault();
        
        gsap.to("#page", {opacity:0,delay:0.5});
        gsap.to(".home", {opacity:0,delay:0.5});
        pageForm();
        setTimeout(() => {
            window.location.href = "home.html";
        }, 3500);
    });
}
homeClick();

// home 이동 애니메이션
function pageForm(){
    setTimeout(()=>{
        // 선 그리기
        gsap.to(".carousel", {opacity:0})
        gsap.to(l10,  0.15, {attr: {x1: 0, x2: 1500, y1: 1500}});
        gsap.to(l7,  0.15, {attr: {x1: 0, x2: 1920, y1: 1920}, delay:0.08}); 
        gsap.to(l6,  0.15, {attr: {x1: 0, x2:1500, y1:1500},delay:0.16}) 
        
        gsap.to(l1,  0.15, {attr: {x2:1500, y2:1500}, delay:0.26});
        gsap.to(l2, 0.15, {attr: {x2:1740, y2:1740}, delay:0.35});
        gsap.to(l3, 0.15, {attr: {x2:1860, y2:1860}, delay:0.19});
        gsap.to(l4, 0.15, {attr: {x2:1920, y2:1920}, delay:0.65});
        gsap.to(l5, 0.15, {attr: {x2:1500, y2:1500}, delay:0.52});
        gsap.to(l8, 0.15, {attr: {x1:0, x2:1860, y1:1860}, delay:0.5});
        gsap.to(l9, 0.15, {attr: {x1:0, x2:1740, y1:1740}, delay:0.6});
        gsap.to(l11, 0.15, {attr: {x1:0, x2:1920}, delay:0.4});
        gsap.to(l12, 0.15, {attr: {y1:0, y2:1920}, delay:0.51});
        gsap.to(circle, 0.15, {autoAlpha:1, delay:0.65});
        gsap.to(box3, 1, {x: "0%",ease:"expo.out", delay:1.5});
        gsap.to(box4, 1, {x: "0%",ease:"expo.out", delay:1.5});
        
        gsap.to(l1, 1, {delay:1.5, opacity:0.1});
        gsap.to(l2, 1, {delay:1.5, opacity:0.1});
        gsap.to(l3, 1, {delay:1.5, opacity:0.1});
        gsap.to(l4, 1, {delay:1.5, opacity:0.1});
        gsap.to(l5, 1, {delay:1.5, opacity:0.1});
        gsap.to(l6, 1, {delay:1.5, opacity:0.1});
        gsap.to(l7, 1, {delay:1.5, opacity:0.1});
        gsap.to(l8, 1, {delay:1.5, opacity:0.1});
        gsap.to(l9, 1, {delay:1.5, opacity:0.1});
        gsap.to(l10, 1, {delay:1.5, opacity:0.1});
        gsap.to(l11, 1, {delay:1.5, opacity:0.1});
        gsap.to(l12, 1, {delay:1.5, opacity:0.1});
        gsap.to(circle, 1, {delay:1.5, opacity:0.1});
    },1000)
}