(() => {
  
  interface heroe {
    nombre: string
    edad: number
    poder ?: string // opcional
  }
  
  const enviarMision = (hero: heroe) => {
    console.log(`Enviando a ${hero.nombre} a la misión`)
  }

  const Spiderman: heroe = {
    nombre: 'Spiderman',
    edad: 22
  }

  enviarMision(Spiderman)

})();
    


