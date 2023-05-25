
let changeBackground = document.querySelector(".changeBackground");
let body = document.querySelector(".body");

changeBackground.addEventListener("click", () => {
    body.classList.toggle("darkbackground");
    changeBackground.innerText = body.classList.contains("darkbackground") ? "Ustaw białe tło strony" : "Ustaw ciemny tło strony";
});
