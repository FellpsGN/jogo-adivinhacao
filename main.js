let attempts = 0;
let specialNumber = Math.round(Math.random() * 10);
const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");

//Eventos 
btnTry.addEventListener('click', handleTryClick);
btnAgain.addEventListener('click', handleAgainClick);
document.addEventListener('keydown', handleKeydownEvent);



//funções

function toggleScreen() {
    screenOne.classList.toggle("hide");
    screenTwo.classList.toggle("hide");
}

function handleTryClick(event) {
    event.preventDefault();
    const inputNumber = document.querySelector("#inputNumber");
    if (inputNumber.value !== '') {
        attempts++;
    }

    if (Number(inputNumber.value) === specialNumber) {
        /**
        * const content = document.querySelector(".screen2");
        * screen2.querySelector("h2").innerText = `Acertou em ${attempts} tentativa(s)!!`;
        */
        const content = document.querySelector(".screen2 h2");
        
        content.innerText = `Acertou em ${attempts} tentativa(s)!!`;

        toggleScreen();
    }

    inputNumber.value = "";

}

function handleAgainClick() {
    toggleScreen();
    attempts = 0;
    specialNumber = Math.round(Math.random() * 10);
}

function handleKeydownEvent(e) {
    /* console.log(e.key); */
    if (e.key == 'Enter' && screenOne.classList.contains("hide")) {
        handleAgainClick();
    }
}




