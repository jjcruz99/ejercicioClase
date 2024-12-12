

export class FriendAge {
    constructor (nombre,Paño,Pmes,Pdia){
        this.name = nombre
        this.year = Paño
        this.month = Pmes - 1
        this.day = Pdia
    }
    returnAge(){
        const fechaActual = new Date();
        const fechanacimiento = new Date(this.year,this.month,this.day);
        let edad = fechaActual.getFullYear() - fechanacimiento.getFullYear()
        let difMes = fechaActual.getMonth() - fechanacimiento.getMonth()
        
        if (difMes < 0 || difMes === 0 && fechaActual.getDate() < fechanacimiento.getDate() ){
          edad -= 1
        }
        return this.name + " is " + edad + " today!"
    }
}

//const amigo = new FriendAge("John",2000,6,1)
//console.log(amigo.returnAge())