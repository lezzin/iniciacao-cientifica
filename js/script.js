const headerMenu = document.querySelector(".header nav");
const linkToTop = document.querySelector(".link-to-top");

const mobileButton = document.querySelector("#btn");
const mobileHeader = document.querySelector(".header.dynamic");

const isHomePage = location.pathname.includes("index.html") || !location.pathname.includes(".html");
const scrollToShowHeader = isHomePage ? 400 : 150;
const scrollToShowLink = 150;

window.addEventListener("scroll", () => {
    mobileHeader.classList.toggle("active", scrollY > scrollToShowHeader);
    linkToTop.classList.toggle("active", scrollY > scrollToShowLink);
});

mobileButton.addEventListener("click", () => headerMenu.classList.toggle("active"));

linkToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});