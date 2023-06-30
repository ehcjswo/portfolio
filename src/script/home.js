// 페이지 이동
function pageClick() {
    document.querySelectorAll(".page-click").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const hrefName = el.getAttribute("href");
            // document.querySelector("body").classList.add("pageAnimation");
            pageOut();
            setTimeout(() => {
            window.location.href = hrefName;
            }, 4000);
        });
    });
}
pageClick();

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
gsap.set(".loading .split", { opacity: 0, y: 0 });
gsap.set(load, {opacity: 1})
gsap.set(l1, { opacity:0.1});
gsap.set(l2, { opacity:0.1});
gsap.set(l3, { opacity:0.1});
gsap.set(l4, { opacity:0.1});
gsap.set(l5, { opacity:0.1});
gsap.set(l6, { opacity:0.1});
gsap.set(l7, { opacity:0.1});
gsap.set(l8, { opacity:0.1});
gsap.set(l9, { opacity:0.1});
gsap.set(l10, { opacity:0.1});
gsap.set(l11, { opacity:0.1});
gsap.set(l12, { opacity:0.1});
gsap.set(circle, { opacity:0.1});


// 처음 화면왔을시 애니메이션
let t1 = gsap.timeline();
t1.to(".loading .split", { opacity: 1, y:0});
t1.to(box3, 1.5, {x:-1000,ease:"expo.out", delay:0.2},"e");
t1.to(box4, 1.5, {x: 1000,ease:"expo.out", delay:0.2},"e");
gsap.to(box1,1, {delay:1,y:-700, ease:"expo.in"},"1")
gsap.to(box2,1, {delay:1,y:700, ease:"expo.in"},"1")
t1.to(box1, {opacity:0},"2")
t1.to(box2, {opacity:0},"2")
t1.to(box3, {opacity:0},"2")
t1.to(box4, {opacity:0},"2")
t1.to(".loading .split span", {
    // delay:0.5,
    y: 250,
    duration: 1.4,
    ease: "expo.out",
    stagger: {
        amount: 0.4,
        from: "center",
    },
});
t1.to("#section1 .title", {
    opacity:1,
});
t1.to("#section1 .img", {
    opacity:1,
});


// gsap.set(box1, {opacity: 0});
// gsap.set(box2, {opacity: 0});
// gsap.set(load, {opacity: 1});
// gsap.set(l6, {attr: {x2: 1500, y2: 0}}); 
// gsap.set(l7, {attr: {x2: 1920, y2: 0}}); 
// gsap.set(l10, {attr: {x2: 1500, y2: 0 }});

// gsap.set(l1, {attr: {x2: 0, y2: 0}}); 
// gsap.set(l2, {attr: {x2: 0, y2: 0}}); 
// gsap.set(l3, {attr: {x2: 0, y2: 0}}); 
// gsap.set(l4, {attr: {x2: 0, y2: 0}}); 
// gsap.set(l5, {attr: {x2: 0, y2: 0}});
// gsap.set(l8, {attr: {x2: 1860, y2: 0}});
// gsap.set(l9, {attr: {x2: 1740, y2: 0}});
// gsap.set(l11, {attr: {x1:0, x2:0}});
// gsap.set(l12, {attr: {y1:0, y2:0}});
// gsap.set(circle, {autoAlpha:0});
// 선 그리기
// gsap.to(l10, 0.4, {attr: {x1: 0, x2: 1500, y1: 1500}});
// gsap.to(l7, 0.3, {attr: {x1: 0, x2: 1920, y1: 1920}, delay:0.08}); 
// gsap.to(l6, 0.2, {attr: {x1: 0, x2:1500, y1:1500},delay:0.16}) 
// gsap.to(l1, 0.2, {attr: {x2:1500, y2:1500}, delay:0.8});
// gsap.to(l2, {attr: {x2:1740, y2:1740}, delay:1.05});
// gsap.to(l3, {attr: {x2:1860, y2:1860}, delay:1.1});
// gsap.to(l4, 0.3, {attr: {x2:1920, y2:1920}, delay:0.85});
// gsap.to(l5, 0.4, {attr: {x2:1500, y2:1500}, delay:0.92});
// gsap.to(l8, {attr: {x1:0, x2:1860, y1:1860}, delay:1.0});
// gsap.to(l9, {attr: {x1:0, x2:1740, y1:1740}, delay:1.2});
// gsap.to(l11, {attr: {x1:0, x2:1920}, delay:1.15});
// gsap.to(l12, {attr: {y1:0, y2:1920}, delay:1.1});
// gsap.to(circle, {autoAlpha:0.1, delay:1.25});
// 페이지 이동시
function pageOut(){
    let t2 = gsap.timeline();
    t2.set(box3, {opacity:1, x:-1000});
    t2.set(box4, {opacity:1, x:1000});
    t2.to("#section1 .img", { autoAlpha: 0 });
    t2.to("#section1 .title", { autoAlpha: 0 });
    t2.to(".loading .split span", {
    y: 0,
    duration: 1.4,
    ease: "expo.out",
    stagger: {
        amount: 0.4,
        from: "center",
    },
    });

    t2.to(box3,1, {x:0, ease:"expo.out"}, "r");
    t2.to(box4,1, {x:0, ease:"expo.out"}, "r");
    gsap.to(l1, 1, {opacity:0});
    gsap.to(l2, 1, {opacity:0});
    gsap.to(l3, 1, {opacity:0});
    gsap.to(l4, 1, {opacity:0});
    gsap.to(l5, 1, {opacity:0});
    gsap.to(l6, 1, {opacity:0});
    gsap.to(l7, 1, {opacity:0});
    gsap.to(l8, 1, {opacity:0});
    gsap.to(l9, 1, {opacity:0});
    gsap.to(l10, 1, {opacity:0});
    gsap.to(l11, 1, {opacity:0});
    gsap.to(l12, 1, {opacity:0});
    gsap.to(circle, 1, {opacity:0});
}

// 이미지 변경
// document.querySelectorAll(".page-click").forEach((e, i) => {
//     e.addEventListener("mouseover", () => {
//     document.querySelector("#section1 .img").style.backgroundImage = `url("/images/bgImg_0${i + 1}.jpg")`;
//     });
// });

// 배경이미지 전환
var button1 = new hoverEffect({
    parent: document.querySelector(".img"),
    intensity: 0.5,
    image1: `images/bgImg_03.jpg`,
    image2: `images/bgImg_02.jpg`,
    displacementImage: "images/10.jpg",
    hover: true
});
  
  
  
  