// 스크롤 부드럽게
const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e)
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf);


// split 쪼개기
document.querySelectorAll(".developer_desc1-1").forEach((text) => {
    let splitWrap = text.innerText
    .split("")
    .join("</span><span aria-hidden='true'>");
        text.innerHTML = "<span aria-hidden='true'>" + splitWrap + "</span>";
        text.setAttribute("aria-label", text.innerText);
});

document.querySelectorAll(".developer_desc2").forEach((text) => {
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
t4.set(box1, {opacity:1});
t4.set(box2, {opacity:1});
t4.set(".home", {zIndex:1});
t4.set(".boxText1", {autoAlpha:0, y:200});
t4.set(".boxText2", {autoAlpha:0, y:-200});


t4.to(".left", {opacity:1})
t4.to(".right", {opacity:1})
t4.to(".boxText1",1, {autoAlpha:1,y:0, delay:0},"1");
t4.to(".boxText2",1, {autoAlpha:1,y:0, delay:0},"1");
t4.to(box1,3, {y:-1200, ease:"power4.inOut", delay:0.5},"2")
t4.to(box2,3, {y:1200, ease:"power4.inOut", delay:0.5},"2")

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
    }, 3700);
});
}
homeClick();

// home 이동 애니메이션
function pageForm(){
    setTimeout(()=>{
        // 선 그리기
        gsap.to(".scroll_bottom", {autoAlpha:0})
        gsap.to(".left", {opacity:0});
        gsap.to(".right", {opacity:0});
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
        gsap.to(box3, 1, {x: "0",ease:"expo.out", delay:1.5});
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

const develop_box2 = document.querySelectorAll(".developer_desc2");
const box2_1 = document.querySelectorAll(".developer_desc2 span");
const develop_box3 = document.querySelectorAll(".developer_desc3");
const box5 = document.querySelectorAll("#con_section5 .developer_desc");

        

const animation1 = gsap.timeline({ paused: true });
animation1.set(".developer_desc1-1 span", {opacity: 0, scale:0});
animation1.set(".developer_desc1-2", {opacity: 0, scale:0, y:50});
animation1.set(".developer_desc1-3", {opacity: 0, scale:0, y:-50});
animation1.set(".contact_img", {opacity: 1, height: 0});
animation1.set(".scroll_bottom", {opacity: 1, delay:3});
gsap.to(".scroll_bottom", {duration:1, opacity:1, yoyo:1, repeat:-1, ease: "power2.out", delay:3})
ScrollTrigger.create({
    animation: animation1,
    trigger: "#con_section1",
    start: "top top",
    end: "+=5000 50%",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    markers: false,
});
animation1.to(".scroll_bottom", {autoAlpha:0, });
animation1.to(".contact_img", {opacity: 1, height: "90%"});
animation1.to(".developer_desc1-1 span", {
    delay:0.2,
    scale:1,
    opacity:1,
    y:0,
    duration: 2,
    // ease: "expo.out",
});
animation1.to(".developer_desc1-2", {
    scale:1,
    opacity:1,
    y:0,
    duration: 1,
    ease: "expo.out",
});
animation1.to(".developer_desc1-3", {
    scale:1,
    opacity:1,
    duration: 3,
    y:0,
    ease: "expo.out",
});



const animation4 = gsap.timeline({ paused: true });
animation4.set(".developer_desc4-1", {x:"-100%"});
animation4.set(".developer_desc4-2", {x:"100%"});
animation4.set(".developer_desc4-3", {x:"-100%"});
animation4.set(".developer_desc4-4", {x:"100%"});
animation4.set(".developer_desc4-5", {x:"-100%"});
ScrollTrigger.create({
    animation: animation4,
    trigger: "#con_section4",
    start: "top top",
    end: "+=6000" ,
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    markers: false,
});
animation4.to(".developer_desc4-1", {
    delay:1,
    x:0,
    // y: 250,
    duration: 1,
    ease: "expo.out",
});
animation4.to(".developer_desc4-2", {
    x:0,
    // y: 250,
    duration: 1,
    ease: "expo.out",
});
animation4.to(".developer_desc4-3", {
    x:0,
    // y: 250,
    duration: 1,
    ease: "expo.out",
});
animation4.to(".developer_desc4-4", {
    x:0,
    // y: 250,
    duration: 1,
    ease: "expo.out",
});
animation4.to(".developer_desc4-5", {
    x:0,
    // y: 250,
    duration: 1,
    ease: "expo.out",
});

animation4.to(".developer_desc4-1", {
    x:"100%",
    // y: 250,
    duration: 2,
    ease: "expo.in",
},"w");
animation4.to(".developer_desc4-2", {
    x:"-100%",
    // y: 250,
    duration: 2,
    ease: "expo.in",
},"w");
animation4.to(".developer_desc4-3", {
    x:"100%",
    // y: 250,
    duration: 2,
    ease: "expo.in",
},"w");
animation4.to(".developer_desc4-4", {
    x:"-100%",
    // y: 250,
    duration: 2,
    ease: "expo.in",
},"w");
animation4.to(".developer_desc4-5", {
    x:"100%",
    // y: 250,
    duration: 2,
    ease: "expo.in",
},"w");
animation4.to(".developer_desc4-5", {
    x:"100%",
    // y: 250,
    duration: 4,
    ease: "expo.in",
});

const animation2 = gsap.timeline({ paused: true });
animation2.set(develop_box2, {opacity: 0.2, scale:0});
ScrollTrigger.create({
    animation: animation2,
    trigger: "#con_section2",
    start: "top top",
    end: "+=5000",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    markers: false,
});
animation2.to(develop_box2, {
    delay:0.5,
    scale:1,
    opacity:1,
    y:0,
    // y: 250,
    duration: 2,
    ease: "expo.out",
    stagger: {
        amount: 1,
        from: "start",
    },
});
animation2.to(develop_box2, {
    delay:1,
    scale:0,
    opacity:0,
    // y: 250,
    duration: 2,
    ease: "expo.out",
    stagger: {
        amount: 0.5,
        from: "start",
    },
});

const animation3 = gsap.timeline({ repeat: -1, yoyo: false });
// ScrollTrigger.create({
//     animation: animation3,
//     trigger: "#con_section3",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: false,
// });
animation3.set(develop_box3, {
    y:"-110rem",
    // y: 250,

});
// animation3.to(develop_box3, {
//     delay:0.2,
//     y:"-110rem",
//     // y: 250,
//     ease:Power0.in,
//     duration: 1,
    
// });
animation3.to(develop_box3, {
    delay:0.2,
    y:"-89rem",
    // y: 250,
    ease:Power0.in,
    duration: 3,

});
animation3.to(develop_box3, {
    delay:0.2,
    y:"-68rem",
    // y: 250,
    ease:Power0.in,
    duration: 3,

});
animation3.to(develop_box3, {
    delay:0.2,
    y:"-47rem",
    // y: 250,
    ease:Power0.in,
    duration: 3,

});
animation3.to(develop_box3, {
    delay:0.2,
    y:"-26rem",
    // y: 250,
    ease:Power0.in,
    duration: 3,

});
animation3.to(develop_box3, {
    delay:0.2,
    y:"-5rem",
    // y: 250,
    ease:Power0.in,
    duration: 3,

});

const animation5 = gsap.timeline({ paused: true });
animation5.set(".developer_desc5-1", {opacity: 0, y:-20});
animation5.set(".developer_desc5-2", {opacity: 0, y:-20});
animation5.set(".developer_desc5-3", {opacity: 0, y:-20});
animation5.set(".developer_desc5-4", {opacity: 0, y:-20});
ScrollTrigger.create({
    animation: animation5,
    trigger: "#con_section5",
    start: "top 70%",
    anticipatePin: 1,
    markers: false,
});
animation5.to(".developer_desc5-2", {
    opacity:1,
    y:0,
    // y: 250,
    duration: 1,
    ease: "expo.out",
});
animation5.to(".developer_desc5-3", {
    delay:0.1,
    opacity:1,
    y: 0,
    duration: 1,
    ease: "expo.out",
});
animation5.to(".developer_desc5-4", {
    delay:0.1,
    opacity:1,
    y: 0,
    duration: 1,
    ease: "expo.out",
});
animation5.to(".developer_desc5-1", {
    delay:0.1,
    opacity:1,
    y: 100,
    duration: 1,
    ease: "expo.out",
});