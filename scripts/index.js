import { featured, clothes, watches, shoes } from "./products.js";
let featuredContainer = document.getElementById("featuredContainer");
let clothesContainer = document.getElementById("clothesContainer");
let watchesContainer = document.getElementById("watchesContainer");
let shoesContainer = document.getElementById("shoesContainer");
featuredContainer.innerHTML = "";
clothesContainer.innerHTML = "";
watchesContainer.innerHTML = "";
shoesContainer.innerHTML = "";
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
for (let i = 0; i < clothes.length; i++) {
  clothesContainer.innerHTML += `
        <div class="product text-center col-lg-4 col-md-6 col-sm-12"  onclick="window.location.href='ProductDetails.html?id=${clothes[i].id}'">
          <img src="${clothes[i].mainImage}" alt="" class="img-fluid" />
          <div class="star mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="info">
            <h5>${clothes[i].name}</h5>
            <h4>$${clothes[i].price}</h4>
            <button class="button">Buy Now</button>
          </div>
        </div>
        `;
}
for (let i = 0; i < watches.length; i++) {
  watchesContainer.innerHTML += `
  <div class="product text-center col-lg-3 col-md-6 col-sm-12"
           onclick="window.location.href='ProductDetails.html?id=${watches[i].id}'"
        >
          <img src="${watches[i].mainImage}" alt="" class="img-fluid" />
          <div class="star mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="info">
            <h5>${watches[i].name}</h5>
            <h4>$${watches[i].price}</h4>
            <button class="button">Buy Now</button>
          </div>
        </div>`;
}
for (let i = 0; i < shoes.length; i++) {
  shoesContainer.innerHTML += `
  <div class="product text-center col-lg-3 col-md-6 col-sm-12"
           onclick="window.location.href='ProductDetails.html?id=${shoes[i].id}'"
        >
          <img src="${shoes[i].mainImage}" alt="" class="img-fluid" />
          <div class="star mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="info">
            <h5>${shoes[i].name}</h5>
            <h4>$${shoes[i].price}</h4>
            <button class="button">Buy Now</button>
          </div>
        </div>`;
}
