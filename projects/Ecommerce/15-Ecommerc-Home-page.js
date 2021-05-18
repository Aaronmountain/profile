import onViewEntry, { option } from "./lazyLoading.js";

let imgWatcher = new IntersectionObserver(onViewEntry, option);
// 取出有戴 data-src 屬性的 img
let lazyImages = document.querySelectorAll('[data-src]');
lazyImages.forEach(image => imgWatcher.observe(image))

const menu = document.getElementById("menu");
menu.style.maxHeight = "0px";
function menutoggle() {
  if (menu.style.maxHeight == "0px") {
    menu.style.maxHeight = "200px";
  } else {
    menu.style.maxHeight = "0px";
  }
}

// 顯示購物車內商品數量
const carticon = document.querySelector('.cart')
const cartItemsNumber = carticon.nextElementSibling;
window.addEventListener('load', localItems)
function localItems() {
  let items = getlocalStorageItem();
  if (items.length > 0) {
    cartItemsNumber.textContent = items.length
    cartItemsNumber.style.visibility = 'visible'
  }
}
function getlocalStorageItem() {
  return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
}
