if(document.readyState ==="loading")
{
    document.addEventListener("DOMContentLoaded",ready)
}else
{
    ready()
}

const addBtn =  document.getElementById('btn'); //addItem function click event
const quantityInput = document.getElementsByClassName("carts-input");   //input value change event

function ready()
{
    localItems()
    // ----- RWDcontrols -----
    const menu=document.getElementById("menu");
    menu.style.maxHeight= "0px";
    menu.addEventListener('click',menutoggle)
    // small Photo Switch
    smallProductImg()

    // input 數量不得有負數
    for(let i=0; i<quantityInput.length; i++)
    {
        let input = quantityInput[i];
        input.addEventListener("change",quantityChanged);
    }

    // 點擊加入購物車按鈕，將資料添加到 localStorage
    addBtn.addEventListener('click',addItem);

}
// RWD　Menu Control
function menutoggle()
{
    if(menu.style.maxHeight == "0px")
    {
    menu.style.maxHeight= "200px";
    }else
    {
    menu.style.maxHeight= "0px";
    }
    
}

// small Photo Switch
function smallProductImg()
{
    let productsImg = document.getElementById("products_img");
    let smallImg = document.querySelectorAll(".smallImg");
    smallImg.forEach( img => 
    {
        img.addEventListener('click', (e) =>
        {
            let img = e.currentTarget;
            console.log(img);
            productsImg.src = img.src
        })
    });
}

// Input change event 所對應的函式
function quantityChanged(e)
{
    let input = e.target;
    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
}

const Item = document.querySelector('.ItemTitle');
const ItemImg = document.getElementById('products_img');
// Add To Cart click event and setItem to localStorage
function addItem(e)
{   
    // 確認商品是否已添加至購物車
    if( checkStorage() ) return alert('您以選購此商品了');

    // 取出商品的，名稱,價格,數量,網址,尺寸，添加至 localStorage 中
    const id = new Date().getTime().toString();
    Item.setAttribute('id',id);
    let ItemImgSrc = ItemImg.src;
    let quantityValue = quantityInput[0].value;
    let price = document.querySelector('.cart-price').innerText.replace("$","");
    let sizeValue = ['','XXL', 'XL', 'L', 'M', 'S',25, 24.5, 24, 23.5, 23];
    let size = sizeValue.find( (size,index) =>
    {
        let sizeNumber = document.getElementById('SizeOption').value;
        if( index == sizeNumber ) return size
    })

    // 判斷使用者使否選擇尺寸
    if( size === undefined ) return alert('請選擇尺寸，謝謝您')

    // 加入購物車，將 inputValue 還原
    let form = document.getElementsByTagName("form");
    for(let i = 0 ; i<form.length ; i++)
    {
        form[i].reset();
    }
    addLocalStorage(id, Item.textContent, ItemImgSrc, quantityValue, price, size)

    // 顯示購物車旁的商品數量
    localItems();
    
    // 顯示成功加入購物車的訊息
    displayText()
}

// 新增資料至 LocalStorage
function addLocalStorage(id, ItemTitle, ImgSrc, quantity, price, size)
{
    // 取得 inputvalue 及屬於自己的 id ， 賦值給itemData
    const itemData = { id, title: ItemTitle, src: ImgSrc, quantity: quantity, price: price, size: size };
    // item = 假如 localStorage 有 list 這個 key的名稱 ，則將 list這個key名稱的value轉成陣列 ;  若沒有則是空陣列
    let items = getlocalStorageItem();
    // items 等於陣列 ， 陣列內新增 id and inputValue 
    items.push(itemData);
    // 將 items 轉為JSON字符串，傳到 localStorage 中， ket=list ，value=items
    localStorage.setItem('product', JSON.stringify(items));
}

// 從 LocalStorage 取得資料
function getlocalStorageItem()
{
    return localStorage.getItem('product')? JSON.parse(localStorage.getItem('product')) : [];
}

// 檢查商品是否已存在於購物車 ture or false
function checkStorage()
{
    let items = getlocalStorageItem();
    return items.some( item =>
    {
        return item.title ===  Item.textContent
    })
}

// 判斷是否該顯示購物車旁顯示商品數量
function localItems()
{
    let carticon = document.querySelector('.cart')
    let cartItemsNumber = carticon.nextElementSibling;
    let items = getlocalStorageItem();
    if( items.length > 0)
    {
        cartItemsNumber.textContent = items.length;
        cartItemsNumber.style.visibility = 'visible';
    }
    if( items.length === 0)
    {
        cartItemsNumber.textContent = '';
        cartItemsNumber.style.visibility = 'hidden';
    }
}

// 成功添加至購物車的訊息
function displayText()
{
    let ok = document.querySelector('.ok')
    ok.style.display = 'block';
    setTimeout( () =>
    {
        ok.style.display = 'none';
    },2000)
}