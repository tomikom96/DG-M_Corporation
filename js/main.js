const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const navFooterYear = document.querySelector(".footer__year");

const allNavItems = document.querySelectorAll(".nav__link");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
			navBtn.classList.remove("is-active");
		});
	});
};

navBtn.addEventListener("click", handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	navFooterYear.innerText = year;
};
handleCurrentYear();
