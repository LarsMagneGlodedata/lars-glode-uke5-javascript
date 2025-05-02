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
// businessCard();


// 
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu")
    let isNavOpen = false
    function openNav() {
        const push = document.querySelector(".pushback")
        const mySidenav = document.querySelector("#mySidenav")
        mySidenav.style.width = "250px";
        push.style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        if (mySidenav.style.marginLeft === "250px") {
        }
        isNavOpen = true;
    }
  
    function closeNav() {
        const push = document.querySelector(".pushback")
        const mySidenav = document.querySelector("#mySidenav")
        mySidenav.style.width = "0";
        push.style.marginLeft = "0"
        document.body.style.backgroundColor = "#555";
        if (push.style.marginLeft === "0") {
        }
        isNavOpen = false;
    }

    menu.addEventListener("click", () => {
        if (isNavOpen) {
            closeNav()
        } else {
            openNav()
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu")

    menu.addEventListener("click", () => {
        menu.classList.toggle("change")     
    })
})


