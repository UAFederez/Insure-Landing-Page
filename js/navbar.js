const navBtn = document.querySelector(".hamburger-btn");
const navList = document.querySelector(".primary-navigation ul");

navBtn.addEventListener("click", () => {
    const isOpen = navList.getAttribute("data-visible");
    const img = navBtn.querySelector("img");

    if (isOpen === "true") {
        navList.setAttribute("data-visible", false);
        document.documentElement.classList.remove("body-no-scroll");
        img.setAttribute("src", img.getAttribute("data-open-src"));
    } else {
        navList.setAttribute("data-visible", true);
        img.setAttribute("src", img.getAttribute("data-close-src"));
        document.documentElement.classList.add("body-no-scroll");
    }
});
