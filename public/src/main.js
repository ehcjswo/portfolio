

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
      // document.getElementById("cover").classList.add("cover-right");
      setTimeout(() => {
        window.location.href =
          "/pages/" + dataName + ".html";
      }, 0);
    });
  });
}
pageClick();








