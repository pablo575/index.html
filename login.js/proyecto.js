 function pacientes (){
        let num = document.getElementById("agregar");  
        let num1 = document.getElementById("actualizar");
        let num2 = document.getElementById("eliminar");
        let num3 = document.getElementById("estadistica");
        let num4 = document.getElementById("salir");
}
 
switch (pacientes()){
    case "num":
      let datoAgregar = prompt("Agregar Datos");

         if (datoAgregar == "agregar"){
            let agg = prompt(" ");
         }
         else {
             alert("gracias por venir");
         }
         break;
    case "num1":
       let datoActualizar = prompt("Actualiza Datos");
        if (datoActualizar == "Actualizar"){
           
         }else{
            alert("gracias por venir");
         }
         break;
    case "num2":
       let datoEliminar = prompt("Eliminar Datos");
         if (datoEliminar == "Eliminar"){
          
        }else{
            alert("gracias por venir");
        }
        break;
    case "num3":
       let datoEstadistica = prompt("Estadistica Datos");
         if (datoEstadistica == "Estadistica"){
        }else{
        alert("gracias por venir");
           }
        break;
    case "num4":
        let datoUsuario = prompt("Salir Datos");
        if (datoUsuario === "Salir"){
            alert("gracias");
        }else{
            alert("estas mal chico")
        }
        break;
  }

  