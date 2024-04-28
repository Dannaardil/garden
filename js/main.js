import {
   
    getAllOfficesFromSpainCityAndMovil, getAllOfficesCodeAndCity
    
    } from "./module/offices.js";



import {
    getSpainClients, 
    getAllMadridClientsWith11And33Code, 
    getClientsName, getClients, getClientsNoPay

}from "./module/clients.js";


import {
    getAllEmployeesWithBossAndCodeServer, 
    getBossFullNameAndEmail, 
    getAllNotSellManager
}from "./module/employees.js";

import{
    getStatus, getNotInTime, getTwoDaysBefore, rejectedRequestsIn2009, rejectedRequestsInJanuary
}from "./module/requests.js";

import{
    getAllClientsBefore2008, getAllPayOptions, getPaypalPaymentsIn2008
}from "./module/payments.js"
import{
    getMoreThan100AndOrnamental
}from "./module/product.js"


////////////////primeros 10 ejercicios una sola tabla//////

// console.log(await getAllOfficesCodeAndCity()); //EJERCICIO 1
// console.log(await getAllOfficesFromSpainCityAndMovil()); //EJERCICIO 2
// console.log(await getAllEmployeesWithBossAndCodeServer()); EJERCICIO 3
// console.log(await getBossFullNameAndEmail());//EJERCICIO 4
// console.log(await getAllNotSellManager());// EJERCICIO 5
// console.log(await getSpainClients());// EJERCICIO 6 
// console.log(await getStatus()); //EJERCICIO 7 
// console.log(await getAllClientsBefore2008());/// EJRERCICIO 8 
// console.log(await getNotInTime());// EJERCICIO 9
// console.log(await getTwoDaysBefore()); //EJERCICIO 10
// console.log(await rejectedRequestsIn2009());//EJERCICIO 11
// console.log(await rejectedRequestsInJanuary());//EJERCICIO 12
// console.log(await getAllPayOptions()); //EJERCICIO 13
// console.log(await getPaypalPaymentsIn2008()); //EJERCICIO 14
// console.log(await getMoreThan100AndOrnamental());//EJERCICIO 15 
console.log(await getAllMadridClientsWith11And33Code());//EJERCICIO 16 




