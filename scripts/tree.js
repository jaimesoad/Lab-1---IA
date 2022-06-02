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
        this.frec = datos[data] || 0
        this.parent = parent
        this.data   = data
        this.childs = []
        this.level = level
        this.vis = {id: cyrb53(data, 0), label: data, group: this.level}
    }

    // Función de Recursividad
    addChilds() {

        // Caso Base
        if ( this.data.length == 5 ) {
            console.log(this.frec)
            return
        }

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

        Dataset.push(this.vis)
        if (this.childs.length >= 1) {
            this.childs.forEach(child => {
                Dataset = child.Data_Pre_Orden(Dataset)
            })
        }
        return Dataset
    }

    Edges_Pre_Orden(Dataset) {
        if (this.childs.length >= 1) {

            this.childs.forEach(child => {
                Dataset.push({from: this.id, to: child.id, label: String.toString(this.frec)})
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
        nodes:{
            borderWidth: 1,
            borderWidthSelected: 2,
            brokenImage:undefined,
            chosen: true,
            color: {
              border: '#696969',
              background: '#FFFFFF',
              highlight: {
                border: '#0000DD',
                background: '#fefefe'
              },
              hover: {
                border: '#0000DD',
                background: '#fefefe'
              }
            },
            opacity: 1,
            fixed: {
              x:false,
              y:false
            },
            font: {
              color: '#000000',
              size: 16, // px
              face: 'arial',
              background: 'none',
              strokeWidth: 2, // px
              strokeColor: '#00000',
              align: 'center',
              multi: false,
              vadjust: 0,
              bold: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'bold'
              }
            },
            // group: undefined,
            heightConstraint: false,
            hidden: false,
            icon: {
              face: 'FontAwesome',
            //   code: undefined,
            //   weight: undefined,
              size: 50,  //50,
              color:'#2B7CE9'
            },
            // image: undefined,
            // imagePadding: {
            //   left: 0,
            //   top: 0,
            //   bottom: 0,
            //   right: 0
            // },
            // label: undefined,
            labelHighlightBold: true,
            // level: undefined,
            mass: 1,
            physics: true,
            scaling: {
              min: 10,
              max: 30,
              label: {
                enabled: false,
                min: 14,
                max: 30,
                maxVisible: 30,
                drawThreshold: 5
              },
              customScalingFunction: function (min,max,total,value) {
                if (max === min) {
                  return 0.5;
                }
                else {
                  let scale = 1 / (max - min);
                  return Math.max(0,(value - min)*scale);
                }
              }
            },
            shadow:{
              enabled: false,
              color: 'rgba(0,0,0,0.5)',
              size:10,
              x:5,
              y:5
            },
            shape: 'ellipse',
            shapeProperties: {
              borderDashes: false, // only for borders
              borderRadius: 6,     // only for box shape
              interpolation: false,  // only for image and circularImage shapes
              useImageSize: false,  // only for image and circularImage shapes
              useBorderWithImage: false,  // only for image shape
              coordinateOrigin: 'center'  // only for image and circularImage shapes
            },
            size: 25,
            // title: undefined,
            // value: undefined,
            widthConstraint: false,
            // x: undefined,
            // y: undefined
          },
        edges: {
          width: 2,
        //   selfReferenceSize: null,
          selfReference: {
            angle: 0.7853981633974483
          },
          smooth: false
        },
        layout: {
          hierarchical: {
            enabled: true,
            levelSeparation: 400,
            nodeSpacing: 20,
            direction: "LR",
            sortMethod: "directed"
          }
        },
        interaction: {
          dragNodes: true
        },
        physics: {
          enabled: false
        }
      }

    var network = new vis.Network(container, data, options);

    network.setOptions(options);
    }
}
