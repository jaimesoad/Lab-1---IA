"use strict"

class node {
    constructor() {
        this.parent = null
        this.value  = ''
        this.childs = []
    }
}

class tree {
    #root  = node
    #queue = []
    #depth = 1
    #value = ''

    constructor(value = "") {

        this.#root       = new node
        this.#root.value = value
        this.#value      = value
        this.#queue.push(this.#root)


    }

    addChilds(letters) {
        let parent = this.#queue.splice()
        
        for(let letter of letters) {
            let newChild = new node

            newChild.parent = parent
            newChild.value  = letter

            this.#queue.push(newChild)
        }
    }

    get root() {
        return this.#root
    }
    get depth() {
        return this.#depth
    }
    get queue() {
        return this.#queue
    }
    get value() {
        return this.#value
    }
}

