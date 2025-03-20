// Funcionalidad para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const mainMenu = document.getElementById('mainMenu');
  
  if (menuIcon && mainMenu) {
    menuIcon.addEventListener('click', function() {
      mainMenu.classList.toggle('active');
    });
  }

  // Cerrar menú al hacer clic en un enlace
  const menuLinks = mainMenu ? mainMenu.querySelectorAll('a') : [];
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mainMenu.classList.remove('active');
    });
  });

  // Funcionalidad para el carrito
  const cartIcon = document.getElementById('cartIcon');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartClose = document.getElementById('cartClose');
  const overlay = document.getElementById('overlay');
  
  if (cartIcon && cartSidebar && cartClose && overlay) {
    cartIcon.addEventListener('click', function() {
      cartSidebar.classList.add('open');
      overlay.style.display = 'block';
    });
    
    cartClose.addEventListener('click', function() {
      cartSidebar.classList.remove('open');
      overlay.style.display = 'none';
    });
    
    overlay.addEventListener('click', function() {
      cartSidebar.classList.remove('open');
      overlay.style.display = 'none';
    });
  }
  
  // Botón volver arriba
  const backToTop = document.getElementById('backToTop');
  
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });
    
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Funcionalidad para agregar al carrito
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.querySelector('.cart-count');
  const cartItems = document.querySelector('.cart-items');
  
  let count = 0;
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      count++;
      if (cartCount) {
        cartCount.textContent = count;
      }
      
      // Obtener información del producto
      const productCard = this.closest('.product-card');
      if (productCard && cartItems) {
        const productImg = productCard.querySelector('.product-img img').src;
        const productTitle = productCard.querySelector('.product-title').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        
        // Crear elemento de carrito
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <div class="cart-item-img">
            <img src="${productImg}" alt="${productTitle}">
          </div>
          <div class="cart-item-info">
            <h4 class="cart-item-title">${productTitle}</h4>
            <div class="cart-item-price">${productPrice}</div>
            <div class="cart-item-quantity">
              <button class="quantity-btn decrease">-</button>
              <span>1</span>
              <button class="quantity-btn increase">+</button>
            </div>
          </div>
          <button class="cart-item-remove"><i class="fas fa-trash"></i></button>
        `;
        
        cartItems.appendChild(cartItem);
        
        // Mostrar carrito
        if (cartSidebar && overlay) {
          cartSidebar.classList.add('open');
          overlay.style.display = 'block';
        }
      }
    });
  });
  
  // Formulario de contacto
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aquí iría la lógica para enviar el formulario
      alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
      contactForm.reset();
    });
  }
});
