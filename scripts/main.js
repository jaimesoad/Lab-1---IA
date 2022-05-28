"use strict"

let listField = document.getElementById("word-list")
let inputBox  = document.getElementById("txt-words")
let wordList  = tree

const alfabeto = () => {
    let output = []

    for(let i = 0; i <= 25; i++){
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

addEventListener("keyup", () => {
    let inputBoxFocused = document.activeElement === inputBox

    if(inputBoxFocused) {
        if(inputBox.value.length == 1) {
            wordList = new tree(inputBox.value)
        }

        loadWords()
    }

    if(inputBox.value.length > 5) {
        inputBox.style.color = "red"

    } else {
        inputBox.style.color = ""
    }
})