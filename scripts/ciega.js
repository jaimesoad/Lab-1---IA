"use strict"

var pila

function buscarProfundidad ( Arbol ) {
    //función encargada de buscar por profundidad palabras a recomendar
    pila = [] //pila para manejar la búsqueda
    let nodo
    let count = 0
    //ingresamos el nodo raíz a la pila para empezar la búsqueda

    pila.push( Arbol.raiz )

    while (pila.length > 0) {
        //sacamos al nodo que esta al final de la pila
        nodo = pila.pop()

        //agregamos los nodos hijos del nodo a la pila

        if (nodo.childs.length > 0) {
            let nodos_hijos = nodo.childs
    
            nodos_hijos.forEach(hijo => {
                pila.push(hijo)
            })
        }
        
        //evaluamos que si el nodo es una respuesta
        if ( data.includes(nodo.data) ) {
            //si lo es recomendamos la palabra
            recommend(nodo.data)
            nodes.update({id: nodo.id, label: nodo.data, group: "meta"})
            count += 1

            if (count >= 50) {
                break
            }

        }
    }
}