import { rollthedice, juegooca} from "./Funcion dado.js";
var tulanzardado = rollthedice(6,1)
var sulanzardado = rollthedice(6,1)
var lanzartercerdado = rollthedice(6,1)
alert("Bienvenido a la aventura de zuganda")
var nombre = prompt("Ingrese su nombre")

console.log(`Bienvenido ${nombre}`)
alert("1)Start")
alert("2)Quit")
var menu = prompt("Cual es tu decision?").toLowerCase()
switch (menu){
    case "1":
    case "start":
var decision = prompt("Te gustaria comenzar esta aventura,si o no?").toLowerCase()

if (decision == "si" ) {
    alert("Okay, tu mapa esta cargando, pequeño disclaimer, las opciones a partir de ahora pueden ser seleccionadas con su numero o tipeadas como estan escritas")
    alert("Te despiertas en un bote inflable en el medio del oceano y lo unico que tienes disponible son los remos y una botella de agua hasta la mitad")
    alert("Ves a la lejania una isla")
    var decisionoceano = prompt("Tienes dos opciones 1)quedarte en el bote o 2)remar hacia la isla").toLowerCase()
    switch (decisionoceano) {
        case "1":
        case "quedarte en el bote":
            alert("Te quedas en el bote y mueres a causa de tiburones")
     break;
        case "2":
        case "remar hacia la isla":
            alert("Remas hacia la isla y puedes elegir entre tres caminos 1)adentrarte en la selva 2)rodear la isla caminando por la arena o 3)quedarte en la orilla y hacer una señal de SOS con piedras")
            var decisionislaprimera = prompt("cual es tu decision?").toLowerCase()
            switch (decisionislaprimera) {
            case "1":
            case "adentrarte en la selva":
                alert("Te adentras unos pocos metros y ves que hay una division de caminos ")
                var decisionselva = prompt("1)el camino izquierdo y 2)el derecho").toLowerCase()
                switch (decisionselva) {
                    case "1":
                    case "el camino izquierdo":    
                        alert("Al tomar este camino te das cuenta de que esta anocheciendo y estas a contratiempo para buscar refugio")
                        alert("pasan 20 minutos")
                        for (let endex = 1; endex < 21; endex++) {
                            console.log(`Pasan ${endex} minutos`)
                            
                        }
                    var anochecer = prompt("y tienes que tomar una decision rapida 1)duermes dentro de un gran arbol o 2)haces una fogata").toLowerCase()
                    switch (anochecer) {
                        case "1":
                        case "duermes dentro de un gran arbol":
                            alert("Te levantas al otro dia y a la luz del dia encuentras un dado de 6 caras")   
                            alert("luego de levantar el dado sigues tu camino y encuentras a Piero el cual te propone un reto")
                            alert("Te dice: si logras sacar un numero mayor al mio con el dado te dare un obsequio")
                        alert(`Tiras tu dado y sacas ${tulanzardado} `)
                        alert(`El tira el suyo y saca ${sulanzardado}`)
                        if (tulanzardado>sulanzardado) {
                            alert("Lanzas un numero mayor que el y te entrega una linterna")
                            alert("Esta linterna estara disponible junto con el resto de objetos con el DLC: Objetos y POO")
                            alert("Por lo tanto no puedes utilizarlos por ahora en tu aventura")
                    var decisiondespuesdeobjetos = prompt ("Igualmente continuas tu aventura y llegas a la entrada de una cueva por lo cual tienes opcion 1)entrar en la cueva o 2)seguir tu camino").toLowerCase()
                        switch (decisiondespuesdeobjetos) {
                            case "1":
                            case "entrar en la cueva":
                                alert("Entras en la cueva ,te resbalas te golpeas en la cabeza y mueres desangrado por una herida")
                                break;
                            case "2":
                            case "seguir tu camino":
                                alert("Sigues tu camino y llegas a un poblado el cual te brinda hogar y te quedas a vivir alli")  
                                break;  
                            default:alert("Esta decision no es valida")
                                break;
                        }                    
                        } else {
                            alert("Pierdes el reto y sigues tu camino")
                    alert("Cuando sigues tu camino decides lanzar tu dado y decides que si sacas mas de 3 trepas un arbol para buscar bananas") 
                    alert(`Tiras los dados y obtienes ${lanzartercerdado}`)
                    if (lanzartercerdado>3) {
                        alert("Trepas y obtienes bananas, lo cual te viene bien para seguir buscando una civilización")
                        alert("luego de unas horas llegas a la orilla de la isla nuevamente y encuentras un barco de pasajeros que te lleva nuevamente a tu hogar")
                    } else {
                        alert("No trepas, por lo tanto sigues tu camino y a los pocos días mueres de hambre")
                    }

                        }
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
                var decisionciudad = prompt("Tienes dos opciones 1)pasar la noche en la carcel 2)intentar llamar a tu abogado").toLowerCase()
             switch (decisionciudad) {
                 case "1":
                 case "pasar la noche en la carcel":
                     alert("Pasas la noche en la carcel pero no puedes dormir por que tu compañero de celda te da miedo y cuentas las horas")
                    for (let index = 1; index < 13 ; index++) {
                        console.log(`pasaron ${index} horas`)
                        
                    }
                    alert("Luego de 12 horas eres liberado te traen un traductor con el cual puedes concluir la comunicacion")
                    alert("El traductor te informa que el jefe de seguridad te reta a un juego de dados")
                    alert("Hay un tablero con seis casillas, de las cuales 5 son carbon y una es la joya ")
                    for (let i = 0; i < 20; i++) {
                        alert("Es tu turno")
                        var tudadojuegooca = rollthedice(6,1)
                        alert(`Lanzas el dado y obtienes ${tudadojuegooca} que equivale a ${juegooca[tudadojuegooca]}`)
                        if (tudadojuegooca == 4) {
                            alert("Como obtienes la joya ganas el juego y eres liberado")
                            alert("Ademas de eso te vuelves millonario empeñando la joya que ganaste")
                            break;
                        }else{
                        alert("Es el turno de el")
                        var sudadojuegooca = rollthedice(6,1)
                        alert(`Lanza el dado y obtiene ${sudadojuegooca} que equivale a ${juegooca[sudadojuegooca]}`)
                        if (sudadojuegooca == 4) {
                            alert("El obtiene la joya y pierdes el juego")
                            alert("Pasas el resto de tu vida en el calabozo de la prision")
                            break;
                        } }
                     }
                     break;
                 case "2":
                 case "intentar llamar a tu abogado":
            var decisioncarcel = prompt("hablas con tu abogado pero te dice que tienes dos opciones 1)esperar a que el viaje hasta alli para ayudarte y 2)inentar escapar").toLowerCase()
                switch (decisioncarcel) {
                    case "1":
                    case "esperar a que el viaje hasta alli para ayudarte":
                        alert("Luego de su viaje el esta aqui para ayudarte y puedes volver a tu hogar")
                        break;
                    case "2":
                    case "intentar escapar":   
                        alert("Intentas escapar y Logras llegar a la avenida principal de la ciudad corriendo")
            var decisionescape = prompt("Se te presentan dos opciones 1)robar una motocicleta y 2)seguir corriendo y a los poco metros ocultarte entre la multitud").toLowerCase()
                switch (decisionescape) {
                    case "1":
                    case "robar una motocicleta":
                        alert("Robas una motocicleta e intetas huir pero chocas a una anciana, te atrapan y pasas el resto de tu vida en la carcel")
                    break;
                    case "2":
                    case "seguir corriendo y a los pocos metros ocultarte entre la multitud":
                        alert("Te ocultas en la multitud y escapas hasta llegar a la orilla de la isla")
                        alert("alli robas un bote y te escapas de la isla pero mueres a manos de los tiburones ya que te quedas sin combustible")
                        break;
                default:alert("Tu decision no es valida")
                        break;
                }    
                        break; 
                    default:alert("Tu decision no es valida")
                        break;
                }

                 break;
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
break;
 case "2":
 case "quit":
     alert ("Hasta luego!")
 break;
 default:
     alert("Esta decision no es valida")      
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


