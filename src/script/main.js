// 페이지 이동
function pageClick() {
  document.querySelectorAll(".page-click").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const hrefName = el.getAttribute("href");
      // document.querySelector("body").classList.add("pageAnimation");
      let t2 = gsap.timeline();
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

// 로딩
gsap.set(".loading .split span", { autoAlpha: 0, y: 200 });
gsap.set("#section1 .img", { autoAlpha: 0 });
gsap.set("#section1 .title", { autoAlpha: 0 });
setTimeout(() => {
  let tl = gsap.timeline();
  tl.to(".loading .split span", {
    autoAlpha: 1,
    y: 0,
    duration: 1.4,
    ease: "back.out(4)",
    stagger: {
      amount: 0.4,
      from: "center",
    },
  });
  tl.to(".loading .split span", {
    y: 250,
    duration: 1.4,
    ease: "expo.out",
    stagger: {
      amount: 0.4,
      from: "center",
    },
    delay: 3,
  });
  tl.to("#section1 .title", {
    autoAlpha: 1,
  });
  tl.to("#section1 .img", {
    autoAlpha: 1,
  });
}, 2000);

document.querySelectorAll(".page-click").forEach((e, i) => {
  e.addEventListener("mouseover", (over) => {
    document.querySelector(
      "#section1 .img"
    ).style.backgroundImage = `url("/images/bgImg_0${i + 1}.jpg")`;
  });
});
