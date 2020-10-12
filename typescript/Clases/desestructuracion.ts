(() => {
    

    const avenger = {
        nombre: 'Steve',
        clave: 'CA',
        poder: 'Super Humano'
    } 

    const extraer = ({nombre, poder}: any) => {
        //const {nombre, clave, poder} = avenger
        
        console.log(nombre)
        //console.log(clave)
        console.log(poder)

    }

    extraer(avenger)

    const heroes: string[] = ['Thor', 'Iroman', 'Spiderman']

    const [thor, iroman, spiderman] = heroes
    console.log('spiderman, thor, iroman')
    
    
})();
    


