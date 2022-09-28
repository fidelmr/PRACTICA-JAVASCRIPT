/*alert('Texto_prueba');*/

let nombre="Fidel Manuel";
let altura= 190;

let concatenacion =nombre + " " +altura;

                                      /*document.write(concatenacion);*/

                                      /*document.getElementById("datos");*/

/*let datos= document.getElementById("datos");
                                      /*datos.innerHTML = concatenacion;*/
/*datos.innerHTML = `
<h1>Template Script</h1>
<h2>Me llamo ${nombre}</h2>
<h3>Mido ${altura} cm</h3>`;*/

/*if(altura >=190) {
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>';}
else
{datos.innerHTML += '<h1>Eres una persona BAJITA</h1>';}*/


                                      /*for(let i = 0; i<=2020; i++){
                                       datos.innerHTML += "<h2>Estamos en el año: "+i;
                                        };*/

/*for(let i = 2000; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i;};*/

function MuestraMiNombre (nombre, altura){
/*let datos = document.getElementById ("datos");
datos.innerHTML = `*/
let misDatos = `
<h1>Template Script</h1>
<h2>Me llamo ${nombre}</h2>
<h3>Mido ${altura} cm</h3>`;

return misDatos;
}
function Imprimir (){let datos = document.getElementById ("datos");
datos.innerHTML = MuestraMiNombre("Fidel Manuel", 170);}
/*en la función original generamos una variable que la llamamos misDatos y quitamos 
la linea de let datos = document.getElementById ("datos");*/



/*MuestraMiNombre ("Fidel Manuel", 170);*/
/*esta invocación la pasamos dentro de la function imprimir*/
Imprimir();

/*let nombres = ['Francisco','Fidel','Fernando',];
alert(nombres[2]);*/

document.write('<h1>Listado de nombres</h1>');
let nombres = ['Francisco','Fidel','Fernando',];
/*for(i = 0; i < nombres.length; i++){document.write(nombres[i] + '<br/>');}*/

/*nombres.forEach(function(nombre){document.write(nombre + '<br/>')});*/


nombres.forEach((nombre) => {document.write(nombre + '<br/>')});



















