// Variables
const clickBiscoit = document.querySelector("#biscoit")
const btnReset = document.querySelector("#btnReset")
const messageDisplay = document.querySelector(".message")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fireworksContainer = document.getElementById("fireworksContainer") 

const messages = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A sorte favorece os audaciosos!",
    "Hoje é um ótimo dia para começar algo novo.",
    "Acredite nos seus sonhos e eles se tornarão realidade.",
    "O sucesso está no seu futuro próximo.",
    "Grandes oportunidades estão a caminho!"    
]

let lastMessageIndex = -1

// Events
clickBiscoit.addEventListener('click', handleClickBiscoit)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKey)

// Functions callback
function handleClickBiscoit(event) {
    event.preventDefault()    
    showFireworks()
    
    setTimeout(() => {
        showRandomMessage()
        toggleScreen()
    }, 1000) 
}

function handleResetClick() {
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    screen2.classList.toggle("show")
}

function handleKey(e) {
    if (e.key === 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }    
}

function showRandomMessage() {
    let randomIndex

    do {
        randomIndex = Math.floor(Math.random() * messages.length)
    } while (randomIndex === lastMessageIndex)

    lastMessageIndex = randomIndex
    const randomMessage = messages[randomIndex]
    messageDisplay.textContent = randomMessage
}


function showFireworks() {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div")
        particle.classList.add("particle")

        particle.style.left = `${50 + Math.random() * 20 - 10}%`
        particle.style.top = `${50 + Math.random() * 20 - 10}%`

        particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`)
        particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`)

        fireworksContainer.appendChild(particle)

        particle.addEventListener("animationend", () => {
        particle.remove()
        })
    }
    fireworksContainer.classList.remove("hide") 
}
