"use strict"

//definimos una función para obtener solo las palabras que se van a recomendar
const filtro = (palabras) => {
    let recomendacion = []
    
    palabras.forEach(palabra => {
        if (palabras[palabra] == 0){
            recomendacion.push(palabra)
        }
    });
    return recomendacion
}

function buscarProfundidad (arbol = Tree){
    //función encargada de buscar por profundidad palabras a recomendar
    let data_recomendada //arreglo que tendrá los nodos meta
    let pila = [] //pila para manejar la búsqueda

    data_recomendada = fitro(datos)

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