document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart');
  
// Cargar carrito desde localStorage al cargar la página
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
// Renderizar el carrito
    function renderCart() {
      cartItems.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Cantidad: ${item.quantity} - Subtotal: $${item.quantity * item.price}`;
        cartItems.appendChild(li);
        total += item.quantity * item.price;
      });
      cartTotal.textContent = total;
    }
  
// Renderizar carrito inicialmente
    renderCart();
  
// Agregar un producto al carrito
    function addToCart(name, price) {
      const selectedItems = document.querySelectorAll('.list-group-item.active');
      selectedItems.forEach(selectedItem => {
        const productName = selectedItem.textContent.trim();
        const existingItem = cart.find(item => item.name === productName && item.price === price);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          cart.push({ name: productName, price, quantity: 1 });
        }
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
  
// Vaciar el carrito
    clearCartBtn.addEventListener('click', function() {
      cart = [];
      localStorage.removeItem('cart');
      renderCart();
    });
  
// Eventos en "Añadir al carrito"
    productList.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-add-to-cart')) {
        const product = event.target.parentNode;
        const selectedItems = product.querySelectorAll('.list-group-item.active');
        if (selectedItems.length > 0) {
          selectedItems.forEach(selectedItem => {
            const productPrice = parseInt(selectedItem.dataset.price);
            addToCart(selectedItem.textContent.trim(), productPrice);
          });
        } else {
          alert('Por favor, selecciona al menos una opción.');
        }
      }
    });
  
// Agregar evento a los elementos de la lista de productos
    const productItems = document.querySelectorAll('.list-group-item');
    productItems.forEach(item => {
      item.addEventListener('click', function() {
// Alternar la clase activa para permitir la selección múltiple
        this.classList.toggle('active');
      });
    });
  });