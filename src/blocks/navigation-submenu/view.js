const getOffSet = (el) => {
	if (el instanceof HTMLElement) {
		var rect = el.getBoundingClientRect();

		return {
			top: rect.top + window.pageYOffset,
			left: rect.left + window.pageXOffset,
		};
	}

	return {
		top: null,
		left: null,
	};
};

let megaMenus = document.querySelectorAll('.premiun-mega-menu');
if (megaMenus.length) {
	let container = document.body;
	megaMenus = Array.from(megaMenus);
	megaMenus.forEach(menu => {
		const submenu = menu.querySelector('.premium-navigation__submenu-container');
		const width = menu.dataset.width;
		const { contentSize, wideSize } = PBGMegaMenu.layout;
		menu.addEventListener("mouseover", function (event) {
			// highlight the mouseover target
			submenu.style.left = `0`;
			submenu.style.width = width === 'content' ? contentSize : wideSize;
			const left = (container.clientWidth - submenu.clientWidth) / 2 - getOffSet(submenu).left;
			submenu.style.left = `${left}px`;
		}, false);
	});
}