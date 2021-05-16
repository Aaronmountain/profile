function setImgSlider(projectTitle, page) {
  // slider
  const SliderContainer = document.querySelector('.container .carousel')
  const prevBtn = SliderContainer.querySelector('.btn-left')
  const nextBtn = SliderContainer.querySelector('.btn-right')
  let carouselCounter = 0;
  let imgPicContainer = SliderContainer.querySelector('.pic')
  let setImgArray = page[projectTitle].map(imgSrc => {
    return `<img src="${imgSrc}">`
  })
  setImgArray = setImgArray.join("")
  imgPicContainer.innerHTML = setImgArray

  /* -------- slider ------ */
  let img = SliderContainer.querySelectorAll('.carousel .pic img');
  img.forEach((img, index) => {
    img.style.left = `${index * 100}%`;

    img.addEventListener('mouseleave', () => {
      carousel = setInterval(Slide, 2000)
    })
  });
  SliderContainer.addEventListener('mouseenter', () => {
    clearInterval(carousel);
  }, true)

  // 幻燈片自動輪轉
  let carousel = setInterval(Slide, 2000)

  /*----- Btn點擊事件 ------ */
  // carouselCounter 計數器，點擊按鈕更動計數器的數字，並呼叫 btnControl 函式
  nextBtn.addEventListener('click', () => {
    carouselCounter++;
    btnControl();
  });
  prevBtn.addEventListener('click', () => {
    carouselCounter--;
    btnControl();
  });

  function Slide() {
    if (carouselCounter === img.length) carouselCounter = 0;
    img.forEach((img) => {
      img.style.transform = `translateX(-${carouselCounter * 100}%)`;
    });
    carouselCounter++;
  }

  function btnControl() {
    // 最後一個回到第一個
    if (carouselCounter === img.length) carouselCounter = 0;
    // 第一個往左回最後一個
    if (carouselCounter < 0) carouselCounter = img.length - 1;

    img.forEach((img) => {
      img.style.transform = `translateX(-${carouselCounter * 100}%)`;
    });
  }
}

export default setImgSlider
