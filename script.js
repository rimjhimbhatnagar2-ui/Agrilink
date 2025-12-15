let cart = [];
let total = 0;

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
}

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  document.getElementById("cartCount").innerText = cart.length;
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cartItems");
  list.innerHTML = "";
  cart.forEach(c => {
    let li = document.createElement("li");
    li.innerText = `${c.item} - ₹${c.price}`;
    list.appendChild(li);
  });
  document.getElementById("total").innerText = total;
}

function checkout() {
  alert("Order placed successfully (Demo)");
  cart = [];
  total = 0;
  updateCart();
  document.getElementById("cartCount").innerText = 0;
}

function login() {
  let role = document.getElementById("role").value;
  alert(role + " logged in (Demo)");
  if (role === "farmer") showSection("farmer");
}

