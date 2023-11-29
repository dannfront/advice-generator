'use strict'

const containerAdvice = document.querySelector(".advice");
const spanAdvice = document.querySelector(".id")
const btnDice = document.querySelector(".dice")

async function showapi() {

    try {
        containerAdvice.innerHTML = ""

        const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
        const json = await res.json()
        const advice = json.slip.advice
        const id = json.slip.id

        spanAdvice.textContent = id

        const htmlAdvice = `<p class="text-center font-manrope mb-5">"${advice}"</p>`

        containerAdvice.insertAdjacentHTML("beforeend", htmlAdvice);

    } catch (error) {
        alert(error);
    }
}

btnDice.addEventListener("click", showapi)
window.addEventListener("load", showapi)
