class Atleta {
    peso;
    categoria;

    construtor(peso){
        this.peso = this.peso
    }

    definirCategoria () {
        if (this.peso <= 50){
            this.categoria = 'Infantil'
        }
        else if (this.peso <= 65){
            this.categoria = 'Juvenil'
        }
        else {
            this.categoria = 'Adulto'
        }
    }
} 

class Lutador extends Atleta {
    constructor(){
        super(peso)
    
}

definirCategoria(){
    if (this.peso <= 54){
    this.categoria = 'Pluma'
    }
    else if (this.peso <= 60){
        this.categoria = 'Leve'
    }
    else if (this.peso <= 75){
        this.categoria = 'Meio Leve'
    }
    else {
        this.categoria = 'Pesado'
    }
}
}

//tem uma classe que ira herdar da classe anteriro e ela irá precisar
//reescrever uma parte do codigo (polimorfismos "muitas formas")