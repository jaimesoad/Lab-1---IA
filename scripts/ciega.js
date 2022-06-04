"use strict"

//definimos una función para obtener solo las palabras que se van a recomendar
// const filtro = (palabras) => {
//     let recomendacion = []
    
//     palabras.forEach(palabra => {
//         if (palabras[palabra] == 0){
//             recomendacion.push(palabra)
//         }
//     });
//     return recomendacion
// }

function llamarProfundidad (arbol = Tree) {
    let limit = 50
    let sum = 0
    for (let index = 0; index < blind_words.length; index++) {
        let count = buscarProfundidad(arbol, blind_words[index])
        sum += count
        if (sum >= limit) {
            break
        }
    }
}

function buscarProfundidad (arbol = Tree, meta){
    //función encargada de buscar por profundidad palabras a recomendar
    let data_recomendada //arreglo que tendrá los nodos meta
    let pila = [] //pila para manejar la búsqueda

    // data_recomendada = filtro(blind_words)

    //ingresamos el nodo raíz a la pila para empezar la búsqueda


    pila.push(arbol.raiz)

    while (pila.length > 0) {
    
        //sacamos al nodo que esta al final de la pila
        let nodo = pila.pop()

        //agregamos los nodos hijos del nodo a la pila
        nodo.childs.forEach(hijo => {
            pila.push(hijo)
        })

        //evaluamos que si el nodo es una respuesta
        if (nodo.data == meta) {
            //si lo es recomendamos la palabra
            recommend(nodo.data)

            nodes.update({id: nodo.id, label: nodo.data, group: "meta"})

            return 1
        }
    }
    return 0
}

