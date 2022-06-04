"use strict"

let listField = document.getElementById("word-list")
let inputBox  = document.getElementById("txt-words")
const data    = Object.keys(datos)
const frec    = datos
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
    // let inputBoxFocused = document.activeElement === inputBox

    Data_Vista = []

    wordList = new Tree(inputBox.value)
    wordList.CreateTree()
    wordList.RenderTree()

    buscarProfundidad ( wordList )

    if(inputBox.value.length > 5 || (listField.children.length == 0 && inputBox.value.length > 0)) {
        inputBox.style.color = "red"
    } else if (data.includes(inputBox.value)) {
        inputBox.style.color = "green"

        Data_Vista = []

        wordList = new Tree(inputBox.value)
        wordList.CreateTree()
        wordList.RenderTree()

        buscarProfundidad ( wordList )
    
    } else {
        inputBox.style.color = "white"

        Data_Vista = []

        wordList = new Tree(inputBox.value, true)
        wordList.CreateTree()
        wordList.RenderTree()

        buscarProfundidad ( wordList )
    }

    console.log(`${inputBox.value}: ${datos[inputBox.value]}`)
})