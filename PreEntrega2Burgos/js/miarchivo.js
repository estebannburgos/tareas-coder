class Currency {
    constructor (id, iso, change) {
        this.id = id;
        this.iso = iso;
        this.change = change;
    }
}

const divisa1 = new Currency(001, "ARS", 158.86);
const divisa2 = new Currency(002, "CLP", 927.84);
const divisa3 = new Currency(003, "MXN", 19.54);
const divisa4 = new Currency(004, "PEN", 9.93);
const divisa5 = new Currency(005, "JPY", 146.92);
const divisa6 = new Currency(006, "EUR", 1.01);

const BBDD = [divisa1, divisa2, divisa3, divisa4, divisa5, divisa6];

function validateDollar(dollar) {
    if (dollar > 0) 
        return true;
    else
        return false;
}

function findCurrency(array, currency) {
    return array.find((el) => el.iso === currency);
}

function filterCurrency(array, currency) {
    return array.filter((el) => el.iso.includes(currency));
}

function convertCurrency(dollar, currency) {
    result = 0;
    if(currency.change > 0) 
        result = dollar * currency.change;
    else
        alert("Tipo de operación ingresado inválido");

    return result;
}

let input = prompt("Ingrese cuántos dólares desea tranformar: ");

while(validateDollar(input) === false){
    alert("Ingresaste "+ input + ". Tiene que ser un número mayor a cero");
    input = prompt("Por favor, ingrese cuántos dólares desea convertir");
}

let currency = prompt("Genial. Ahora ingrese el tipo de divisa al cual convertirá: ARS, CLP, MXN, PEN, JPY, EUR");

while(findCurrency(BBDD, currency) === undefined){
    alert("Ingresaste "+ currency + ". Tiene que ser un tipo de divisa válido por el sistema");
    currency = prompt("Por favor, ingrese un tipo de divisa. Puede ser ARS, CLP, MXN, PEN, JPY, EUR");
}

let dataFound = findCurrency(BBDD, currency);
let dataFiltered = filterCurrency(BBDD, currency);
alert("Valor transformado. Favor de revisar el console.log del navegador para ver el resultado.")
console.log("La transformación de "+ input + " USD a " + currency + " es " + convertCurrency(input, dataFound));
console.log("La divisa corresponde a elemento ID "+ dataFiltered[0].id + " en la base de datos");