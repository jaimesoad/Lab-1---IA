"use strict"

//definimos una función para obtener solo las palabras que se van a recomendar
const filtro = (palabras) => {
    let recomendacion = []
    
    palabras.forEach(palabra => {
        if (!palabras[palabra] == 13257.31){
            recomendacion.push(palabra)
        }
    });
    return recomendacion
}

function buscarProfundidad (arbol = Tree) {
    //función encargada de buscar por profundidad palabras a recomendar
    let data_recomendada //arreglo que tendrá los nodos meta
    let pila = [] //pila para manejar la búsqueda

    data_recomendada = filtro( A_words.keys() )

    //ingresamos el nodo raíz a la pila para empezar la búsqueda
    console.log(arbol.raiz)
    pila.push(arbol.raiz)

    while (pila.length > 0) {
        console.log(pila)
        //sacamos al nodo que esta al final de la pila
        let nodo = pila.pop()

        //agregamos los nodos hijos del nodo a la pila
        nodo.childs.forEach(hijo => {
            pila.push(hijo)
        })

        //evaluamos que si el nodo es una respuesta
        if (data_recomendadas(nodo.data)) {
            //si lo es recomendamos la palabra
            recommend(nodo.data)
        }
    }
}

// function llamarProfundidad (arbol = Tree) {
//     let limit = 50
//     let sum = 0
//     for (let index = 0; index < blind_words.length; index++) {
//         let count = buscarProfundidad(arbol)
//         sum += count
//         if (sum >= limit) {
//             break
//         }
//     }
// }

// function revisar_hijos( Padre ) {

//     let Revisados = []
//     Padre.childs.forEach(hijo => {
//       if ( !hijo.revisado ) {
//         Revisados.push( hijo )
//       }
//     });
  
//     return Revisados
//   }

// function buscarProfundidad (arbol = Tree){
//     //función encargada de buscar por profundidad palabras a recomendar
//     let data_recomendada //arreglo que tendrá los nodos meta
//     let pila = [] //pila para manejar la búsqueda

//     // data_recomendada = filtro(blind_words)

//     //ingresamos el nodo raíz a la pila para empezar la búsqueda

//     pila.push(arbol.raiz)

//     while (pila.length > 0) {
    
//         //sacamos al nodo que esta al final de la pila
//         let nodo = pila.pop()

//         //agregamos los nodos hijos del nodo a la pila

//         let hijos_no_revisados = revisar_hijos( nodo )

//         hijos_no_revisados.forEach(hijo => {
//             pila.push(hijo)
//         })

//         //evaluamos que si el nodo es una respuesta
//         if ( blind_words.includes( nodo.data ) && !nodo.revisado ) {

//             nodo.revisado = true

//             recommend(nodo.data)

//             nodes.update({id: nodo.id, label: nodo.data, group: "meta"})

//             return 1
//         }
//     }
//     return 0
// }

