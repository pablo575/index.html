 function pacientes (){
    let = "num,num1,num2,num3,num4";
    num = document.getElementById("agregar");
    num1 = document.getElementById("actualizar");
    num2 = document.getElementById("eliminar");
    num3 = document.getElementById("estadistica");
    num4 = document.getElementById("salir");
}
 
switch (pacientes){
  case "num":
      if ("num" == "Agregar"){
          let dato = prompt("Agregar Datos");
      }else{
          alert("gracias por venir");
      }
  case "num1":
      if ("num1" == "Actualizar"){
          prompt("Actualiza Datos");
       }else{
          alert("gracias por venir");
       }
  case "num2":
       if ("num2" == "Eliminar"){
          prompt("Eliminar Datos");
      }else{
          alert("gracias por venir");
      }
  case "num3":
       if ("num3" == "Estadistica"){
       prompt("Estadistica Datos");
      }else{
      alert("gracias por venir");
         }
         default:
  case "num4":
      if ("num4" == "Salir"){
      prompt("Salir Datos");
      }else{
           alert("gracias por venir");
      }
}