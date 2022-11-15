/**alimentacion 10 %
 libro 4%
 resto 21%*/

const product = { count: 3, price: 12.5, type: "ropa" }

//Calculamos el precio total, cantidad de productos por su precio
let total


if (product.count > 0) {
    total = product.count * product.price;
}

else {
    total <= 0
}

console.log("El precio bruto es" + " " + total);

//Ahora  procedemos a calcular el IVA dependiendo del tipo de producto con un switch

let iva;


switch (product.type) {
    case "alimentacion":
        iva = total * 0.10; break;
    case "libro":
        iva = total * 0.04; break;

    default: iva = total * 0.21;

}
console.log("El iva es" + " " + iva);

//Sumamos el iva al precio total

let priceTot = total + iva

console.log("El precio total es" + " " + priceTot);

//Calculadora Avanzada

let ivaF;

if (product.type == "alimentacion") {
    ivaF = 1.1;
} else if (product.type == "libro") {
    ivaF = 1.04;
} else {
    ivaF = 1.21;
}


function getVat() {
    return product.price * ivaF
}

function getTotalVat() {
    return product.count > 0 ? product.count * getVat(product) : 0;
}
console.log(getTotalVat())
