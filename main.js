"use strict";

// 스크롤바를 원하는 포지션으로 내렸을 때 디자인변경 동작
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
// 넷바의 높이값을 알아내는 함수
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    //scroll이 navhight이상으로 발생
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
  navbarMenu.classList.remove("open");
});

//넷바 토글
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

//넷바메뉴를 클릭했을때 원하는 섹션으로 스크롤링
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", () => {
  const target = event.target; //타겟=클릭한요소
  const link = target.dataset.link;
  if (link == null) {
    //링크가 있는경우에만 수행되게함
    return;
  }
  scrollIntoView(link);
});

//Contact me버튼 활성화
const homeContact = document.querySelector(".home__contact");
homeContact.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// 홈부분 천천히 흐려지게하기
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// My work Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  // 숫자를 눌러도 활성화가 되게 or로 해준다.
  // dataset에 filter가 없으면 parentNode에있는 dataset filter사용
  if (filter == null) {
    return;
  }

  // My work에서 클릭된 active로 이동하는 기능
  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  }
  e.target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        //전부다 or 필터매칭
        project.classList.remove("invisible"); //필터가 매칭되면 가리는걸 없앰
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300); // 0.3초가 지나면 opacity 0 -> 1
});

// 스크롤링을 내릴때 위로올라가는 화살버튼
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    //홈화면 반이 지낫을때 arrow 보여짐
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// arrow up 버튼활성화
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//부드럽게 이동하는 스크롤링 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
