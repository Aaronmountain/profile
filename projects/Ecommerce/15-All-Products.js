if(document.readyState ==="loading")
{
    document.addEventListener("DOMContentLoaded",ready)
}else
{
    ready()
}

/* ----- category data -----*/
const products = 
[
    {
        id: 1,
        title: "suit",
        category: "suit",
        price: 50.00,
        img: "./images_sideproject15/manfasion1.jpg",
        path:"15-Products-page-suit.html",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>`,
    },
    {
        id: 3,
        title: "clothes",
        category: "clothes",
        price: 50.00,
        img: "./images_sideproject15/girlclothes13.jpg",
        path:"15-Product-page-clothes.html",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>`,
    },
    {
        id: 2,
        title: "shoes",
        category: "shoes",
        price: 75.00,
        img: "./images_sideproject15/girlshoes1.jpg",
        path: "15-Product-page-shoes.html",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>`,
    },
    {
        id: 4,
        title: "sport",
        category: "sport",
        price: 50.00,
        img: "./images_sideproject15/4.jpg",
        path:"#",
        rating: ` <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>`,
    },
    {
        id: 5,
        title: "clothes",
        category: "clothes",
        price: 50.00,
        img: "./images_sideproject15/9.jpg",
        path:"#",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i> `,
    },
    {
        id: 6,
        title: "clothes",
        category: "clothes",
        price: 50.00,
        img: "./images_sideproject15/girlclothes8.jpg",
        path:"#",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i> `,
    },
    {
        id: 7,
        title: "Shoes",
        category: "Shoes",
        price: 50.00,
        img: "./images_sideproject15/3.jpg",
        path:"#",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i> `,
    },
    {
        id: 8,
        title: "clothes",
        category: "clothes",
        price: 75.00,
        img: "./images_sideproject15/2.jpg",
        path: "#",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>`,
    },
    {
        id: 9,
        title: "clothes",
        category: "clothes",
        price: 50.00,
        img: "./images_sideproject15/10.jpg",
        path:"#",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>`,
    },
    {
        id: 10,
        title: "clothes",
        category: "clothes",
        price: 50.00,
        img: "./images_sideproject15/1.jpg",
        path:"#",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>`,
    },
    {
        id: 11,
        title: "Watch",
        category: "Watch",
        price: 50.00,
        img: "./images_sideproject15/watch1.jpg",
        path:"#",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>`,
    },
    {
        id: 12,
        title: "Watch",
        category: "Watch",
        price: 50.00,
        img: "./images_sideproject15/watch2.jpg",
        path:"#",
        rating: `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>`,
    },
];
const menu=document.getElementById("menu");
menu.style.maxHeight= "0px";

function ready()
{
    /* ------ RWD --------- */
    menu.addEventListener('click',menutoggle)

    ItemsContent(products);
    categorybtncreat();
    // 顯示購物車內商品數量
    localItems();
}
// RWD Menu Control
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

const itemsRow = document.querySelector(".ItemRow");
const btncontainer = document.querySelector(".category");

// 將產品內容放入HTML標籤中的函式，函式參數為上方呼叫時所帶入的參數
function ItemsContent(productItems)
{
    let itemscategory = productItems.map(function(item)
    {
        return `<div class="col-4">
            <a href=${item.path}><img src=${item.img} alt=${item.title}></a>
            <h4>${item.title}</h4>
            <div class="rating">
                ${item.rating}
            </div>
            <p>$${item.price}</p>
        </div>`;

    })
    itemscategory = itemscategory.join("");
    itemsRow.innerHTML = itemscategory;
}

// 檢測陣列中的Categories後自動新增按鈕，並將所有按鈕綁點擊事件即SwitchItemCategory
function categorybtncreat()
{
    // categories = value = [所有並且沒有重複的category]
    const categories = products.reduce(function(value,Item)
    {
        // 一開始value = 後方設定的初始值，value = ["all"]
        // if判斷，若是value陣列內沒有Item.category的值，則value就push一個Item.catergory的值
        if(!value.includes(Item.category))
        {
            value.push(Item.category);
        }
        return value;
    },["all"])
    // 這裡利用categories.map ，所以函式內的參數為category的值
    const categoriesBtn = categories.map(function(category)
    {
        return `<button class="categorybtn" data-category="${category}">${category}</button>`
    }).join("");
    btncontainer.innerHTML = categoriesBtn;

    // 選取按鈕並SwitchItemCategory
    const categorybtn = btncontainer.querySelectorAll(".categorybtn");
    categorybtn.forEach(function(btn)
    {
        btn.addEventListener("click",(e)=>
        {
            let btn =e.currentTarget;
            // 取得各自按鈕的data值
            let ItemCategory = btn.dataset.category;
            // 搜索舊陣列中為ture的內容回傳給新變數(新陣列)，filter回呼函式參數為陣列中每一個項目
            const productsCategory = products.filter(function(item)
            {
                if(item.category == ItemCategory)
                { 
                    return item;
                }
            })
            // 判斷data值為何並帶入下方
            if(ItemCategory == "all") 
            {
                ItemsContent(products);
            }else
            {
                ItemsContent(productsCategory);
            }
       })
    })
}

// 取得 localStorage 資料
function getlocalStorageItem()
{
    return localStorage.getItem('product')? JSON.parse(localStorage.getItem('product')) : [];
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
