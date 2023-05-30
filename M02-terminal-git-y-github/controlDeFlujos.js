//Código Condicional - comparación booleana

function viajar(destino) {
    if (destino === "Brasil") {
        console.log("Gire a la IZQUIERDA");
    } else if (destino === "Argentina") {
        console.log("Gira a la DERECHA");
    } else {
        console.log("Nos PERDIMOS");
    }
}

viajar('Colombia');


function puedeManejar (edad) {
   if (edad >= 18) {
    console.log(true);
   } else {
    console.log(false);
   }
}

puedeManejar(27);