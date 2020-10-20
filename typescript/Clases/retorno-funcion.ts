(() => {
  const sumar = (a: number, b: number): number => a + b

  const nombre = (): string => 'Hola fernando'

  const obtenerSalario = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve('Danny')
    })
  }

  obtenerSalario().then(a => console.log(a))
  
   
})();
    


