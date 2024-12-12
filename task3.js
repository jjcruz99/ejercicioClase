export function ageCalculator(Pyear,Pmonth,Pday) {
  let year = Pyear
  let month = Pmonth - 1
  let day = Pday

  const fechaActual = new Date();
  const fechanacimiento = new Date(year,month,day);
  let edad = fechaActual.getFullYear() - fechanacimiento.getFullYear()
  let difMes = fechaActual.getMonth() - fechanacimiento.getMonth()
 
  if (difMes < 0 || difMes === 0 && fechaActual.getDate() < fechanacimiento.getDate() ){
    edad -= 1
  }
  return edad
}

//console.log(ageCalculator(2001,12,25))