"use strict"

let OL = document.getElementById("ol")
let inputBox = document.getElementById("txt-words")

const data = Object.keys( A_words )
const frec = data

let wordList;

wordList = new Tree(inputBox.value, true)
wordList.CreateTree()
wordList.RenderTree()
llamar_A_estrella( wordList.raiz )

const alfabeto = () => {
    let output = []

    for (let i = 0; i <= 25; i++) {
        let letter = String.fromCharCode("a".charCodeAt(0) + i)
        output.push(letter)
    }
    output.push("á")
    output.push("é")
    output.push("í")
    output.push("ó")
    output.push("ú")
    output.push("ü")
    output.push("ñ")

    return output
}

let num_palabras = 0

function New_Palabra(palabra) {

    let color;

    OL.innerHTML = ""

    if (palabra.length > 5) {
        color = "red"
    } else if ( blind_words.includes(palabra)) {
        color = "green"

        Data_Vista = []

        wordList = new Tree(palabra, true)
        wordList.CreateTree()
        wordList.RenderTree()

        llamar_A_estrella( wordList.raiz )

        if (OL.children.length == 0 && palabra.length > 0) {
            color = "red"
        }

    } else {
        color = "white"

        Data_Vista = []

        wordList = new Tree(palabra, true)
        wordList.CreateTree()
        wordList.RenderTree()

        llamar_A_estrella( wordList.raiz )

        if (OL.children.length == 0 && palabra.length > 0) {
            color = "red"
        }
    }
    return color
}

addEventListener("keyup", (key) => {

    let palabras = inputBox.value.trim().split(" ")
    let color_a_pintar = "black";

    if (inputBox.value.length == 0 && key.key == "Backspace") {
        inputBox.value = "s"
        return
    } else if (key.key == " ") {

        let ultimo = palabras.length - 1

        if ( !data.includes(palabras[ultimo]) ) {
            inputBox.value = palabras.join(" ")

            color_a_pintar = "red"

        } else {
            color_a_pintar = "white"
        }
    } else {
        color_a_pintar = New_Palabra(palabras[palabras.length - 1])
    }

    inputBox.style.color = color_a_pintar
})