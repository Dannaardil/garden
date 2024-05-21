//6. Devuelve un listado con el nombre de los
// todos los clientes españoles.



export const getSpainClients = async()=>{
    let res = await fetch("http://localhost:5321/clients?country=Spain")
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
// export const getSpainClients = async()=>{
//     let res = await fetch("http://localhost:5321/clients?country=Spain")
//     let data = await res.json();
//     let dataUpdate = [];
//     data.forEach(val => {
//         dataUpdate.push({
//             nombre: val.client_name,
//             nacionalidad: val.country,
//             codigo:val.code_employee_sales_manager,
//             ciudad: val.city
//         })
//     });
//     return dataUpdate;
// }

// 16 Devuelve un listado con todos los clientes que sean de la ciudad 
//de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30.

export const getAllMadridClientsWith11And33Code = async()=>{

    let res = await fetch("http://localhost:5321/clients?city=Madrid")
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
//     let res = await fetch("http://localhost:5321/clients")
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

    let res = await fetch("http://localhost:5321/clients")
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

    let res = await fetch("http://localhost:5321/clients")
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



// import { getPayments } from "./payments.js";
export const getClientsNoPay = async() => {
    let res = await fetch("http://localhost:5321/clients");
    let dataClients = await res.json();
    let dataSaleAgents = await getSalesManager();
    let dataPayments = await getPayments();
    let dataUpdated = [];

    dataClients.forEach(cliente => {
        let hasPaid = false;

        dataPayments.forEach(payment => {
            if (cliente.client_code === payment.codigoClient) {
                hasPaid = true;
            }
        });

        if (!hasPaid) {
            dataSaleAgents.forEach(agent => {
                if (cliente.code_employee_sales_manager === agent.codigoEmpleado) {
                    dataUpdated.push({
                        nombreCliente: cliente.client_name,
                        nombreRepresentante: agent.nombre,
                        codigoOficina: agent.codigoOficina
                    });
                }
            });
        }
    });

    return dataUpdated;
};

// 2. 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
import { getAllOfficesCodeAndCity } from "./offices.js";

export const getClientsPay = async () => {
        let clientManager = await getSalesManager();
        let offices = await getAllOfficesCodeAndCity();
        let dataUpdate = [];

        clientManager.forEach(val => {
            offices.forEach(ofi => {
                if (val.codigoOficina == ofi.codigo) {
                    dataUpdate.push({
                        nombreCliente: val.nombreCliente,
                        nombreRepresentante: val.nombreRepresentante,
                        ciudadOficinaRepresentante: ofi.ciudad
                    });
                }
            });
        });

        return dataUpdate;
    } 

// 2. 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientNoPayAndSM= async () => {
    let clientManager = await getClientsNoPay();
    let offices = await getAllOfficesCodeAndCity();
    let dataUpdate = [];

    clientManager.forEach(val => {
        offices.forEach(ofi => {
            if (val.codigoOficina == ofi.codigo) {
                dataUpdate.push({
                    nombreCliente: val.nombreCliente,
                    nombreRepresentante: val.nombreRepresentante,
                    ciudadOficinaRepresentante: ofi.ciudad
                });
            }
        });
    });

    return dataUpdate;
}


// 2.7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllClientsAndRepresentSalesOffices = async() => {
    let client_manager = await getClientsName();
    let office = await getAllOfficesCodeAndCity();
    let dataUpdate=[];
    client_manager.forEach(val=>{
        office.forEach(dat=>{
                dataUpdate.push({
                    nombre_cliente: val.nombreCliente,
                    nombre_representante:val.nombreRepresentante,
                    ciudad_oficina_representante: dat.ciudad
                })
        })
    })
    
    return dataUpdate


}

// 2.10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.





import {getNotInTime} from "./requests.js"
export const getAllClientsWithLateRequests = async() => {
    
    let dataLateRequests = await getNotInTime()
    let dataClients = await getAllClients()
    let dataUpdate = []
    
    for (let lateRequest of dataLateRequests) {
        for (let client of dataClients) {
            if (client.codigoCliente == lateRequest.codigoCliente) {
                dataUpdate.push({
                    nombreCliente: client.nombreCliente
                })
            }
        }
    }
    
    return dataUpdate
}

export const getAllClients = async ()=>{
    let res =await fetch("http://localhost:5321/clients")
    let data=await res.json();
    let dataUpdate = [];
    let clientCodes = new Set();
    data.forEach(val => {   
        if (!clientCodes.has(val.client_code)) {
            clientCodes.add(val.client_code);
            dataUpdate.push({
                codigoCliente: val.client_code,
                nombreCliente: val.client_name,
                nacionalidad: val.country,
                ciudad: val.city
            });
        }
    });
    return dataUpdate;
}
