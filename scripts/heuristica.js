
/*  Debido a que el costo de ir de un nodo a otro puede verse como escribir una letra,
    g(n) = g( n - 1 ) + 1 para g(0) = 0
    Luego, obteniendo la frecuencia de cada nodo de nuestro espacio de estados para la letra s,
    f(n) = Promedio de frecuencias de los nodos hijos o la frecuencia del nodo
*/

function busqueda_A_estrella(Tree) {

  // Declarar e inicializar listas abierta y cerrada
  let lista_cerrada = []
  let lista_abierta = [Tree.raiz]

  // Mientras la lista abierta no esté vacía
  while (lista_abierta != []) {

    // Sacar nodo con f(n) más bajo
    let nodo = sacar_fn_bajo( lista_abierta )

    // Añadir nodo a lista cerrada
    lista_cerrada.push( nodo )

    // Si el nodo es solución, retornar el nodo
      // Si el nodo es fin de rama o su frecuencia es menor a la de sus hijos
      if ( nodo.childs == [] ) {
        recommend(nodo.data)
        nodo.revisado = true
      } 

    // Para cada sucesor del nodo
    nodo.childs.forEach(child => {
      
      this.F_n = this.G_n + this.H_n

    });
  }

}