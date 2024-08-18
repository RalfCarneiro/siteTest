const productsPerPage = 10;
let currentPage = 1;

const products = [
    { id: 1, name: "Action Figure do Homem-Aranha", category: "toys", price: 49.99 },
    { id: 2, name: "Funko Pop! Darth Vader", category: "toys", price: 39.99 },
    { id: 3, name: "Camisa do Star Wars", category: "clothing", price: 29.99 },
    { id: 4, name: "Camiseta do Batman", category: "clothing", price: 34.99 },
    { id: 5, name: "Poster do Harry Potter", category: "posters", price: 19.99 },
    { id: 6, name: "Caneca do Senhor dos Anéis", category: "mugs", price: 24.99 },
    { id: 7, name: "Luminária do Super Mario", category: "decor", price: 59.99 },
    { id: 8, name: "Caderno do Star Trek", category: "stationery", price: 14.99 },
    { id: 9, name: "Quebra-Cabeça do Mapa da Terra Média", category: "puzzles", price: 39.99 },
    { id: 10, name: "Mouse Pad do League of Legends", category: "accessories", price: 18.99 },
    { id: 11, name: "Bolsa do Rick and Morty", category: "bags", price: 44.99 },
    { id: 12, name: "Figurine do Goku", category: "toys", price: 54.99 },
    { id: 13, name: "Livro de RPG D&D", category: "books", price: 89.99 },
    { id: 14, name: "Action Figure do Deadpool", category: "toys", price: 59.99 },
    { id: 15, name: "Camiseta do Star Trek", category: "clothing", price: 29.99 },
    { id: 16, name: "Caneca do Doctor Who", category: "mugs", price: 21.99 },
    { id: 17, name: "Adesivos do Marvel", category: "accessories", price: 9.99 },
    { id: 18, name: "Posters do Avengers", category: "posters", price: 24.99 },
    { id: 19, name: "Luminária do Star Wars", category: "decor", price: 49.99 },
    { id: 20, name: "Agenda do Harry Potter", category: "stationery", price: 29.99 },
    { id: 21, name: "Camiseta do Game of Thrones", category: "clothing", price: 34.99 },
    { id: 22, name: "Funko Pop! Iron Man", category: "toys", price: 39.99 },
    { id: 23, name: "Bloco de Notas do Batman", category: "stationery", price: 12.99 },
    { id: 24, name: "Quadro do Stranger Things", category: "decor", price: 64.99 },
    { id: 25, name: "Action Figure do Pikachu", category: "toys", price: 49.99 },
    { id: 26, name: "Camiseta do Star Wars", category: "clothing", price: 27.99 },
    { id: 27, name: "Poster do Marvel", category: "posters", price: 18.99 },
    { id: 28, name: "Caneca do Star Trek", category: "mugs", price: 22.99 },
    { id: 29, name: "Bolsa do Harry Potter", category: "bags", price: 39.99 },
    { id: 30, name: "Quebra-Cabeça do Star Wars", category: "puzzles", price: 35.99 },
    { id: 31, name: "Figurine do Thor", category: "toys", price: 64.99 },
    { id: 32, name: "Luminária do Doctor Who", category: "decor", price: 49.99 },
    { id: 33, name: "Mouse Pad do Batman", category: "accessories", price: 16.99 },
    { id: 34, name: "Caderno do Rick and Morty", category: "stationery", price: 17.99 },
    { id: 35, name: "Figurine do Harry Potter", category: "toys", price: 59.99 },
    { id: 36, name: "Bolsa do Stranger Things", category: "bags", price: 44.99 },
    { id: 37, name: "Posters do Game of Thrones", category: "posters", price: 29.99 },
    { id: 38, name: "Caneca do League of Legends", category: "mugs", price: 24.99 },
    { id: 39, name: "Camiseta do Avengers", category: "clothing", price: 32.99 },
    { id: 40, name: "Figurine do Luke Skywalker", category: "toys", price: 54.99 },
    { id: 41, name: "Caderno do Avengers", category: "stationery", price: 21.99 },
    { id: 42, name: "Quadro do Marvel", category: "decor", price: 59.99 },
    { id: 43, name: "Mouse Pad do Star Trek", category: "accessories", price: 19.99 },
    { id: 44, name: "Luminária do Pikachu", category: "decor", price: 45.99 },
    { id: 45, name: "Bloco de Notas do Star Wars", category: "stationery", price: 14.99 },
    { id: 46, name: "Caneca do Avengers", category: "mugs", price: 23.99 },
    { id: 47, name: "Posters do Doctor Who", category: "posters", price: 21.99 },
    { id: 48, name: "Bolsa do Marvel", category: "bags", price: 37.99 },
    { id: 49, name: "Camiseta do Pikachu", category: "clothing", price: 28.99 },
    { id: 50, name: "Action Figure do Super Mario", category: "toys", price: 49.99 },
];

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }

    displayProducts(filteredProducts);
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filteredProducts = products;

    filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));

    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <span>${product.name}</span>
            <span>R$${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        container.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    // Lógica para adicionar ao carrinho
}

displayProducts(products);

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts(filteredProducts) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    paginatedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <span>${product.name} - R$${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        container.appendChild(productDiv);
    });

    updatePagination(filteredProducts.length);
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Atualiza o carrinho no localStorage
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
    localStorage.setItem('cart', JSON.stringify(cart)); // Atualiza o carrinho no localStorage
    displayCart();
}

function finalizePurchase() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        localStorage.setItem('cart', JSON.stringify(cart)); // Salva o carrinho no localStorage
        window.location.href = 'checkout.html'; // Redireciona para a página de checkout
    }
}

function toggleTheme() {
    const themeStylesheet = document.getElementById('themeStylesheet');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    
    if (themeStylesheet.getAttribute('href') === 'style.css') {
        themeStylesheet.href = 'styledark.css'; // Arquivo CSS para modo escuro
        themeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 8c-8.8 0-16 7.2-16 16v82.5C128.4 128.9 32 240.8 32 384c0 8.8 7.2 16 16 16h81.5c8.8 0 16-7.2 16-16v-82.5C335.6 239.2 432 127.2 432 8c0-8.8-7.2-16-16-16H256z"/></svg>`;
        themeToggleBtn.textContent = 'Modo Claro'; // Atualiza o texto do botão para "Modo Claro"
    } else {
        themeStylesheet.href = 'style.css'; // Arquivo CSS para modo claro
        themeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 8c-8.8 0-16 7.2-16 16v82.5C128.4 128.9 32 240.8 32 384c0 8.8 7.2 16 16 16h81.5c8.8 0 16-7.2 16-16v-82.5C335.6 239.2 432 127.2 432 8c0-8.8-7.2-16-16-16H256z"/></svg>`;
        themeToggleBtn.textContent = 'Modo Escuro'; // Atualiza o texto do botão para "Modo Escuro"
    }
}

function updatePagination(totalProducts) {
    const paginationContainer = document.getElementById('pagination');
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    paginationContainer.innerHTML = '';

    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Anterior';
        prevButton.onclick = () => changePage(currentPage - 1);
        paginationContainer.appendChild(prevButton);
    }

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = i === currentPage ? 'active' : '';
        pageButton.onclick = () => changePage(i);
        paginationContainer.appendChild(pageButton);
    }

    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Próximo';
        nextButton.onclick = () => changePage(currentPage + 1);
        paginationContainer.appendChild(nextButton);
    }
}

function changePage(pageNumber) {
    currentPage = pageNumber;
    filterProducts();
}

displayProducts(products);
displayCart();
