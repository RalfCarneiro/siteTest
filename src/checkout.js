document.addEventListener('DOMContentLoaded', () => {
    const checkoutSummary = document.getElementById('checkoutSummary');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let summaryHtml = '<h2>Resumo da Compra</h2>';

    if (cart.length === 0) {
        summaryHtml += '<p>Seu carrinho está vazio!</p>';
    } else {
        cart.forEach(item => {
            summaryHtml += `<p>${item.name} - R$${item.price.toFixed(2)}</p>`;
        });
        const total = cart.reduce((total, item) => total + item.price, 0);
        summaryHtml += `<p><strong>Total: R$${total.toFixed(2)}</strong></p>`;
    }

    checkoutSummary.innerHTML = summaryHtml;
});

function confirmPurchase() {
    alert('Compra confirmada!');
    localStorage.removeItem('cart'); 
    window.location.href = 'index.html';
}

function cancelCheckout() {
    window.location.href = 'index.html'; 
}
