$(document).ready(function () {
    // Sample data for products
    const products = [
      { id: 1, name: 'Margherita Pizza', price: 10, description: 'Classic tomato and mozzarella cheese.' },
      { id: 2, name: 'Pepperoni Pizza', price: 12, description: 'Pepperoni and mozzarella cheese.' },
      // Add more products as needed
    ];
  
    // Function to render products on the page
    function renderProducts() {
      const productsContainer = $('#products');
  
      products.forEach(product => {
        const card = $(`<div class="product-card" data-product-id="${product.id}">
                        <img src="pizza_image.jpg" alt="${product.name}" class="product-image">
                        <h3>${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p>Price: $${product.price}</p>
                        <button class="shopping-cart-btn">Add to Cart</button>
                      </div>`);
  
        productsContainer.append(card);
      });
  
      // Add event listener for the "Add to Cart" button
      $('.shopping-cart-btn').on('click', function () {
        const productId = $(this).closest('.product-card').data('product-id');
        // Implement logic to add the product to the shopping cart
        console.log(`Product added to cart: ${productId}`);
      });
    }
  
    // Render initial products
    renderProducts();
  });
  