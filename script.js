const categories = {
    electronics: [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Smartphone', price: 499 },
        // Add more electronic products if needed
    ],
    clothing: [
        { id: 3, name: 'T-Shirt', price: 19.99 },
        { id: 4, name: 'Jeans', price: 39.99 },
        // Add more clothing products if needed
    ],
    books: [
        { id: 5, title: 'JavaScript Basics', price: 29.99 },
        { id: 6, title: 'CSS Mastery', price: 34.99 },
        // Add more book products if needed
    ],
};

function showProducts(category) {
    const categoryContainer = document.getElementById('categories');
    const productsContainer = document.getElementById('products');
    const productInfoContainer = document.getElementById('productInfo');

    categoryContainer.style.display = 'none';
    productsContainer.style.display = 'block';
    productInfoContainer.style.display = 'none';

    const products = categories[category];
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerText = product.name || product.title;
        productElement.onclick = () => showProductInfo(product);
        productsContainer.appendChild(productElement);
    });

    function showProductInfo(product) {
        productInfoContainer.style.display = 'block';
        productInfoContainer.innerHTML = `
      <div>
        <h2>${product.name || product.title}</h2>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button onclick="buyProduct()">Buy</button>
      </div>
    `;
    }

    window.buyProduct = function() {
        alert('Product purchased!');
        resetApp();
    };

    function resetApp() {
        categoryContainer.style.display = 'flex';
        productsContainer.style.display = 'none';
        productInfoContainer.style.display = 'none';
        productInfoContainer.innerHTML = ''; // Очистимо вміст блоку інформації про товар
    }
}


