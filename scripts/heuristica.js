
let lista_cerrada = []
let lista_abierta = []
let lista_vecinos = []
let Fin = false

function sacar_fn_bajo( ) {

  let fn_bajo = 15000;
  let nodo_bajo = lista_abierta[0];
  
  for(let nodo of lista_abierta) {
    if ( nodo.F < fn_bajo ) {
      fn_bajo = nodo.F
      nodo_bajo = nodo
    }
  }

  let eliminado = lista_abierta.indexOf(nodo_bajo)
  let new_lista_abierta = []

  for (let index = 0; index < lista_abierta.length; index++) {
    if (index != eliminado) {
      new_lista_abierta.push(lista_abierta[index])
    }
  }

  lista_abierta = new_lista_abierta

  return nodo_bajo
}

function revisar_hijos( Padre ) {

  let Revisados = []

  if (Padre.childs.length > 0) {
    Padre.childs.forEach(hijo => {
      if ( !hijo.revisado ) {
        Revisados.push( hijo )
      }
    });
  }
  
  return Revisados
}

function llamar_A_estrella( raiz ) {
  let limit = 50
    let sum = 0
    for (let index = 0; index < data.length; index++) {
      let count = busqueda_A_estrella( raiz )
      sum += count
      if (sum >= limit) {
        break
      }
    }
}

function busqueda_A_estrella( raiz ) {

  // Declarar e inicializar listas abierta y cerrada
  lista_cerrada = []
  lista_abierta = []
  lista_vecinos = []

  lista_cerrada.push( raiz )
  let nodo;
  let Nodo_Final_En_Lista_Cerrada;
  let Iteraciones = 0
  // Mientras la lista abierta no esté vacía

  do {

    Iteraciones += 1

    // Sacar nodo con f(n) más bajo
    nodo = lista_cerrada[ lista_cerrada.length - 1 ]

    // Si el nodo es solución, retornar el nodo
    // Si el nodo es fin de rama o su frecuencia es menor a la de sus hijos

    let hijos_no_revisados = revisar_hijos( nodo )

    hijos_no_revisados.forEach(hijo => {
      if ( !lista_cerrada.includes(hijo) ) {
        lista_vecinos.push(hijo)
      }
    })

    lista_vecinos.forEach(hijo => {
      hijo.G = nodo.G + 1
      hijo.H = A_words[hijo.data]
      hijo.F = hijo.G + hijo.H
      hijo.parent = nodo
    })

    lista_vecinos.forEach(vecino => {

      if ( !lista_abierta.includes(vecino) && !lista_cerrada.includes(vecino)) {
        lista_abierta.push(vecino)
      } 

    })

    if ( lista_abierta.length > 0 ) {
      Fin = false

      Cerrado = sacar_fn_bajo( lista_abierta )
      lista_cerrada.push( Cerrado )
    } else {
      Fin = true
    }

    Nodo_Final_En_Lista_Cerrada = 
      blind_words.includes(nodo.data) && 
      lista_cerrada.includes(nodo) && 
      !nodo.revisado &&
      lista_vecinos.length == 0

    lista_vecinos = []

    if (Fin) {
      if ( Nodo_Final_En_Lista_Cerrada ) {
        nodo.revisado = true
        recommend(nodo.data)
        nodes.update({id: nodo.id, label: nodo.data, group: "meta"})
      }
      return 1
    }

  } while ( !Nodo_Final_En_Lista_Cerrada )

  if ( Nodo_Final_En_Lista_Cerrada ) {
    nodo.revisado = true

    recommend(nodo.data)
    nodes.update({id: nodo.id, label: nodo.data, group: "meta"})
    return 1
  } else {
    return 0
  }
}