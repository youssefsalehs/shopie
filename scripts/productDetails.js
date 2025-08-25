import { items, featured, clothes, watches, shoes } from "./products.js";
import { addItem, notify } from "./helpers.js";
let featuredContainer = document.getElementById("featuredContainer");
let productDetailsContainer = document.getElementById(
  "productDetailsContainer"
);
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
let products = [...items, ...clothes, ...featured, ...watches, ...shoes];
let product = products.find((item) => item.id === productId);
productDetailsContainer.innerHTML = "";
featuredContainer.innerHTML = "";
if (product) {
  productDetailsContainer.innerHTML = `<div class="row mt-5">
        <div class="col-lg-5 col-md-12 col-12">
          <img
            src="${product.mainImage}"
            alt=""
            class="img-fluid w-100"
            id="main_img"
          />
        </div>
        <div class="col-lg-5 col-md-12 col-12">
          <h6 class="mb-2">Home / ${product.category}</h6>
          <h3 class="mb-3">${product.name}</h3>
          <h2 class="mb-2">$${product.price}</h2>
    <select class="my-2">
  <option>Select size</option>
  ${product.sizes
    .map((size) => `<option value="${size.toLowerCase()}">${size}</option>`)
    .join("")}
</select>

          <div class="mb-2 size d-flex gap-2">
            <input type="number" name="" id="" min="1" value="1"/>
            <button class="button" id="addbtn">Add To Cart</button>
          </div>
          <div class="pt-5">
            <h4 class="mb-5">Product Details</h4>
            <p>
             ${product.description}
            </p>
          </div>
        </div>
      </div>`;
  let addbtn = document.getElementById("addbtn");
  console.log(addbtn);
  addbtn.addEventListener("click", () => {
    const quantityInput = document.querySelector("input[type='number']");
    const quantity = parseInt(quantityInput.value) || 1;
    const sizeSelect = document.querySelector("select");
    const selectedSize =
      sizeSelect.value === "Select size" ? null : sizeSelect.value;

    if (selectedSize == null && product.sizes.length !== 0) {
      notify("Please select a size!");
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size: selectedSize || null,
      image: product.mainImage,
      total: quantity * product.price,
    });

    setTimeout(() => {
      console.log("Redirecting in 2s...");

      window.location.href = "/shopie/cart.html";
    }, 2000);
  });
}
for (let i = 0; i < featured.length; i++) {
  featuredContainer.innerHTML += `
  <div class="product text-center col-lg-3 col-md-6 col-sm-12"
           onclick="window.location.href='ProductDetails.html?id=${featured[i].id}'"
        >
          <img src="${featured[i].mainImage}" alt="" class="img-fluid" />
          <div class="star mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="info">
            <h5>${featured[i].name}</h5>
            <h4>$${featured[i].price}</h4>
            <button class="button">Buy Now</button>
          </div>
        </div>`;
}
