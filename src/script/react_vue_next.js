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
t4.set("body", {backgroundColor: "#151516"})
t4.set(box1, {opacity:1});
t4.set(box2, {opacity:1});
t4.set(".home", {zIndex:1});
t4.set(".boxText1", {autoAlpha:0, y:200});
t4.set(".boxText2", {autoAlpha:0, y:-200});
t4.set(".img", {height:"0"})
t4.set(".frame", {opacity:0, y:20})
t4.set(".code", {opacity:0})
t4.set(".view", {opacity:0})


t4.to(".menus", {opacity:1 });
t4.to(".left", {opacity:1})
t4.to(".right", {opacity:1})
t4.to(".boxText1",1, {autoAlpha:1,y:0, delay:0},"1");
t4.to(".boxText2",1, {autoAlpha:1,y:0, delay:0},"1");
t4.to(box1,3, {y:-1200, ease:"power4.inOut", delay:0.5},"2")
t4.to(box2,3, {y:1200, ease:"power4.inOut", delay:0.5},"2")


t4.to("#page", {opacity:1 },"2");
t4.to(".home", {opacity:1,},"2");
t4.to(".home", {zIndex:11, delay:1.5},"2");
t4.to(".img", 0.5, {height:"100%", delay:2},"2")
t4.to(".frame", {opacity:1, y:0, delay:2.5},"2")
t4.to(".code", {opacity:1, delay:2.7},"2")
t4.to(".view", {opacity:1, delay:2.7},"2")



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
        
        gsap.to(".menus", {opacity:0});
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



  /*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menus')
const $items = document.querySelectorAll('.menu--item')
const $images = document.querySelectorAll('.menu--item img')
let menuWidth = $menu.clientWidth
let itemWidth = $items[0].clientWidth
let wrapWidth = $items.length * itemWidth

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0


/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
return v0 * ( 1 - t ) + v1 * t
}


/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
gsap.set($items, {
  x: (i) => {
    return i * itemWidth + scroll
  },
  modifiers: {
    x: (x, target) => {
      const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x))
      return `${s}px`
    }
  }
})
} 
dispose(0)


/*--------------------
Wheel
--------------------*/
const handleMouseWheel = (e) => {
scrollY -= e.deltaY * 0.9
}


/*--------------------
Touch
--------------------*/
let touchStart = 0
let touchX = 0
let isDragging = false
const handleTouchStart = (e) => {
touchStart = e.clientX || e.touches[0].clientX
isDragging = true
$menu.classList.add('is-dragging')
}
const handleTouchMove = (e) => {
if (!isDragging) return
touchX = e.clientX || e.touches[0].clientX
scrollY += (touchX - touchStart) * 2.5
touchStart = touchX
}
const handleTouchEnd = () => {
isDragging = false
$menu.classList.remove('is-dragging')
}


/*--------------------
Listeners
--------------------*/
$menu.addEventListener('mousewheel', handleMouseWheel)

$menu.addEventListener('touchstart', handleTouchStart)
$menu.addEventListener('touchmove', handleTouchMove)
$menu.addEventListener('touchend', handleTouchEnd)

$menu.addEventListener('mousedown', handleTouchStart)
$menu.addEventListener('mousemove', handleTouchMove)
$menu.addEventListener('mouseleave', handleTouchEnd)
$menu.addEventListener('mouseup', handleTouchEnd)

$menu.addEventListener('selectstart', () => { return false })


/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
menuWidth = $menu.clientWidth
itemWidth = $items[0].clientWidth
wrapWidth = $items.length * itemWidth
})


/*--------------------
Render
--------------------*/
const render = () => {
requestAnimationFrame(render)
y = lerp(y, scrollY, .1)
dispose(y)

scrollSpeed = y - oldScrollY
oldScrollY = y

gsap.to($items, {
  skewX: -scrollSpeed * .2,
  rotate: scrollSpeed * .01,
  scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003
})
}
render()