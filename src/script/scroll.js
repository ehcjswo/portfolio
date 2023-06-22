var doc = window.document,
  context = doc.querySelector('.js-loop'),
  clones = context.querySelectorAll('.is-clone'),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  clonesHeight = 0,
  i = 0;

function getScrollPos () {
  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
}

function setScrollPos (pos) {
  context.scrollTop = pos;
}

function getClonesHeight () {
  clonesHeight = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalc () {
  scrollPos = getScrollPos();
  scrollHeight = context.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate () {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesHeight + scrollPos >= scrollHeight) {
      // Scroll to the top when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the top
      setScrollPos(scrollHeight - clonesHeight);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {
  reCalc();
  
  context.addEventListener('scroll', function () {
    window.requestAnimationFrame(scrollUpdate);
  }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
  }, false);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}

// Just for this demo: Center the middle block on page load
window.onload = function () {
  setScrollPos(Math.round(clones[0].getBoundingClientRect().top + getScrollPos() - (context.offsetHeight - clones[0].offsetHeight) / 2));
};

    function pageClick() {
  document.querySelectorAll(".back").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      // const dataName = elem.getAttribute('data-name');
      // console.log(dataName);
      // document.getElementById("cover").classList.add("cover-right");

      // 새 페이지 로딩 완료 시 처리할 함수
      const onLoadHandler = () => {
        window.removeEventListener("load", onLoadHandler); // 이벤트 핸들러 제거
        window.location.href = "../../index.html"; // 페이지 전환
      };

      // window의 load 이벤트를 감지하여 onLoadHandler 함수 실행
      window.addEventListener("load", onLoadHandler);

      // 현재 페이지 로딩 완료 시 페이지 전환을 위해 onLoadHandler를 수동으로 호출
      onLoadHandler();
    });
  });
}

pageClick();