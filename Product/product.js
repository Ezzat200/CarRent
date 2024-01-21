


function ready(){
  //remove Items From Cart
  let removeCartIcons = document.querySelector(".icon-delet");
  for(let i = 0;i<removeCartIcons.length;i++){
    let icon = removeCartIcons[i]
    icon.addEventListener("click",removeCartItems)
  }


  //quntity change
  let quntityInputs = document.querySelector(".quntity");
  quntityInputs.addEventListener("change",function(event){
let inputCart = event.target

if(isNaN(inputCart.value) || inputCart.value <= 0){
inputCart.value=1;  
}

updateTotal()
change()

  })
}

//quntity Changed
// function quntityChanged(event){
// // let input = event.target
// console.log(event)
// // if(isNaN(input.value) || input.value <= 0){
// // input.value=1;  
// // }
// // console.log("jllk")
// updateTotal()
// }


//remove Items From Cart
function removeCartItems(event){
let iconClick = event.target
iconClick.parentElement.remove();

}
//update total
function updateTotal(){
  let cartContent =document.querySelector(".cart-content");
  let carts = cartContent.getElementsByClassName("cart");
  let total=0;
  for(let i = 0; i<carts.length ; i++){
    let cart = carts[i];
    let cartPrice = cart.getElementsByClassName("cart-price")[0];
    let quntityCart = cart.querySelector(".quntity");
    let quntity = quntityCart.value;
    let price  = parseFloat(cartPrice.innerHTML.replace("$",""))
    
    total = total + (price * quntity);
   document.querySelector(".total-price").innerHTML= "$" + total
  }

}
  
 
// add to cart
function addCartClicked(event){

  let button = event.target
  let shopProduct=button.parentElement.parentElement
  let title = shopProduct.getElementsByClassName("cardTitle")[0].innerText
  let price = shopProduct.getElementsByClassName("card-price")[0].innerHTML
 
  let image = shopProduct.getElementsByClassName("card-imag")[0].src

  addToCart(title,price,image);
  updateTotal()
}

function addToCart(title,price,image){
  var cartShopCard = document.createElement("div")
  cartShopCard.style=" display: flex;justify-content: center;align-items: center; width:100%"
  
  let cart = document.querySelector(".cart")
cart.appendChild(cartShopCard)
var cartItem = document.querySelector(".cart-content")
cartItem.prepend(cart)
var cartItemsName = cartItem.getElementsByClassName("cart-productTitle")

for(let i = 0;i<cartItemsName.length;i++){
  alert("good")
  
}

var cartBoxContent =`
<img src="${image}" class="cart-image" alt="">
              
<div class="detail-box ">
 <div class="cart-productTitle">${title}</div>
 <div class="cart-price">
 ${price}
 </div>
 <input type="number" value="1" class="quntity ">
</div>
<i class="fa-solid fa-trash icon-delet" ></i>
</div>
`
cartShopCard.innerHTML=cartBoxContent
// cartItem.prepend(cartShopCard)
cartShopCard.getElementsByClassName("icon-delet")[0].addEventListener("click",removeItem);
// cartShopCard.getElementsByClassName("quntity")[0].addEventListener("change",ready())
  cartShopCard.getElementsByClassName("quntity")[0].addEventListener("change",ready())

// ready()
updateTotal() 
change()

}
function removeItem(event){
  
    
       event.target.parentElement.remove()
     

      
     
    }



// change quntity
function change (){
    // add to cart
    let addCart = document.getElementsByClassName("fa-solid fa-cart-shopping")
    for(let i=0; i<addCart.length;i++){
      let button = addCart[i]
      button.addEventListener("click",addCartClicked)
    }
}

change()




    
   

