import { items } from "./products.js";
import { addItem } from "./helpers.js";
let productContainer = document.getElementById("product-container");

for (let i = 0; i < items.length; i++) {
  productContainer.innerHTML += `
  <div class="product text-center col-lg-3 col-md-6 col-sm-12" >
          <img src="${items[i].mainImage}" alt="" class="img-fluid" />
          <div class="star mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="info">
            <h5>${items[i].name}</h5>
            <h4>$${items[i].price}</h4>
            <button class="button">Buy Now</button>
          </div>
        </div>`;
}
let products = document.getElementsByClassName("product");
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", () => {
    window.location.href = `ProductDetails.html?id=${items[i].id}`;
  });
}
