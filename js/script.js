"use strict";

var header = document.querySelector(".header.dynamic");

if (header) {
    addEventListener("scroll", () => {
        (scrollY > 330) ? header.classList.add("active") : header.classList.remove("active");
    })
}

var btn = document.querySelector("#btn");

if (btn) {
    var menu = document.querySelector("nav");
    btn.addEventListener("click", () => { menu.classList.toggle("active") })
}
