"use strict"

const filterByLetters = (input) => {
    let len    = input.length
    let output = []

    data.forEach(word => {
        if(word.slice(0, len) == input.toUpperCase()) {
            output.push(word)
        }
    })
    return output
}

function clearWords() {
    if(listField.childElementCount > 0) {
        let childs = listField.children

        while(childs.length > 0) {
            listField.removeChild(childs[0])
        }
    }
}

function loadWords() {

    clearWords()
    if(inputBox.value == "") return
    
    for(let word of filterByLetters(inputBox.value)) {
        let child = document.createElement("h7")
        child.setAttribute("id", word)
        child.innerHTML = word

        listField.appendChild(child)
    }
}