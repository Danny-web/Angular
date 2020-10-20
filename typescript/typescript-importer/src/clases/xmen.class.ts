function imprimirConsola(constructorClase: Function) {
  console.log(constructorClase)
  
}

@imprimirConsola  // Decorador funion que expande la clase

export class Xmen {
  constructor(public nombre: string,
    public poder: string) { }
  
  imprimir() {
    console.log(`${this.nombre} - ${this.poder}`)
  }
}

