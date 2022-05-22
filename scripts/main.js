"use strict"

let listField = document.getElementById("word-list")
let inputBox  = document.getElementById("txt-words")
let wordList  = tree

addEventListener("keydown", (e) => {
    let inputBoxFocused = document.activeElement === inputBox //|| inputBox.value.length <= 1
    let wordInBounds    = (e.key >= "a" && e.key <= "z" || spanishSpecial(e.key)) && inputBox.value.length < 16

    if(!inputBoxFocused && e.key.length == 1 && wordInBounds) {

        if(inputBox.value.length == 1){
            wordList = new tree(e.key)

        }
        
        inputBox.value += e.key

    } else if(e.key.length == 1 && wordInBounds && inputBox.value.length == 0) {
        wordList = new tree(e.key)

    } else if(e.key == "Backspace" && !inputBoxFocused) {
        inputBox.value = inputBox.value.slice(0, inputBox.value.length-1)

    }

    loadWords()
})

function spanishSpecial(intput) {
    switch(intput) {
        case 'á':
        break
        case 'é':
        break
        case 'í':
        break
        case 'ó':
        break
        case 'ú':
        break
        case 'ü':
        break
        case 'ñ':
        break
        
        default:
            return false
    }

    return true
}