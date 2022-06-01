"use strict"

let listField = document.getElementById("word-list")
let inputBox  = document.getElementById("txt-words")
let wordList;

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

    Data_Vista = []

    wordList = new Tree(inputBox.value)
    wordList.CreateTree()
    wordList.RenderTree()

    loadWords()

    if(inputBox.value.length > 5 || (listField.children.length == 0 && inputBox.value.length > 0)) {
        inputBox.style.color = "red"
        console.log("Aqui ando")
    } else if (data.includes(inputBox.value)) {
        inputBox.style.color = "green"

        Data_Vista = []

        wordList = new Tree(inputBox.value)
        wordList.CreateTree()
        wordList.RenderTree()

        loadWords()

    } else {
        inputBox.style.color = "white"

        Data_Vista = []

        wordList = new Tree(inputBox.value)
        wordList.CreateTree()
        wordList.RenderTree()

        loadWords()

    }

    console.log(`${inputBox.value}: ${datos[inputBox.value]}`)
})