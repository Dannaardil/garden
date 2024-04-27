
//3. Devuelve un listado con el nombre, 
//apellidos y email de los empleados cuyo jefe tiene un código 
//de jefe igual a 7.

export const getAllEmployeesWithBossAndCodeServer = async()=>{
    let res = await fetch("http://localhost:5509/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        let [email] =val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push ({
            nombre: val.name, 
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email
        });
        
    })
    return dataUpdate
}


//4 
//4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.


export const getBossFullNameAndEmail = async()=>{
   let res = await fetch("http://localhost:5509/employees");
   let data = await res.json();
   let dataUpdate = {};
   data.forEach(val =>{
    if(val.code_boss == null){
        dataUpdate.nombre = val.name
        dataUpdate.apellido = val.apellidos = `${val.lastname} ${val.lastname2}`
        dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/);

    }
    
   })
    
   return dataUpdate;

}

///5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no 
//sean representantes de ventas.
export const getAll = async()=>{
    let res = await fetch("http://localhost:5509/employees?position_ne=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position
        })
    });
    return dataUpdate;
}


//1 // Multitabla
//Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
// se uso tmb para la consulta 2 de multitabla
export const getSalesManager =  async()=>{
    let res = await fetch("http://localhost:5509/employees?position=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position,
            codigo: val.employee_code
        
        })

    })
    
    
    return dataUpdate;

}


