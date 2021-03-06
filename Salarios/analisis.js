//1. Se extrae del array colombia la propiedad salary para crear uno nuevo.
const salariosCol = colombia.map(
    function (persona){
        return persona.salary
    }
);


//2. Se organiza el array salariosCol.
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


//      3. MEDIANA DE SALARIOS

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce( // este metodo ejecuta una funcion por cada elemento de un array.
        function (valorAcumulado = 0, nuevoElemento){ // en este caso valorAcumulado debe ser 0 para q lea el primer elemento del array, este sera nuestro contador.
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumaLista / lista.length; // Se realiza el promedio 

    return promedioLista;
}


//1. saber si el numero es par o impar.
function esPar(numero) {
    return (numero % 2 == 0); // nos regresara un true si es para y un false si es impar.
};


//2. Calcular la mediana general de salarios
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)// esto nos regresa la mitad de nuestro array, se parsea para quitar decimales.

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad
    }
}


//3. mostrar resultados.

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//      4. CALCULANDO EL TOP 10%


//Calcular el %


// Crear variable de posicion inicial de corte de array / la cual sacara el 10% de nuestro array
const spliceStart = parseInt((salariosColSorted.length *90)/ 100);


// Crear variable de cuantas posiciones se extraeran del array
const spliceCount = salariosColSorted.length - spliceStart;


// Se crea funcion con el metodo splice
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);


const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
})