// DATATYPES
// Primative datatypes
// string = text
// number = tall
// boolean = sant/usant sjekk

// VARIABLES
// let = kan bytte verdi
// const = fast verdi
// var = utdatert

let userName = "Lars"
userName = "Twoinch"
console.log(userName)
console.log(typeof userName)

let userAge = 27
console.log(userAge)
console.log(typeof userAge)

let isPresent = true
console.log(isPresent)
console.log(typeof isPresent)

const firstName ="Lars Magne"
console.log(firstName)

const lastName = "glodedata"

// Variable chaining med +
let fullName = firstName + " " + lastName + "!"
// Template literal
fullName = `${firstName} ${lastName}!!`
console.log(fullName)

const num1 = 10
const num2 = 10
const sum = num1 + num2
console.log(sum)

// NON-PRIMATIVE DATATYPES
// Function = en blokk med kode som kjøres samtidig
// Array = liste av data
// Object = key:value liste av data

function businessCard() {
    console.log("Hei fra inni en funksjon");
    let firstName = "Lars Magne"
    let lastName = "gløde"
    let userAge = 27
    let title = "Student"
    console.log(`${firstName} ${lastName}, ${userAge}, ${title}.`)

    const main = document.querySelector("main")
    main.textContent = `${firstName} ${lastName}, ${userAge}, ${title}.`
}
businessCard();

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("button")
    const ul = document.querySelector("ul")

    menu.addEventListener("click", () => {
        if (ul.style.display === "none" || ul.style.display === "") {
            ul.style.display = "block"
        } else {
            ul.style.display = "none"
        }
    })
})

