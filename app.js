const btnBar = document.querySelector(".navigation__bar");
const menuMobile = document.querySelector(".navigation__box");
const coverMenuMObule = document.querySelector(".menu__mobile__cover");
let flagIconBar = false;

const toggelMenu = () => {
  menuMobile.classList.toggle("navigation__box__active");
  coverMenuMObule.classList.toggle("menu__mobile__cover__active");

  if (flagIconBar) {
    btnBar.src = "./images/svg/baropen.svg";
    flagIconBar = false
  } else {
    btnBar.src = "./images/svg/barclose.svg";
    flagIconBar = true
  }
};

btnBar.addEventListener("click", toggelMenu);
coverMenuMObule.addEventListener("click", toggelMenu);

