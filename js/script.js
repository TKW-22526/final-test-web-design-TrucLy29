document.addEventListener('DOMContentLoaded', () => {
	const products = document.querySelectorAll('.product');
	products.forEach(product => {
		product.style.cursor = 'pointer';
		product.addEventListener('click', () => {
			const titleEl = product.querySelector('h5');
			const pEls = product.querySelectorAll('p');
			const category = pEls[0] ? pEls[0].innerText : '';
			const price = pEls[1] ? pEls[1].innerText : '';
			const productData = {
				title: titleEl ? titleEl.innerText : '',
				category,
				price,
				img: '../assets/bioderma.jpg',
				desc: ''
			};
			sessionStorage.setItem('selectedProduct', JSON.stringify(productData));
			window.location.href = 'chi-tiet.html';
		});
	});
});