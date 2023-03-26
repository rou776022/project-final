/* ----------------------------------- */
/* ------ Custom ------ */
/* ----------------------------------- */
let isOpened = false;
const $navbar = document.querySelector('.l-navbar');
const $navbarBody = document.querySelector('.l-navbar__body');
const $burger = document.querySelector('.o-burger');
function toggleBurger() {
  if (!isOpened) {
    $navbar.classList.add('is-opened');
    $burger.classList.add('is-opened');
    isOpened = true;
    setTimeout(function() {
      $navbarBody.style.overflow = 'auto';
    }, 1000)
  } else {
    $navbar.classList.remove('is-opened');
    $burger.classList.remove('is-opened');
    $navbarBody.style.overflow = '';
    isOpened = false;
  }
}


const mySwiper = new Swiper('.l-header__swiper', {
  loop: true,
  // 緩慢施放
  longSwipesRatio: 0.1,
  speed: 1600,
	autoplay: {
    delay: 3000,
    // 手動拖曳後不取消自動撥放
    disableOnInteraction: false,
  },
})