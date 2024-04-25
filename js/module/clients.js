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
   