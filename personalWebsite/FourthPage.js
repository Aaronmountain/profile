import { Text } from './Text.js'
import { FourthImg  } from './SliderImg.js'
import setImgSlider from "./Sliderfunction.js";

const { ReactPokemonText ,  EcommerceText,  CalenderText , GameText } = Text;

const viewMoreBtn = document.querySelectorAll('.viewmore');
const textAreaShow = document.querySelector('.introduceText');
const closeBtn = document.querySelector('.text-close-btn');
const viewMoreText = textAreaShow.querySelectorAll('.view-More-Text')

// Introduce Text Display
viewMoreBtn.forEach( btn =>{
    btn.addEventListener('click', TextControl);
})
closeBtn.addEventListener('click',TextClose);
// Introduce Text goTopBtn Display
textAreaShow.addEventListener('scroll',bottomTextCloseBtn);


// Introduce Text function
function TextControl(e) //顯示文字訊息
{
    e.preventDefault();
    let btnClass = e.target.classList[1];
    textAreaShow.classList.add('show');
    document.documentElement.style.overflow = 'hidden';
    for (let i = 0; i < viewMoreText.length; i++) {
        if (btnClass === 'ReactPokemonList') viewMoreText[i].textContent = ReactPokemonText[i];
        if (btnClass === 'Ecommerce') viewMoreText[i].textContent = EcommerceText[i];
        if (btnClass === 'Calender') viewMoreText[i].textContent = CalenderText[i];
        if (btnClass === 'Game') viewMoreText[i].textContent = GameText[i];
    }
    setImgSlider(btnClass, FourthImg)
}

function TextClose(e) //關閉文字訊息
{
    e.preventDefault();
    textAreaShow.classList.remove('show');
    document.documentElement.style.overflowY = 'scroll';
    viewMoreText.textContent = '';
}

function bottomTextCloseBtn() //文字訊息內的滾動事件
{
    let textBottomCloseBtn = textAreaShow.querySelector('.text-close');
    textAreaShow.scrollTop > 500? textBottomCloseBtn.style.visibility = 'visible':textBottomCloseBtn.style.visibility = 'hidden';
    textBottomCloseBtn.addEventListener('click', (e) =>
    {
        textAreaShow.scrollTop = 0;
        TextClose(e);
    })
}