const { threadId } = require("worker_threads")

class poligono {
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    get area(){ // Símbolo # significa que é visivel somente na classe
        return this.#calcularArea()
    }

    $calcularArea(){
        return this.altura * this.largura
    }
}

// criar objeto
let poligono = new poligono (50, 60)
console.log(poligono.area)

//codigo abixo irá dar erro pq ñ é possível acessar #calcularArea
console.log(poligono.#calcularArea)
