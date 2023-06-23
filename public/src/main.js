

// lines
const lines = document.querySelector("#lines");
const project = document.querySelector(".project")
const line2 = document.querySelector(".line2");
const line2_full = document.querySelector(".line2_full");
const line3 = document.querySelector(".line3");
const line3_full = document.querySelector(".line3_full");


// 초기 상태 설정
gsap.set(lines, {zIndex:5});
gsap.set(line2, {height:"28.1vw"});
gsap.set(line2_full, {height:"28.1vw", opacity:0});
gsap.set(line3, {height:"28.1vw"});
gsap.set(line3_full, {height:"28.1vw", opacity:0});
gsap.set(project, {opacity:1 ,zIndex: 3});

// 선 그리기
gsap.to(project, {delay:2.0, duration: 0.1, opacity:0 ,} )
gsap.to(line2, { delay:2.7, duration: 2,  ease: "power4.inOut", strokeDashoffset: 0});
gsap.to(line2, { delay:4.0, duration: 1, opacity:0,  ease: "power4.inOut"});
gsap.to(line2_full, { delay:3.7, duration: 1.5, opacity:1,  ease: "power4.inOut", strokeDashoffset: 0});

gsap.to(line3, { delay:2.7, duration: 2,height:"28.1vw",  ease: "power4.inOut", strokeDashoffset: 0});
gsap.to(line3, { delay:4, duration: 1, opacity:0,height:"28.1vw",  ease: "power4.inOut", strokeDashoffset: 0});
gsap.to(line3_full, { delay:3.7, duration: 1.5, opacity:1,  ease: "power4.inOut", strokeDashoffset: 0});
gsap.to(lines, {delay:6, opacity:0})
gsap.to(lines, {delay:6.5,zIndex: -1})


// 메인 이미지
const mainInner = document.querySelector(".main__inner");
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
const list4 = document.querySelector(".list4");

function loadImage(src) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }
  
  Promise.all([
    loadImage("images/bgImg_01.jpg"),
    loadImage("images/bgImg_02.jpg"),
    loadImage("images/bgImg_03.jpg"),
    loadImage("images/bgImg_04.jpg")
  ])
    .then(function(images) {
      var img1 = images[0];
      var img2 = images[1];
      var img3 = images[2];
      var img4 = images[3];

  
      list1.addEventListener("mouseover", function() {
        mainInner.style.backgroundImage = `url(${img1.src})`;
      });
  
      list2.addEventListener("mouseover", function() {
        mainInner.style.backgroundImage = `url(${img2.src})`;
      });
  
      list3.addEventListener("mouseover", function() {
        mainInner.style.backgroundImage = `url(${img3.src})`;
      });
  
      list4.addEventListener("mouseover", function() {
        mainInner.style.backgroundImage = `url(${img4.src})`;
      });
    });


//page transition
function pageClick() {
  document.querySelectorAll(".main__list li a").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const dataName = elem.getAttribute('data-name');
      console.log(dataName);
      anima();
      // document.getElementById("cover").classList.add("cover-right");
      setTimeout(() => {
        window.location.href =
          "/pages/" + dataName + ".html";
      }, 4000);
    });
  });
}
pageClick();


var polygons = document.querySelectorAll("#hexs polygon");
var restartPolygon = document.getElementById("restartPolygon");
var restartText = document.getElementById("restartText");
var redDot = document.getElementById("redDot");
var startText = document.getElementById("startText");
var center = 85;
var polygonCenter = polygons[center];
polygonCenter.classList.add("center");
var polygonsRows = [];
var j = -1;
var desetica = 1;
for (var i = 1; i < 10; i++) {
    window['polygons' + i] = [];
    polygonsRows.push(window['polygons' + i])
}
for (var i = 0; i < polygons.length; i++) {
    j++;
    if (j < 19) {
        window['polygons' + desetica].push(polygons[i]);
        if (j === 18) {
            j = -1;
            desetica++;
        }
    }
}

//GSAP Timeline
var tl = new TimelineMax({ opacity: 0,delay: 0, paused: false });

//do nothing
function anima(){
    tl.set(polygons, { scale:1 , opacity: 0,rotation: 60, x: 20, y: -10 });

    tl.to(polygons, 0.1, { opacity: 1, ease: Elastic.easeInOut.config(1, 0.3), stagger: { amount: 0.2, from: "center" } });
    tl.to(polygons[center], 0.1, { opacity: 0.7, delay: 0.1 });
    tl.to(polygons[center - 19], 0.05, { opacity: 0.7, delay: 0.1 });
    tl.to(polygons[center - 20], 0.05, { opacity: 0.7, delay: 0.01 });
    tl.to(polygons[center - 1], 0.05, { opacity: 0.7, delay: 0.01 });
    tl.to(polygons[center + 18], 0.05, { opacity: 0.7, delay: 0.01 });
    tl.to(polygons[center + 19], 0.05, { opacity: 0.7, delay: 0.01 });
    tl.to(polygons[center + 1], 0.05, { opacity: 0.7, delay: 0.01 });
    tl.to(polygons, 0.5, { rotation: 0, x: 0, y: 0, delay: 0.1 });
    tl.staggerTo(polygons, 1, { scale: 1.06, ease: Elastic.easeInOut.config(1, 0.3), stagger: { amount: 0.15, from: "center" } });
    tl.to(polygons, 0.5, { opacity: 0, ease: Elastic.easeInOut, stagger: { amount: 0.2, from: "end" } });
    tl.play();
}

document.querySelector('#ani').addEventListener('click', ()=>{
    anima();
})








