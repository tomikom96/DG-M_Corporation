const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const navFooterYear = document.querySelector(".footer__year");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
};

navBtn.addEventListener("click", handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	navFooterYear.innerText = year;
};
handleCurrentYear();
