const products = [
    { id: 1, name: "Camiseta Básica", category: "tshirts", price: 29.99 },
    { id: 2, name: "Jeans Skinny", category: "jeans", price: 89.99 },
    { id: 3, name: "Jaqueta de Couro", category: "jackets", price: 199.99 },
    { id: 4, name: "Camiseta Estampada", category: "tshirts", price: 39.99 },
    { id: 5, name: "Jaqueta Jeans", category: "jackets", price: 149.99 },
];

let cart = [];

function displayProducts(filteredProducts) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <span>${product.name} - R$${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        container.appendChild(productDiv);
    });
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - R$${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function finalizePurchase() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Compra finalizada! Total: R$${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`);
        cart = [];
        displayCart();
    }
}

// Inicializa a exibição de produtos
displayProducts(products);
