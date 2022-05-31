"use strict"

class Node {
    constructor(parent = null, data = '', level = 1) {
        this.parent = parent
        this.data   = data
        this.childs = []
        this.level = level
    }

    // Función de Recursividad
    addChilds() {

        // Caso Base
        if ( this.level == 5 ) {return}

        // Caso Recursivo
        let childsLevel = this.level + 1
        let childsParent = this
        
        let childsData = []
        for (let index = 0; index < data.length; index++) {

            let child;
            if (len(data[index]) >= childsLevel) {
                
                let childData = data[index].slice(0, childsLevel)

                if ( !childsData.includes(childData) ) {
                    childsData.push(childData)
                    child = new Node(this, childData, childsLevel)
                    this.childs.push( child )
                }
            }
        }

        this.childs.forEach(child => { child.addChilds() });
    }
}

class Tree {

    constructor() {
        this.raiz = new Node(null, "s", 1)
    }

    GenerateTree() {
        this.raiz.addChilds()
    }
}

