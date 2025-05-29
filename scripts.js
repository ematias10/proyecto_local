//1.
for(let i=1; i<=10; i++){
    console.log("Interacción " + i);
}

//2.
console.log("------------------------------")
for(let i=0; i<=100; i=i+10){
    console.log("Cargando... " + i + "%");
    if(i==100){
        console.log("Carga completada.")
    }
}

//3.
console.log("------------------------------");

for(let i=1; i<=5; i++){
    let dcto = i * 5;
    console.log("Producto " + i + " - Descuento aplicado: " + dcto + "%")
}

//4.
console.log("------------------------------");

let nivel = 1;
let ptje = 0;
while(nivel <= 5){
    ptje = ptje + 50;
    nivel++;
}
console.log("Puntaje obtenido: " + ptje)

//5.
console.log("------------------------------");

for(let i=5; i>=0; i--){
    if(i==0){
        console.log("No tienes notificaciones pendientes.​");
    } else {
        console.log("Tienes " + i + " notificaciones nuevas");
    }
}

console.log("------------------------------");
let comprasSemana = [5000, 2300, 12000, 4500, 3000];
//                    0      1      2     3     4
console.log(comprasSemana)
console.log("compras del miercoles: " + comprasSemana[2]);
let tamano = comprasSemana.length;
console.log("compras del viernes: " + comprasSemana[tamano - 1]);
comprasSemana[2] = 15000;
console.log(comprasSemana);
console.log("nuevas compras del miercoles: " + comprasSemana[2]);
comprasSemana.push(7000);
console.log(comprasSemana);
comprasSemana.pop();
console.log(comprasSemana);
console.log("------------------------------");
let total = 0;

for(let i=0; i<comprasSemana.length;i++){
    total = total + comprasSemana[i];
}
console.log("Total de gastos: $" + total);      