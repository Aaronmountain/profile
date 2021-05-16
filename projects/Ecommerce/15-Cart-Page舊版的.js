if(document.readyState ==="loading")
{
    document.addEventListener("DOMContentLoaded",ready)
}else
{
    ready()
}

// ----- RWDcontrols -----
const menu=document.getElementById("menu");
menu.style.maxHeight= "0px";

function menutoggle(){
    if(menu.style.maxHeight == "0px")
    {
    menu.style.maxHeight= "200px";
    }else
    {
    menu.style.maxHeight= "0px";
    }
}


// shopping form controls
function ready()
{
    // 顯示購物車內商品數量
    localItems()
    // 購物車中 remove 時的click event
    const Removeitemsbtn = document.getElementsByClassName("Remove-items-btn");
    for(let i=0; i<Removeitemsbtn.length; i++)
    {
        let removebtn = Removeitemsbtn[i];
        removebtn.addEventListener("click",removeCartItems);
    }

    // input type="number" 中點擊的click event
    // 函式內容為，value值不是數字或為負數時則value = 1
    const quantityInput = document.getElementsByClassName("carts-input");
    for(let i=0; i<quantityInput.length; i++)
    {
        let input = quantityInput[i];
        input.addEventListener("click",quantityChanged);
    }

    // Single Product 的 Add to Cart 按鈕的 click event
    // 函式內容為，點擊時取得名稱價錢圖片網址及value，並以此為參數，繼續執行添加商品至購物車的新函式
    const addToCart = document.querySelectorAll(".Cart-item-btn");
    for(let i=0; i<addToCart.length; i++)
    {
        let btn = addToCart[i];
        btn.addEventListener("click",addItemsClicked);
    };

    // 購物車中 Purchase按鈕的click event
    // 函式內容為，彈出視窗，並清空購物車中的內容及金額
    const Purchasebtn = document.querySelector(".purchase");
    Purchasebtn.addEventListener("click",ItemPurchase)

    // 取出 localStorage 的資料
    let items = getlocalStorageItem();
    SingleProuctDetail(items);
}

// 取得資料，放置購物車中
function SingleProuctDetail(items)
{
    let ItemDatas = [];
    ItemDatas = items.map( item => 
    {
        return {
            id: item.id, 
            value: item.value,
            src: item.src, 
            quantity : item.quantity, 
            price: item.price,
            size: item.size
        }
    })
    for(let i = 0 ; ItemDatas.length ; i++)
    {
        addSingleProduct(ItemDatas[i].value, ItemDatas[i].src, ItemDatas[i].quantity, ItemDatas[i].price,ItemDatas[i].size)
        // removeFromLocalStorage(ItemDatas[i].id)
    }
}

function addSingleProduct(value, src, quantity, price, size)
{   
    let CartRow = document.createElement("div");
    CartRow.classList.add("Cart-Row");
    let cartItemsContainer = document.getElementsByClassName("cart-container")[0];
    let CartRowContents =
    `<div>
        <img src="${src}">
        <p class="ItemTitle">${value}</p>
        <p class="ItemSize">Size: ${size}</p>
     </div>
     <input type="number" class="carts-input"  value="${quantity}">
     <div class="cart-price">${price}</div>
     <button class="Remove-items-btn">
         Remove
     </button>`;
    CartRow.innerHTML = CartRowContents;
    cartItemsContainer.append(CartRow);
    CartRow.getElementsByClassName("Remove-items-btn")[0].addEventListener("click",removeCartItems);
    CartRow.getElementsByClassName("carts-input")[0].addEventListener("click",quantityChanged);
    updateTotalprice()
}

function getlocalStorageItem()
{
    return localStorage.getItem('product')? JSON.parse(localStorage.getItem('product')) : [];
}

// removeFromLocalStorage
function removeFromLocalStorage(id)
{
    let items = getlocalStorageItem();
    // 將取回的　items 陣列進行篩選， 若按下delete按鈕時取得的 id  不一樣就回傳
    items = items.filter(function(item)
    {
        if(item.id !== id) return item
    })
    // id 一樣的則沒被回傳， 剩下 id 不一樣的轉換成JSON格式傳入 key:list value中
    localStorage.setItem('product', JSON.stringify(items));
}


// Purchasebtn click event 所對應的函式
function ItemPurchase()
{
    let itemcontainer = document.querySelector(".cart-container");
    itemcontainer.hasChildNodes()? alert("訂單已成功送出，謝謝您的購買，歡迎再度光臨"):alert("您好，您的購物車中沒有選購商品~~");
    // hasChildNodes()方法不是屬性返回布林值，若while(true){執行迴圈}，反之...
    while(itemcontainer.hasChildNodes())
    {   
        itemcontainer.removeChild(itemcontainer.firstChild);
    }
    updateTotalprice();
}


// quantityInput click event 所對應的函式
function quantityChanged(e)
{
    let input = e.target;
    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
    updateTotalprice();
}


// Removeitemsbtn click event 所對應的函式
function removeCartItems(e)
{
    let btn = e.target;
    btn.parentElement.remove();
    updateTotalprice()
}


// Add to Cart click event 所對應的函式
function addItemsClicked(e)
{
    let btn = e.target;
    let itemcontainer = btn.parentElement.parentElement;
    let title = itemcontainer.getElementsByClassName("ItemTitle")[0].innerText;
    let price = itemcontainer.getElementsByClassName("cart-price")[0].innerText;
    let imgsrc = itemcontainer.getElementsByClassName("Items-Img")[0].src;
    let inputvalue = itemcontainer.getElementsByClassName("carts-input")[0].value;
    let form = document.getElementsByTagName("form");
    // 添加商品至購物車的函式(下方)
    addItemsToCart(title,price,imgsrc,inputvalue);
    for(let i = 0 ; i<form.length ; i++)
    {
        form[i].reset();
    }
    updateTotalprice()
}


// 添加商品至購物車的函式
function addItemsToCart(title, price, imgsrc, inputvalue)
{
    let CartRow = document.createElement("div");
    CartRow.classList.add("Cart-Row");
    let cartItemsContainer = document.getElementsByClassName("cart-container")[0];
    let CartItemsName = cartItemsContainer.getElementsByClassName("ItemTitle");
    for(let i = 0 ; i<CartItemsName.length ; i++)
    {
        if(CartItemsName[i].innerText == title)
        {
            alert("您已經放入購物車了ㄛ~~~");
            return;
        }
    };
    let CartRowContents =
    `<div>
        <img src="${imgsrc}">
        <p class="ItemTitle">${title}</p>
     </div>
     <input type="number" class="carts-input"  value="${inputvalue}">
     <div class="cart-price">${price}</div>
     <button class="Remove-items-btn">
         Remove
     </button>`;
    CartRow.innerHTML = CartRowContents;
    cartItemsContainer.append(CartRow);
    CartRow.getElementsByClassName("Remove-items-btn")[0].addEventListener("click",removeCartItems);
    CartRow.getElementsByClassName("carts-input")[0].addEventListener("click",quantityChanged);
}


// 購物車中更新價錢的函式
function updateTotalprice()
{
    let cartItemsContainer = document.getElementsByClassName("cart-container")[0];
    let cartRows = cartItemsContainer.getElementsByClassName("Cart-Row");
    let total = 0 , tax = 0, unitPrice = 0;
    for(let i=0; i<cartRows.length; i++)
    {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName("cart-price")[0];
        let quantityElement = cartRow.getElementsByClassName("carts-input")[0];
        let price = parseFloat(priceElement.innerText.replace("$",""));
        let quantity = quantityElement.value;
        total += price*quantity;
        tax += 35*quantity;
    };
    unitPrice = total;
    total = Math.round(total * 100) / 100 + tax;
    document.querySelector(".total").innerText = "$"+ unitPrice;
    document.querySelector(".tax").innerText = "$"+ tax;
    document.querySelector(".finaltotal").innerText = "$"+ total;   
}

const carticon = document.querySelector('.cart')
const cartItemsNumber = carticon.nextElementSibling;
function localItems()
{
    let items = getlocalStorageItem();
    if( items.length > 0)
    {
        cartItemsNumber.textContent = items.length
        cartItemsNumber.style.visibility = 'visible'
    }
}