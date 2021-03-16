//add to cart
let productsCountEl = document.getElementById("products-count");
//console.log(productsCountEl);
let addToCartButtons = document.querySelectorAll(".addToCart");
//console.log(addToCartButtons);
for(let i=0; i<addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener("click", function(){        
        let prevProductsCount = +productsCountEl.textContent; //productsCountEl.textContent = +productsCountEl.textContent + 1;
        productsCountEl.textContent = prevProductsCount + 1;
    })
}