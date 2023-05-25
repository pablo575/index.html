 function pacientes(){
    let = num, num1,num2,num3,num4
    num = document.getElementById(agregar).Value;
    num1 = document.getElementById(actualizar).Value;
    num2 = document.getElementById(eliminar).Value;
    num3 = document.getElementById(estadistica).Value;
    num4 = document.getElementById(salir).Value;

    switch(pacientes){
        case "num":
        
            if (num === "Agregar"){
                let dato = prompt("Agregar Datos");
            }else{
                alert("gracias por venir");
            }
        case "num1":
            if (num1 == "Actualizar"){
                prompt("Actualiza Datos");
             }else{
                alert("gracias por venir");
             }
        case "num2":
             if (num2 == "Eliminar"){
                prompt("Eliminar Datos");
            }else{
                alert("gracias por venir");
            }
        case "num3":
             if (num3 == "Estadistica"){
             prompt("Estadistica Datos");
            }else{
            alert("gracias por venir");
               }
               default:
        case "num4":
            if (num4 == "Salir"){
            prompt("Salir Datos");
            }else{
                 alert("gracias por venir");
            }
    }
}
