"use strict"

// Filtra todas las palabras en el arreglo que comiencen con ciertos caracteres.
const filterByLetters = input => data.filter(word => word.startsWith(input))

function loadWords() {
    let letters = []

    listField.innerHTML = ''
    if(inputBox.value == "") return

    filterByLetters(inputBox.value).forEach(word => {
        let child = document.createElement("h7")
        child.setAttribute("id", word)
        child.innerHTML = word
        
        listField.appendChild(child)

        // Se añade los hijos a los nodos.
        for(let i in alfabeto) {
            console.log(`${inputBox.value}${i}`)
            if(word.startsWith(`${inputBox.value}${i}`)) {
                letters.push(i)
            }
        }

        wordList.addChilds(letters)
    })
}