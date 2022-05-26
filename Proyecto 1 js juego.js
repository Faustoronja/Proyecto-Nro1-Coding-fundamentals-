alert("Bienvenido a la aventura de zuganda")
var nombre = prompt("Ingrese su nombre")

console.log(`Bienvenido ${nombre}`)
var decision = prompt("Te gustaria comenzar esta aventura,si o no?").toLowerCase()
console.log(decision)
if (decision == "si" ) {
    alert("Okay, tu mapa esta cargando")
    alert("Te despiertas en un bote inflable en el medio del oceano y lo unico que tienes disponible son los remos y una botella de agua hasta la mitad")
    alert("Ves a la lejania una isla")
    var decisionoceano = prompt("Tienes dos opciones 1)quedarte en el bote o 2)remar hacia la isla")
    switch (decisionoceano) {
        case "1":
        case "quedarte en el bote":
            alert("Te quedas en el bote y mueres a causa de tiburones")
     break;
        case "2":
        case "remar hacia la isla":
            alert("Remas hacia la isla y puedes elegir entre tres caminos 1)adentrarte en la selva 2)rodear la isla caminando por la arena o 3)quedarte en la orilla y hacer una señal de SOS con piedras")
            var decisionislaprimera = prompt("cual es tu decision")
            switch (decisionislaprimera) {
            case "1":
            case "adentrarte en la selva":
                alert("Te adentras unos pocos metros y ves que hay una division de caminos ")
                var decisionselva = prompt("1)el camino izquierdo y 2)el derecho")
                switch (decisionselva) {
                    case "1":
                    case "el camino izquierdo":    
                        alert("Al tomar este camino te das cuenta de que esta anocheciendo y estas a contratiempo para buscar refugio")
                        alert("pasan 20 minutos")
                        for (let endex = 1; endex < 21; endex++) {
                            console.log(endex)
                            
                        }
                    var anochecer = prompt("y tienes que tomar una decision rapida 1)duermes dentro de un gran arbol o 2)haces una fogata")
                    switch (anochecer) {
                        case "1":
                        case "duermes dentro de un gran arbol":
                            alert("te levantas al otro dia y a la luz del dia ves un helicoptero que viene en tu rescate")    
                            break;
                        case "2":
                        case "haces una fogata":   
                        alert("Prendes una fogata y llamas la atencion de una manada de panteras, inevitablemente mueres")
                        break;
                        default:alert("Esta decision no es valida")
                            break;
                    }
                    break;
                    case "2":
                    case "el derecho":
                     alert("En este camino das 5 pasos")  
                     for (let ondex = 1; ondex < 6; ondex++) {
                         console.log(ondex)
                         
                     }
                     alert("Y encuentras una fruta la cual no sabes que es y la comes por que tienes mucha hambre") 
                     alert("Das 10 pasos mas") 
                     for (let undex = 1; undex < 11 ; undex++) {
                         console.log(undex)
                         
                     }
                     alert("Te desmayas y mueres ya que la fruta era venenosa")
                    break;        
                    default:alert("Esta decision no es valida")
                        break;
                }

                    break;
            case "2":
            case "rodear la isla caminando por la arena":
                alert("Rodeas la isla caminando y luego de varias horas llegas a una ciudad en cual no entienden tu idioma")
                alert("Intentas comunicarte en un aeropuerto y el jefe de seguridad quiere retenerte por que piensa que insultaste a su madre")
                var decisionciudad = prompt("Tienes dos opciones 1)pasar la noche en la carcel 2)intentar llamar a tu abogado")
             switch (decisionciudad) {
                 case "1":
                 case "pasar la noche en la carcel":
                     alert("Pasas la noche en la carcel pero no puedes dormir por que tu compañero de celda te da miedo y cuentas las horas")
                    for (let index = 1; index < 13 ; index++) {
                        console.log(`pasaron ${index} horas`)
                        
                    }
                    alert("Luego de 12 horas eres liberado te traen un traductor con el cual puedes concluir la comunicacion y finalmente puedes volver a tu hogar")
                     break;
                 case "2":
                 case "intentar llamar a tu abogado":
                  alert("hablas con tu abogado y te soluciona las cosas ,pronto eres trasladado de nuevo a tu hogar")
             
                 default: alert("Esta decision no es valida")
                     break;
             }
                break;
            case "3":
            case "quedarte en la orilla y hacer una señal de SOS con piedras":
                alert("Te quedas en la orilla y mueres a manos de una tribu canibal originaria de ahí")
                break;
                default: alert("Tu decision no es valida")
                    break;
            }

     break;
        default: alert("tu decision no es valida")
            break;
    }
    
    
} else {
    alert("Mmm que lastima, nos vemos la proxima!!")
}

// alert("Te despiertas en un bote inflable en el medio del oceano y lo unico que tienes disponible son los remos y una botella de agua hasta la mitad")
// alert("Ves a la lejania una isla")
// var decisionoceano = prompt("Tienes dos opciones 1)quedarte en el bote o 2)remar hacia la isla")
// if(decisionoceano === "quedarte en el bote" && decisionoceano === "1"){
//     alert("Te quedas en el bote y mueres a causa de tiburones")
// }else if(decisionoceano === "remar hacia la isla" && decisionoceano === "2") {
//     alert("Remas hacia la isla")
    
// } else {alert("Tu decision no es valida")
//     }
// switch (decisionoceano) {
//     case "1":
//     case "quedarte en el bote":
//         alert("Te quedas en el bote y mueres a causa de tiburones")
//  break;
//     case "2":
//     case "remar hacia la isla":
//         alert("Remas hacia la isla")
//  break;
//     default: alert("tu decicion no es valida")
//         break;
// }


