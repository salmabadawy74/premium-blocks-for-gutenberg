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

const initMegaMenu = () => {
	let megaMenus = document.querySelectorAll('.premiun-mega-menu');

	if (megaMenus.length && PBGMegaMenu.is_responsive_menu !== 'always') {
		let container = document.body;
		megaMenus = Array.from(megaMenus);
		if (PBGMegaMenu.is_responsive_menu === 'mobile' && window.innerWidth <= 599) {
			megaMenus.forEach(menu => {
				const submenu = menu.querySelector('.premium-navigation__submenu-container');
				submenu.style.width = 'auto';
				submenu.style.left = `0`;
			});
			return;
		}
		megaMenus.forEach(menu => {
			const submenu = menu.querySelector('.premium-navigation__submenu-container');
			const width = menu.dataset.width;
			const parentItem = submenu.parentElement;

			const { contentSize } = PBGMegaMenu.layout;
			const megaMenuStyle = () => {
				submenu.style.left = `0`;
				submenu.style.width = width === 'content' ? contentSize : width === 'full' ? `${container.clientWidth}px` : `${parentItem.parentElement.clientWidth}px`;
				let left = width === 'content' ? (container.clientWidth - submenu.clientWidth) / 2 - getOffSet(submenu).left : `-${getOffSet(submenu).left}`;
				left = width === 'menu-container' ? `-${parentItem.offsetLeft}` : left;
				submenu.style.left = `${left}px`;
			};
			if (PBGMegaMenu.openOnClick) {
				menu.addEventListener("click", function (event) {
					// highlight the click target
					megaMenuStyle();
				}, false);
			} else {
				menu.addEventListener("mouseover", function (event) {
					// highlight the mouseover target
					megaMenuStyle();
				}, false);
			}
		});
	}
}

initMegaMenu();
window.addEventListener("resize", initMegaMenu, false);