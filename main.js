const specialNumber = Math.round(Math.random() * 10);
let attempts = 0;
console.log(specialNumber);

function handleClick(event) {
    event.preventDefault();
    const inputNumber = document.querySelector("#inputNumber");
    attempts++;

    if (Number(inputNumber.value) === specialNumber) {
        const initial = document.querySelector(".screen1");
        const finished = document.querySelector(".screen2");

        const content = document.querySelector(".screen2 h2");
        content.innerText = `Acertou em ${attempts} tentativa(s)!!`;

        initial.classList.add("hide");
        finished.classList.remove("hide");


    }

}

function handleChange() {
    const initial = document.querySelector(".screen1");
    const finished = document.querySelector(".screen2");

    initial.classList.remove("hide");
    finished.classList.add("hide");
}

