const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
};


/**Por rango de salario:
 Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
 Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
 Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
 Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%*/


//If para calcular rango salarial y operador ternario para calcular dependiendo del numero de hijos
if (empleado.bruto <= 12000) {
    retencion = 0
} else if (empleado.bruto < 24000) {
    retencion = (empleado.hijos >= 2) ? (empleado.bruto) * (0.06) : (empleado.bruto) * (0.08)
} else if (empleado.bruto < 34000) {
    retencion = (empleado.hijos >= 2) ? (empleado.bruto) * (0.14) : (empleado.bruto) * (0.16)
} else if (empleado.bruto >= 34000) {
    retencion = (empleado.hijos >= 2) ? (empleado.bruto) * (0.28) : (empleado.bruto) * (0.30)
}

console.log("La retencion es" + " " + retencion)


//Al haber calculado la retencion, se le resta al bruto

total = empleado.bruto - retencion

console.log("El sueldo anual es" + " " + total)

//Un if donde se admiten los dos tipos de pagas para calcular el sueldo mensual

if (empleado.pagas == 14) {
    sueldo = total / 14;
}
else if (empleado.pagas == 12) {
    sueldo = total / 12;
}

console.log("El sueldo mensual es" + " " + sueldo)