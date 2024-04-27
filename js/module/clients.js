//6. Devuelve un listado con el nombre de los
// todos los clientes españoles.



export const getSpainClients = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data =  await res.json()
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.contact_name,
            pais : val.country

        })
    });
    return dataUpdate;
}

// 16 Devuelve un listado con todos los clientes que sean de la ciudad 
//de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30.

export const getAllMadridClientsWith11And33Code = async()=>{

    let res = await fetch("http://localhost:5501/clients?city=Madrid")
     let data = await res.json();
     let dataUpdated = data.filter (val => ( val.code_employee_sales_manager == "11" || val.code_employee_sales_manager == "33"))
       .map(val => {
           return {
            ...val
            //  nombre: val.name
   
             
           }
       })
       return dataUpdated;
   }
   //1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
//    export const getAllClientsAndSalesManager = async()=>{
//     let res = await fetch("http://localhost:5501/clients")
//     let data = await res.json();
//     let dataUpdate = [];
//     data.forEach(val => {
//         dataUpdate.push({
//             nombre: val.contact_name,
//             apellidos: `${val.lastname1} ${val.lastname2}`,
//             representante: val.code_employee_sales_manager
//         })
//     });
//     return dataUpdate;


// CONSULTAS MULTITABLA: 

//Obtén un listado con el nombre de cada 
//cliente y el nombre y 
//apellido de su representante de ventas.
import { getSalesManager } from "./employees.js";
export const getClientsName = async()=>{

    let res = await fetch("http://localhost:5501/clients")
    let dataClients = await res.json();
    let dataUpdate = [];
    let dataManager = await getSalesManager();
    dataClients.forEach(val => {
        
        dataManager.forEach(dat =>{
            if(val.code_employee_sales_manager == dat.codigo){
                dataUpdate.push({
                    nombre_cliente: val.contact_name,
                    nombre_representante: dat.nombre,
                    codigo_cliente: val.code_employee_sales_manager,

                    apellidos: dat.apellidos,
                    representante_cod: dat.codigo
                })
            }
        
        })
    
    })
 return dataUpdate;

}
// 2 multitabla 

import { getPayments } from "./payments.js";

export const getClients = async()=>{

    let res = await fetch("http://localhost:5501/clients")
    let dataClients = await res.json();
    let dataUpdate = new Set;
    let dataManager = await getSalesManager();
    let dataPayments = await getPayments();
    dataClients.forEach(val => {
        dataPayments.forEach( pay =>{
            dataManager.forEach(dat =>{
            
                if(val.code_employee_sales_manager == dat.codigo && val.client_code == pay.codigo_cliente) {
                    dataUpdate.add({
                        nombre_cliente: val.contact_name,
                        nombre_representante: dat.nombre,
                        codigo_Sales_m: val.code_employee_sales_manager,
                        codigo_pago: pay.codigo_cliente,
                        codigo_cliente_2: val.client_code,
                        apellidos: dat.apellidos,
                        representante_cod: dat.codigo
                    })
                }
            
            })
        })
   
    
    })
 return Array.from(dataUpdate);

}
//3 multitabla

export const getClientsNoPay= async()=>{
    let res = await fetch("http://localhost:5501/clients")
    let dataClients = await res.json();

    let clientsAndManager = await getClients();
    let dataUpdate = [];
    clientsAndManager.forEach(client => { 
        
        


    })

    
 return dataUpdate;

}