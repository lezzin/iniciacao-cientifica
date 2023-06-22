const btn = document.querySelector("#mobile-button");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        return;
    }

    menu.classList.add("active");
})