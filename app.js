//add to cart
let productsCountEl = document.getElementById("products-count");
//console.log(productsCountEl);
let addToCartButtons = document.querySelectorAll(".addToCart");
//console.log(addToCartButtons);
for(let i=0; i<addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener("click", function(){  
        productsCountEl.textContent = +productsCountEl.textContent + +productsQuantity[i].value; 
        productsQuantity[i].value = 1;    
    })
}

// change like button state

let likeBtns = document.querySelectorAll(".like");
//console.log(likeBtns)

// for(let i=0; i<likeBtns.length; i++){
//     likeBtns[i].addEventListener("click",function(){
//         if(likeBtns[i].classList.contains("liked")){
//             likeBtns[i].classList.remove("liked")
//         } else{
//             likeBtns[i].classList.add("liked")
//         }
//     })
// }

for(let i=0; i<likeBtns.length; i++){
    likeBtns[i].addEventListener("click",function(){
        likeBtns[i].classList.toggle("liked")
    })
}

//modal

//Variant-1
// let moreDetailesBtns = document.querySelectorAll(".moreDetailes");
// let modal = document.querySelector(".modal");
// let closeBtn = document.querySelector(".close-btn")

// moreDetailesBtns.forEach(btn =>(
//     btn.addEventListener("click", function(){
//         modal.classList.add("show");
//         modal.classList.remove("hide");
//     })
// ))

// closeBtn.addEventListener("click", function(){
//     modal.classList.add("hide");
//     modal.classList.remove("show");
// })

//Variant-2
let moreDetailesBtns = document.querySelectorAll(".moreDetailes");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn")

moreDetailesBtns.forEach(btn =>(
    btn.addEventListener("click", openModal)
))
closeBtn.addEventListener("click", closeModal)
function openModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
}
//
modal.addEventListener("click", function(e){
    // console.log(e.target)
    if(e.target===modal){
        closeModal()
    }
})


function showModalByScroll(){
   if(window.pageYOffset > document.body.scrollHeight/2){
       openModal()
       window.removeEventListener("scroll",showModalByScroll)
   } 
}
window.addEventListener("scroll",showModalByScroll)

//change product quantity

// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let productsQuantity = document.querySelectorAll(".product-quantity input");

// for (let i=0; i<productsQuantity.length; i++){
//     let currentCount = +productsQuantity[i].value;
//     toggleButtonsState(currentCount,decrementBtns[i],incrementBtns[i])
// }
// let currentCount = +productsQuantity.value;

// function toggleButtonsState(count,decrementBtn,incrementBtn){
//     decrementBtn.disabled = count<=1;
//     incrementBtn.disabled = count>=10;
// }

// for (let i=0; i<incrementBtns.length; i++){
//     incrementBtns[i].addEventListener("click", function(){
//         let currentCount = +productsQuantity[i].value;
//         let nextCount = currentCount + 1;
//         productsQuantity[i].value = nextCount;
//         toggleButtonsState(nextCount,decrementBtns[i],incrementBtns[i])
//     })
// }

// for (let i=0; i<decrementBtns.length; i++){
//     decrementBtns[i].addEventListener("click", function(){
//         let currentCount = +productsQuantity[i].value;
//         let nextCount = currentCount - 1;
//         productsQuantity[i].value = nextCount;
//         toggleButtonsState(nextCount,decrementBtns[i],incrementBtns[i])
//     })
// }

//add slider slick

$(".slider-block").slick({
    autoplay:true,
    autoplaySpeed:1000,
    dots:true,
});

//OOP
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let productsQuantity = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn,decrementBtn,inputField){
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    }

    this.toggleButtonState = function(){
        const count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count<=1;
        this.domRefs.incrementBtn.disabled = count>=10;
    }
    this.toggleButtonState()

    this.increment = function(){
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleButtonState()
    }
    this.decrement = function(){
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleButtonState()
    }
    this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this))
    this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this))
}

//const counter1 = new Counter(incrementBtns[0],decrementBtns[0],productsQuantity[0])

const counters = [];
productsQuantity.forEach((item,i)=>(
    counters[i] = new Counter(incrementBtns[i],decrementBtns[i],item)
))