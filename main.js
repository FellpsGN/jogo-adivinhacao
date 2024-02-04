let attempts = 0;
let specialNumber = Math.round(Math.random() * 10);
const initial = document.querySelector(".screen1");
const finished = document.querySelector(".screen2");

console.log(specialNumber);

function handleTryClick(event) {
    event.preventDefault();
    const inputNumber = document.querySelector("#inputNumber");
    attempts++;

    if (Number(inputNumber.value) === specialNumber) {
        const content = document.querySelector(".screen2 h2");
        content.innerText = `Acertou em ${attempts} tentativa(s)!!`;

        initial.classList.add("hide");
        finished.classList.remove("hide");
    }

    inputNumber.value = "";

}

function handleAgainClick() {
    initial.classList.remove("hide");
    finished.classList.add("hide");
    attempts = 0;
    specialNumber = Math.round(Math.random() * 10);
}

//Eventos 
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");

btnTry.addEventListener('click', handleTryClick);
btnAgain.addEventListener('click', handleAgainClick);


