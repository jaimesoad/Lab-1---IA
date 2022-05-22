"use strict"

// Filtra todas las palabras en el arreglo que comiencen con ciertos caracteres.
const filterByLetters = input => data.filter(word => word.startsWith(input))

function loadWords() {

    listField.innerHTML = ''
    if(inputBox.value == "") return

    filterByLetters(inputBox.value).forEach(word => {
        let child = document.createElement("h7")
        child.setAttribute("id", word)
        child.innerHTML = word
        
        listField.appendChild(child)
    })
}