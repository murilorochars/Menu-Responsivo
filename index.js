let button = document.querySelector(".button");
let div = document.querySelector(".Container");

button.addEventListener('click', () => {
    div.classList.toggle('ativo');
});
