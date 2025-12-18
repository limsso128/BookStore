document.addEventListener('DOMContentLoaded', function() {
    // 책 아이템 모두 선택
    const bookItems = document.querySelectorAll('.book-item');

    bookItems.forEach(item => {
        item.addEventListener('click', () => {
            const bookId = item.dataset.id; // data-id 값
            const title = item.dataset.title; // data-title 값
            alert(`'${title}' 책 상세 페이지로 이동합니다.`);
            // 상세 페이지 이동
            location.href = `detail.html?id=${bookId}`;
        });
    });
});
