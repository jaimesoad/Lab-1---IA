function sacar_fn_bajo( Abierta ) {

  let fn_bajo = 15000;
  let nodo_bajo;
  
  for(let nodo of Abierta) {
    if ( nodo.F < fn_bajo ) {
      fn_bajo = nodo.F
      nodo_bajo = nodo
    }
  }

  let index = Abierta.indexOf(nodo_bajo)
  let newAbierta = Abierta.splice(index, index + 1)
  return [newAbierta, nodo_bajo]
}

function revisar_hijos( Padre ) {

  let Revisados = []
  Padre.childs.forEach(hijo => {
    if ( !hijo.revisado ) {
      Revisados.push( hijo )
    }
  });

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
  let lista_cerrada = []
  let lista_abierta = []
  let lista_vecinos = []

  lista_cerrada.push( raiz )

  // Mientras la lista abierta no esté vacía
  do {

    console.log("||||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("Iteración Nº")
    console.log(lista_abierta)
    console.log(lista_cerrada)

    // Sacar nodo con f(n) más bajo
    let nodo = lista_cerrada[ lista_cerrada.length - 1 ]

    // Si el nodo es solución, retornar el nodo
      // Si el nodo es fin de rama o su frecuencia es menor a la de sus hijos
    
    let hijos_no_revisados = revisar_hijos( nodo )

    console.log("-----------------------------------------")
    console.log(hijos_no_revisados)
    console.log(nodo)

    if ( hijos_no_revisados.length == 0 ) {

      nodo.revisado = true

      if ( blind_words.includes(nodo.data) ) {
        recommend(nodo.data)
        nodes.update({id: nodo.id, label: nodo.data, group: "meta"})
        return 1
      }

    } else {

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
  
      lista_vecinos = []

    }

    Open_Closed = sacar_fn_bajo( lista_abierta )

    Abierta = Open_Closed[0]
    Cerrado = Open_Closed[1]

    lista_cerrada.push( Cerrado )

  } while ( lista_abierta.length > 0 )

  return 0
}