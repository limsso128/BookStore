// 책 클릭 시 상세페이지 이동
document.addEventListener('DOMContentLoaded', function() {
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
        item.addEventListener('click', () => {
            const bookId = item.dataset.id;
            const title = item.dataset.title;
            alert(`'${title}' 책 상세 페이지로 이동합니다.`);
            location.href = `detail.html?id=${bookId}`;
        });
    });
});

// 장바구니 담기 기능 (detail.html에서)
function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${book.title}이 장바구니에 담겼습니다.`);
}
