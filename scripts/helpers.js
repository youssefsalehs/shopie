export function getCartItems() {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
}

export function setCartItems(items) {
  localStorage.setItem("cartItems", JSON.stringify(items));
}

export function addItem(newItem) {
  const cartItems = getCartItems();
  const existingItemIndex = cartItems.findIndex(
    (item) => item.id === newItem.id && item.size === newItem.size
  );

  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity += newItem.quantity;
  } else {
    cartItems.push(newItem);
  }

  setCartItems(cartItems);
  notify();
}

export function removeItem(id, size = null) {
  if (size === "null") size = null;
  id = Number(id);
  let cartItems = getCartItems();

  cartItems = cartItems.filter((cartItem) =>
    size ? !(cartItem.id === id && cartItem.size === size) : cartItem.id !== id
  );
  notify("Product Has Been Removed");
  setCartItems(cartItems);
}

export function clearCart() {
  localStorage.removeItem("cartItems");
  notify("All Products Have Been Removed");
}
export function notify(message = "The product has been added to your cart!") {
  let notifyDiv = document.createElement("div");
  notifyDiv.classList.add("notify");
  notifyDiv.innerText = message;

  document.body.appendChild(notifyDiv);

  setTimeout(() => {
    notifyDiv.style.opacity = "1";
    notifyDiv.style.transform = "translateY(0)";
  }, 10);

  setTimeout(() => {
    notifyDiv.style.opacity = "0";
    notifyDiv.style.transform = "translateY(20px)";
    setTimeout(() => notifyDiv.remove(), 400);
  }, 3000);
}
