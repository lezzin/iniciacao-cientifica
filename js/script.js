const header = document.querySelector(".header.dynamic");

if (header) {
    const isHomePage = location.pathname.includes("/");
    const scrollThreshold = isHomePage ? 400 : 150;

    window.addEventListener("scroll", () => {
        header.classList.toggle("active", scrollY > scrollThreshold);
    });
}

const btn = document.querySelector("#btn");

if (btn) {
    const menu = document.querySelector(".header nav");
    const links = menu.querySelectorAll("a");
    
    btn.addEventListener("click", () => menu.classList.toggle("active"));
    links.forEach(function(link) {
        link.addEventListener("click", () => menu.classList.remove("active"));
    });
}
                  
