// alert("¡Hola Bienvenido a Mi Convertidor de Divisa!. ");
// let seleccionePais = prompt(
//   "Seleccione un Pais: Argentina - Chile - Mexico"
// ).toLocaleUpperCase();
// let sigueEnLoop = true;

const paises = [
  {
    id: 1,
    nombre: "ARGENTINA",
    dolar: 140,
    euro: 150,
  },
  {
    id: 2,
    nombre: "CHILE",
    dolar: 800,
    euro: 820,
  },
  {
    id: 1,
    nombre: "MEXICO",
    dolar: 19,
    euro: 22,
  },
];

const busquedaRealizada = (pais) => {
  const nombrePais = pais.nombre;
  const seleccion = {
    ARGENTINA: paises[0],
    CHILE: paises[1],
    MEXICO: paises[2],
  };
  alert(
    `${seleccion[nombrePais].nombre} tiene el dolar a ${seleccion[nombrePais].dolar} y el euro a ${seleccion[nombrePais].euro}`
  );
};

  
function convertir(){
    let valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    let de= document.getElementById("de").value;
    let a=document.getElementById("a").value;
    let dólar=800;
    let euro= 900;
    resultado=0;

    // Peso a dólar
    if(de==1&&a==2)
    {
        resultado=valor/dólar; 
    }
// peso a euro
   else if(de==1&&a==3)
   {
        resultado=valor/euro;
    } 
//    dolar a peso
    else if(de==2&&a==1){
        resultado=valor*dólar;

    }
    // dolar a euro
    else if(de==2&&a==3)
    {
        resultado=valor*(dólar/euro);
    }
    // euro a peso
    else if(de==3&&a==1)
    {
        resultado=valor*euro;
    }

    // euro a dolar
    else if(de==3&&a==2)
    {
        resultado=valor*(euro/dólar);
    }
    // peso a peso
    else{
        resultado=valor;
    }
document.getElementById("resultado").innerHTML= "Resultado: $"+valor.toFixed(1);
}
const form = document.getElementById('signup');
const name = form.elements['name'];
const email = form.elements['email'];


let fullName = name.value;
let emailAddress = email.value;

