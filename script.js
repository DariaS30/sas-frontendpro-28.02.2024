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
                <button onclick="showOrderForm()">Buy</button>
            </div>
        `;
    }

    window.showOrderForm = function() {
        const orderForm = document.getElementById('orderForm');
        orderForm.style.display = 'block';
    };

    function submitOrder(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const city = document.getElementById('city').value;
        const postOffice = document.getElementById('postOffice').value;
        const paymentMethod = document.getElementById('paymentMethod').value;
        const quantity = document.getElementById('quantity').value;
        const comment = document.getElementById('comment').value;

        if (!fullName || !city || !postOffice || !paymentMethod || !quantity) {
            alert('Please fill in all required fields.');
            return;
        }

        const orderInfo = {
            fullName,
            city,
            postOffice,
            paymentMethod,
            quantity,
            comment,
        };

        displayOrderInfo(orderInfo);
    }

    function displayOrderInfo(orderInfo) {
        const orderSummaryContainer = document.getElementById('orderSummary'); // Змінено id контейнера
        orderSummaryContainer.innerHTML = `
            <div>
                <h2>Order Summary</h2>
                <p><strong>Product:</strong> ${orderInfo.quantity} x ${selectedProduct.name || selectedProduct.title}</p>
                <p><strong>Delivery Address:</strong> ${orderInfo.fullName}, ${orderInfo.city}, ${orderInfo.postOffice}</p>
                <p><strong>Payment Method:</strong> ${orderInfo.paymentMethod}</p>
                <p><strong>Comment:</strong> ${orderInfo.comment}</p>
            </div>
        `;
    }
}



