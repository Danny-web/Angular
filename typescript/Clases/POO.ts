(() => {
   
  class Avenger {

    /* nombre: string
    equipo: string
    nombreReal: string
    puedePelear: boolean
    peleasGanadas: number

    constructor(name:string, team: string, realName:string, canFight: boolean, fightsWon: number) {
      this.nombre = name
      this.equipo = team
      this.nombreReal = realName
      this.puedePelear = canFight
      this.peleasGanadas = fightsWon
    } */

    // Simplificacion 
    constructor(public nombre: string,public equipo: string,public nombreReal?: string,
    public puedePelear?: boolean,public peleasGanadas?: number) { }
  }

  const heroe = new Avenger('Iroman','iroman','Tony',true,20)
  console.log(heroe)
})();
    


