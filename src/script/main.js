// 메인 이미지
const mainInner = document.querySelector(".main__inner");
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
const list4 = document.querySelector(".list4");


function pageClick() {
  document.querySelectorAll(".main__list li a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const hrefName = el.getAttribute('href');
      // document.querySelector("body").classList.add("pageAnimation");
      let t2 = gsap.timeline();
      t2.to(".list1 .img", { autoAlpha: 0})
      t2.to(".list1 .title", {autoAlpha: 0})
      t2.to(".loading .split span", {
          y: 0,
          duration: 1.4,
          ease: "expo.out",
          stagger: {
              amount: 0.4,
              from : "center"
          }
      })
      setTimeout(() => {
          window.location.href = "http://127.0.0.1:62471/%EA%B9%80%EB%8F%84%ED%98%842/"+ hrefName;
      }, 4000);
  });
});
}
pageClick();
document.querySelectorAll(".split").forEach(text => {
  let splitWrap = text.innerText.split('').join("</span><span aria-hidden='true'>");
  text.innerHTML = "<span aria-hidden='true'>"+ splitWrap +"</span>";
  text.setAttribute("aria-label", text.innerText);
});
gsap.set(".loading .split span", {autoAlpha: 0, y: 200})
gsap.set("#section1 .img", {autoAlpha: 0})
gsap.set("#section1 .title", {autoAlpha: 0})
setTimeout(() => {
  let tl = gsap.timeline();
  tl.to(".loading .split span", {
      autoAlpha: 1,
      y: 0,
      duration: 1.4,
      ease: "back.out(4)",
      stagger: {
          amount: 0.4,
          from : "center"
      },
  })
  tl.to(".loading .split span", {
      y: 250,
      duration: 1.4,
      ease: "expo.out",
      stagger: {
          amount: 0.4,
          from : "center"
      },
      delay: 3
  })
  tl.to("#section1 .title", {
      autoAlpha: 1
  })
  tl.to("#section1 .img", {
      autoAlpha: 1
  })
}, 2000)

//page transition
// function pageClick() {
//   document.querySelectorAll(".main__list li a").forEach((elem) => {
//     elem.addEventListener("click", (e) => {
//       e.preventDefault();
//       const dataName = elem.getAttribute('data-name');
//       console.log(dataName);
//       // document.getElementById("cover").classList.add("cover-right");
//       setTimeout(() => {
//         window.location.href =
//         "/pages/" + dataName + ".html";
//       }, 2000);
//       anima();
//     });
//   });
// }
// pageClick();










