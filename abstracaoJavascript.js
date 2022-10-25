//definir
class Parafuso { // Superclasse  - Abstrata
    constructor(){
        if (this.constutor ===  Parafuso)
        throw new error('Classe Abstrata não pode ser instanciada')
    }
    get Tipo(){
        throw new error('Método "Get Tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constutor () {
        super ()
    }
    get Tipo (){
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constutor () {
        super ()
    }
    get Tipo (){
        return 'philips'
    }
}

class Allen extends Parafuso {
    // criar e usar
    new Parafuso() // classe nao pode ser instanciada
    let fenda = new Fenda()
    let philips = new Philips()
    let Allen = new Allen() //erro metodo get Tipo "Alle" preciso ser implementado 
    
    console.log(fenda.Tipo, philips.Tipo, Allen.Tipo)
    //acima só existe parafuso se ele for algum tipo especifico
    //Fenda, /philips ou Allen


}