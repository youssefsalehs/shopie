import { getCartItems } from "./helpers.js";

export function renderCartIcon() {
  const cartItems = getCartItems();
  const cartIcon = document.getElementById("cart-icon");
  let quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  let badge = document.querySelector(".circle");
  if (cartItems.length > 0) {
    if (!badge) {
      badge = document.createElement("div");
      badge.classList.add("circle");
      cartIcon.appendChild(badge);
    }
    badge.innerHTML = `<span>${quantity}</span>`;
  } else if (badge) {
    badge.remove();
  }
}

renderCartIcon();
