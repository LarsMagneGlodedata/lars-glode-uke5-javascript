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

// 
console.log("----------------------------------")
// 


function businessCard() {

    // Variable som henter element
    const h2Title = document.querySelector("#title")
    console.log(h2Title)
    const pDescription = document.querySelector("#description")
    console.log(pDescription)
    const imgImage = document.querySelector("#image")
    console.log(imgImage)

    // Variable som lagrer data
    let firstName = "Lars Magne"
    let lastName = "gløde"
    const fullName = firstName + " " + lastName
    console.log(fullName)
    let description = "Student"
    console.log(`${firstName} ${lastName}, ${description}.`)
    console.log("Hei fra inni en funksjon");
    let image = "https://images.unsplash.com/photo-1745512751454-710500481a82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    // const main = document.querySelector("main")
    // main.textContent = `${firstName} ${lastName}, ${description}.`

    // Manipulerer variabler sammen
    h2Title.textContent = fullName
    pDescription.textContent = description
    imgImage.src = image
    imgImage.alt = "Icebergs loom in a dark, cold ocean"
    imgImage.style.width = "100%"
    // imgImage.classList.add = "businessCardImage"

}
// businessCard();

const button = document.querySelector("#button")
button.addEventListener("click", businessCard)

//
console.log("-----------------------------------")
// 

// BURGER MENU
 document.addEventListener("DOMContentLoaded", () => {
    let isNavOpen = false
    const burger = document.querySelector(".burger")
    const navMenu = document.querySelector(".navMenu")
    const main = document.querySelector("main")
    const overlay = document.querySelector(".overlay")

    // function for å åpne nav
     function openNav() {
        navMenu.style.height = "193px"
        overlay.style.height = "100%"
        burger.classList.toggle("change")
        if (navMenu)
        navMenu.style.height === "193px"
        isNavOpen = true
     }

    //  function for å lukke nav
     function closeNav() {
        navMenu.style.height = "0"
        overlay.style.height = "0"
        burger.classList.toggle("change")
        if (navMenu)
        navMenu.style.height === "0"
        isNavOpen = false
     }


     // Åpne nav når du trykke på burgermenyen
     burger.addEventListener("click", () => {
        if (isNavOpen) {
            closeNav()
        } else {
            openNav()
        }
     })



     // lukker nav når du trykker på main (utenfor menyen)
     main.addEventListener("click", () => {
        if (isNavOpen) {
            closeNav()
        } else {
            // do nothing
        }
     })




     //  åpner og lukker nav når du trykker på "m" og lukker nav når du trykker på "ESC"
     let keypress = {
     }
     document.addEventListener("keydown", handler)
     function handler(x) {
        keypress[x.key] = true
        if ((x.key === "m" || x.key === "Escape") && isNavOpen) {
            closeNav()
        } else if (x.key === "m") {
            openNav()
        } else {
            // do nothing
        }
    }

 })
 
// 

