import { secondImg } from "./SliderImg.js";
import setImgSlider from "./Sliderfunction.js";

window.addEventListener("DOMContentLoaded", () => {
  setImgSlider('noteImg', secondImg)
})

const text = document.querySelector('.main-title .text')
window.addEventListener('scroll', showText)
function showText() {
  window.pageYOffset >= 200 ? text.classList.add('introductionText') : text.classList.remove('introductionText')
}
