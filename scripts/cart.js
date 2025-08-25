import {
  getCartItems,
  setCartItems,
  removeItem,
  clearCart,
  notify,
} from "./helpers.js";
import { renderCartIcon } from "./general.js";
function renderCart() {
  const cartItems = getCartItems();
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  if (cartItems.length > 0) {
    let tableHTML = `
      <table width="100%">
        <thead>
          <tr>
            <td>Remove</td>
            <td>Image</td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
    `;

    cartItems.forEach((cartItem) => {
      tableHTML += `
        <tr>
          <td><i class="fa-solid fa-trash-can trash" data-id="${
            cartItem.id
          }" style="cursor:pointer;"></i></td>
          <td><img src="${cartItem.image}" alt="${
        cartItem.name
      }" class="p-2"/></td>
          <td><h5>${cartItem.name}</h5></td>
          <td><h5>$${cartItem.price}</h5></td>
          <td>
            <input
              type="number"
              class="pl-1 w-25 quantity"
              data-id="${cartItem.id}"
              value="${cartItem.quantity || 1}"
              min="1"
            />
          </td>
          <td><h5>$${cartItem.price * (cartItem.quantity || 1)}</h5></td>
        </tr>
      `;
    });

    tableHTML += `</tbody></table>`;
    cartContainer.innerHTML = tableHTML;
    const trashIcons = document.querySelectorAll(".trash");
    trashIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        const id = Number(icon.getAttribute("data-id"));
        removeItem(id);
        renderCart();
        renderCartIcon();
      });
    });
    const qtyInputs = document.querySelectorAll(".quantity");
    qtyInputs.forEach((input) => {
      input.addEventListener("change", () => {
        const id = Number(input.getAttribute("data-id"));
        let cartItems = getCartItems();

        cartItems = cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: parseInt(input.value) || 1 }
            : item
        );

        setCartItems(cartItems);
        renderCart();
        renderCartIcon();
      });
    });
  } else {
    cartContainer.innerHTML = `<p class="fs-2 text-center">Your Cart Is Empty 🛒</p>`;
  }
  let subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  document.getElementById("subtotal").innerHTML = "$" + subtotal;
  let shipping = 0.3 * subtotal;
  document.getElementById("shipping").innerHTML = "$" + shipping;
  document.getElementById("total").innerHTML = "$" + (shipping + subtotal);
  document.getElementById("clear").addEventListener("click", () => {
    clearCart();
    renderCart();
    renderCartIcon();
  });
  document.getElementById("checkout").addEventListener("click", () => {
    notify("Proceeding to checkout...");

    setTimeout(() => {
      notify("Your Order Is Confirmed ✅ ");
    }, 1000);
  });
}

renderCart();
