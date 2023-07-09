const primaryNav = document.querySelector(".primary-nav");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        toggle.setAttribute("aria-expanded", true)
    } else {
        primaryNav.setAttribute('data-visible', false);
        toggle.setAttribute("aria-expanded", false);
    }
})