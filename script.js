// Basic Mobile Products List
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 799,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 699,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Google Pixel 8",
    price: 599,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 649,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02560?w=400&auto=format&fit=crop&q=60"
  }
];

let cart = [];

// Display all products on page load
function loadProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach((phone) => {
    list.innerHTML += `
      <div class="card">
        <img src="${phone.image}" alt="${phone.name}">
        <h3>${phone.name}</h3>
        <p class="price">$${phone.price}</p>
        <button class="btn" onclick="addToCart(${phone.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Add item to cart
function addToCart(id) {
  const phone = products.find((p) => p.id === id);
  cart.push(phone);
  updateCart();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Update cart display and total price
function updateCart() {
  const cartContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartCount.innerText = cart.length;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.innerText = "0";
    return;
  }

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartContainer.innerHTML += `
      <div class="cart-row">
        <span>${item.name} - $${item.price}</span>
        <button class="btn-remove" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  cartTotal.innerText = total;
}

// Simple Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Please add items to your cart first!");
    return;
  }
  alert("Order placed successfully! Total: $" + document.getElementById("cart-total").innerText);
  cart = [];
  updateCart();
}

// Run loadProducts when page opens
loadProducts();
