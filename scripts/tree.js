"use strict"

const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

var Data_Vista = []

class Node {

    constructor(parent = null, data = '', level = 1) {
        this.id = cyrb53(data, 0)
        this.parent = parent
        this.data   = data
        this.childs = []
        this.level = level
        this.vis = {id: cyrb53(data, 0), label: data, group: this.level}
    }

    // Función de Recursividad
    addChilds() {

        // Caso Base
        if ( this.data.length == 5 ) {return}

        // Caso Recursivo
        let childsLevel = this.level + 1
        let childsParent = this
        
        for (let index = 0; index < data.length; index++) {

            if (data[index].length >= ( this.data.length + 1 ) && data[index].slice(0, this.data.length) == this.data) {
                
                let childData;
                if ( this.data.length == data[index].length) {
                    childData = data[index].slice(0, this.data.length) 
                } else {
                    childData = data[index].slice(0, this.data.length + 1) 
                }


                if ( !Data_Vista.includes(childData) ) {

                    Data_Vista.push(childData)
                    let child = new Node(this, childData, childsLevel)
                    this.childs.push( child )

                }
            } 
        }

        this.childs.forEach(child => {
            child.addChilds()
        })

    }

    Data_Pre_Orden(Dataset) {
        // console.log("Estoy en el nodo: ")
        // console.log(this.vis)
        // console.log("El dataset es:")
        // console.log(Dataset)
        // console.log("_                     _")

        // for (let index = 0; index < this.childs; index++) {
        //     console.log("Hijo Nº" + (index + 1))
        //     console.log(this.childs[index].vis)
        // }

        Dataset.push({id: this.id, label: this.data})
        if (this.childs.length >= 1) {
            this.childs.forEach(child => {
                // console.log(child.vis)
                Dataset = child.Data_Pre_Orden(Dataset)
            })
        }
        return Dataset
    }

    Edges_Pre_Orden(Dataset) {
        if (this.childs.length >= 1) {

            this.childs.forEach(child => {
                Dataset.push({from: this.id, to: child.id})
            })

            this.childs.forEach(child => {
                Dataset = child.Edges_Pre_Orden(Dataset)
            })

        }
        return Dataset
    }

}

class Tree {

    constructor(Inicio) {
        this.raiz = new Node(null, Inicio, 1)
    }

    CreateTree() {
        this.raiz.addChilds()
    }

    RenderTree() {
        // create an array with nodes
    // var nodes = new vis.DataSet([
    //     {id: 1, label: 'Node 1'},
    //     {id: 2, label: 'Node 2'},
    //     {id: 3, label: 'Node 3'},
    //     {id: 4, label: 'Node 4'},
    //     {id: 5, label: 'Node 5'}
    // ]);

    // create an array with edges
    // var edges = new vis.DataSet([
    //     {from: 1, to: 3},
    //     {from: 1, to: 2},
    //     {from: 2, to: 4},
    //     {from: 2, to: 5}
    // ]);

    let DataSet = []
    var NodesData = this.raiz.Data_Pre_Orden(DataSet)

    var nodes = new vis.DataSet(NodesData)

    DataSet = []
    var EdgesData = this.raiz.Edges_Pre_Orden(DataSet)

    var edges = new vis.DataSet(EdgesData)

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };

    // initialize your network!
    // var network = new vis.Network(container, data, options);

    const options = {
        "nodes": {
          "borderWidth": null,
          "borderWidthSelected": null,
          "opacity": null,
          "font": {
            "strokeWidth": 2
          },
          "physics": false,
          "size": null
        },
        "edges": {
          "selfReferenceSize": null,
          "selfReference": {
            "angle": 0.7853981633974483
          },
          "smooth": false
        },
        "layout": {
          "hierarchical": {
            "enabled": true,
            "levelSeparation": 400,
            "nodeSpacing": 20,
            "direction": "LR",
            "sortMethod": "directed"
          }
        },
        "interaction": {
          "dragNodes": true
        },
        "physics": {
          "enabled": false
        }
      }

    var network = new vis.Network(container, data, options);

    network.setOptions(options);
    }
}
