"use strict"

class node {
    constructor() {
        this.parent = null
        this.value  = ''
        this.childs = {}
    }
}

class tree {
    #root   = node
    #leaves = {}
    #depth  = 1
    #value  = ''

    constructor(value = "") {
        value = value.toUpperCase()

        this.#root       = new node
        this.#root.value = value
        this.#value      = value

    }

    get root() {
        return this.#root
    }
    get depth() {
        return this.#depth
    }
    get leaves() {
        return this.#leaves
    }
    get value() {
        return this.#value
    }
}

