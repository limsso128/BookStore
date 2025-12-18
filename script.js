document.addEventListener('DOMContentLoaded', function() {
    const bookItems = document.querySelectorAll('.book-item');

    bookItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('h3').innerText;
            alert(`'${title}' 책 상세 페이지로 이동합니다.`);
            // 실제로는 location.href = '상세페이지URL'; 와 같이 이동 처리를 합니다.
        });
    });
});
