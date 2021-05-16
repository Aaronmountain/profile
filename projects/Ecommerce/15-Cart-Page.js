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

function ready()
{
    // RWD
    menu.addEventListener('click',menutoggle)
 
    // 購物車中 remove 時的click event
    const Removeitemsbtn = document.getElementsByClassName("Remove-items-btn");
    for(let i=0; i<Removeitemsbtn.length; i++)
    {
        let removebtn = Removeitemsbtn[i];
        removebtn.addEventListener("click",removeCartItems);
    }

    // input type="number" change event ，不得有負數
    const quantityInput = document.getElementsByClassName("carts-input");
    for(let i=0; i<quantityInput.length; i++)
    {
        let input = quantityInput[i];
        input.addEventListener("change",quantityChanged);
    }

    // 取出 localStorage 的資料，添加至購物車資訊欄中
    const items = getlocalStorageItem()
    SingleProuctDetail(items);

    // 購物車中 Purchase Btn click event ，彈出視窗並清空購物車中的內容及金額
    const Purchasebtn = document.querySelector(".purchase");
    Purchasebtn.addEventListener("click",ItemPurchase)

    // 確認購物車是有商品
    CartStatus();
    // 顯示購物車內商品數量
    localItems()
}
// RWD
function menutoggle(){
    if(menu.style.maxHeight == "0px")
    {
    menu.style.maxHeight= "200px";
    }else
    {
    menu.style.maxHeight= "0px";
    }
}

// 判斷購物車內是否有商品，決定是否要顯示訊息 
function CartStatus()
{
    let cart = document.querySelector('.carts_page');
    let cartContainer = cart.getElementsByClassName("cart-container")[0];
    let pusrchaseText = document.querySelector('.goToShopText');
    if(cartContainer.hasChildNodes()) 
    {
        cart.style.visibility = 'visible';
        pusrchaseText.style.display = 'none';
    }
    if(!cartContainer.hasChildNodes()) 
    {
        cart.style.visibility = 'hidden';
        pusrchaseText.style.display = 'block';
    }
    // 顯示購物車旁的商品數量
    localItems()
}  

// 將 Storage 資料整理，並呼叫 添加至購物車的函式 addSingleProduct(Item)
function SingleProuctDetail(items)
{
    let ItemDatas = items.map( item => 
    {
        return {
            id: item.id, 
            title: item.title,
            src: item.src, 
            quantity : item.quantity, 
            price: item.price,
            size: item.size
        }
    })
    ItemDatas.forEach( item =>
    {
        addSingleProduct(item); 
    })
    CartStatus();
}

function addSingleProduct(Item)
{   
    let CartRow = document.createElement("div");
    CartRow.classList.add("Cart-Row");
    CartRow.setAttribute('id',Item.id);
    let cartItemsContainer = document.getElementsByClassName("cart-container")[0];
    let CartRowContents =
    `<div>
        <img src="${Item.src}">
        <p class="ItemTitle">${Item.title}</p>
        <p class="ItemSize">Size: ${Item.size}</p>
     </div>
     <input type="number" class="carts-input"  value="${Item.quantity}">
     <div class="cart-price">${Item.price}</div>
     <button class="Remove-items-btn">
         Remove
     </button>`;
    CartRow.innerHTML = CartRowContents;
    cartItemsContainer.append(CartRow);
    CartRow.getElementsByClassName("Remove-items-btn")[0].addEventListener("click",removeCartItems);
    CartRow.getElementsByClassName("carts-input")[0].addEventListener("click",quantityChanged);
    updateTotalprice()
    CartStatus();
}

// 取出 Sotrage 的資料
function getlocalStorageItem()
{
    return localStorage.getItem('product')? JSON.parse(localStorage.getItem('product')) : [];
}

// 取得 Sotrage 資料的ID
function getLocalStorageId()
{
    let items = getlocalStorageItem();
    let ItemDatas = items.map( item => 
    {
        return item.id
    })
    return ItemDatas 
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

// Purchasebtn click event
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
    getLocalStorageId().forEach( id =>
    {
        removeFromLocalStorage(id)
    })
    CartStatus();
}

// quantityInput change event
function quantityChanged(e)
{
    let input = e.target;
    let itemId = input.parentElement.id;
    let itemquantity = input.value;
    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
    // 購物車內 input value 改變 ，就更改 Storage value
    let Items = getlocalStorageItem();
    Items = Items.map( item =>
    {
        if( item.id === itemId )
        {
            item.quantity = itemquantity;
        }
        return item;
    })
    localStorage.setItem('product', JSON.stringify(Items));
    updateTotalprice();
}

// Removeitemsbtn click event 
function removeCartItems(e)
{
    let btn = e.target;
    btn.parentElement.remove();
    let ItemId = btn.parentElement.id;
    removeFromLocalStorage(ItemId);
    updateTotalprice();
    CartStatus();
}

// 更新購物車中的價錢
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

// 文字超連結小動畫
const wordAnimation =document.querySelector('.goToShopText a');
const addtext = (text) =>
{
    return [...text].map(( word, index ) =>
    {
        return `<span style="--wave-word:${ (1 * index) + 1 }" class="wave-word">${word}</span>`
    }).join('');
}
wordAnimation.innerHTML = addtext('點擊我來享受您的HappyShoppingTime');

// 判斷是否該顯示購物車旁顯示商品數量
function localItems()
{
    let carticon = document.querySelector('.cart')
    let cartItemsNumber = carticon.nextElementSibling;
    let items = getlocalStorageItem();
    if( items.length > 0)
    {
        cartItemsNumber.textContent = items.length;
        cartItemsNumber.style.visibility = 'visible'
    }
    if( items.length === 0)
    {
        cartItemsNumber.textContent = '';
        cartItemsNumber.style.visibility = 'hidden'
    }
}