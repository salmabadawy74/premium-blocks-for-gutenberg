console.log('kk mega menu');
const megaMenu = document.querySelectorAll('.premiun-mega-menu');

if (megaMenu.length) {
	let container = document.body;
	const submenu = megaMenu[0].querySelector('.wp-block-navigation__submenu-container');

	submenu.addEventListener("mouseenter", function (event) {
		// highlight the mouseenter target
		console.log(container.clientWidth, 'hello');
		submenu.style.width = `${container.clientWidth}px`;
		submenu.style.left = '0';
	}, false);

}