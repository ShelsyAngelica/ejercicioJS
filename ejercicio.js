//Guardamos en 2 var los valores ingresados por el usuario
//Usamos parseInt para parsear lo valores a enteros
let pBase  = parseInt(prompt("Ingresa el precio del producto"));
let desc  = parseInt(prompt("Ingresa el descuento del producto"));


//creamos la funcion y recibe como parametros los valores que ingreso el usuario
function calcularPrecio(precioBase, descuento){

    if(precioBase <= 0 || descuento <0 || descuento>100 || isNaN(pBase) || isNaN(desc)){
        return "Los valores ingresados son invalidos";
    }

    if(descuento === 0){
        return precioBase;
    }
    
    if(descuento > 0 && descuento<=100){
        precioConDescuento =   (precioBase - (precioBase * descuento) / 100);
        return "El precio final con descuento es: " + precioConDescuento;
    }
}
//llamamos la funcion y le enviamos como argumentos los valores que ingreso el usuario
console.log(calcularPrecio(pBase,desc));



