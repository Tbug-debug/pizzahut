/*메뉴 자바스크립트 시작*/
const menuebar = document.querySelector(".menuebar");
const navebarM = document.querySelector(".Menue");
const navebarE = document.querySelector(".Event");
const navebarA = document.querySelector(".About");
const navebarB = document.querySelector(".cupon");
const navebarC = document.querySelector(".member");

navebarA.addEventListener("mouseover", () => {
  menuebar.classList.add("visuble");
});

navebarB.addEventListener("mouseover", () => {
  menuebar.classList.remove("visuble");
});

navebarE.addEventListener("mouseover", () => {
  menuebar.classList.add("visuble");
});

navebarC.addEventListener("mouseover", () => {
  menuebar.classList.remove("visuble");
});

navebarM.addEventListener("mouseover", () => {
  menuebar.classList.add("visuble");
});

menuebar.addEventListener("mouseleave", () => {
  setTimeout(() => {
    menuebar.classList.remove("visuble");
  }, 1000);
});
/*메뉴 자바스크립트 끝*/

/*하단 '포장', '배달' 자바스크립트 시작*/
const btn = document.querySelector(".package");
const btun = document.querySelector(".poc");
const back = document.querySelector(".dilpoc");
const menueone = document.querySelector(".menu-detail");

function changeColor() {
  btun.classList.add("backwhite");
  btun.classList.add("grey");
  btn.classList.add("white");
  back.classList.add("red");
}

function changeColorTwo() {
  btun.classList.remove("backwhite");
  btun.classList.remove("grey");
  btn.classList.remove("white");
  back.classList.remove("red");
}

btn.addEventListener("click", changeColor);
btun.addEventListener("click", changeColorTwo);
/*하단 '포장', '배달' 자바스크립트 끝*/

/*상단 슬라이드 메뉴 시작*/
const bars = document.querySelector(".fa-bars");
const body = document.querySelector("body");
const close = document.querySelector(".fa-times");
const texthide = document.querySelector(".bigtext-titletwo");

function showMenu() {
  menueone.classList.add("menu-detailmax");
  body.classList.add("overflow");
  menuebar.classList.add("hiden");
}

function closeMenu() {
  menueone.classList.remove("menu-detailmax");
  body.classList.remove("overflow");
  setTimeout(() => {
    menuebar.classList.remove("hiden");
  }, 1700);
}

bars.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);
/*상단 슬라이드 메뉴 끝*/
