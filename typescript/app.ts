(() => {
    
    /* console.log('Inicio')

    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('se termino el timeout')
        }, 1000);
    })
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err))
    

    console.log('fin') */

    const retirarDinero = (monto: number): Promise<number> => {  // Promise<number> especificamos el tipo de dato que va a devolver
        let dineroActual = 1000
        return new Promise((resolve, reject) => {
            if (monto > dineroActual) {
                reject('No hay suficientes fondos')
            } else {
                dineroActual -= monto
                resolve( dineroActual)
            }
        })
        
    }

    retirarDinero(5000)
        .then(montoActual => console.log(`Me quedan ${montoActual}`))
        .catch(err => console.warn(err))

})();
    


