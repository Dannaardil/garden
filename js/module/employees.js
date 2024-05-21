
//3. Devuelve un listado con el nombre, 
//apellidos y email de los empleados cuyo jefe tiene un código 
//de jefe igual a 7.

export const getAllEmployeesWithBossAndCodeServer = async()=>{
    let res = await fetch("http://172.16.101.146:5509/employees?code_boss=7")
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
   let res = await fetch("http://172.16.101.146:5509/employees");
   let data = await res.json();
   let dataUpdate = {};
   data.forEach(val =>{
    if(val.code_boss == null){
        dataUpdate.puesto = val.position
        dataUpdate.nombre = val.name
        dataUpdate.apellido = val.apellidos = `${val.lastname1} ${val.lastname2}`
        dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0];

    }
    
   })
    
   return dataUpdate;

}

///5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no 
//sean representantes de ventas.
export const getAllNotSellManager = async()=>{
    let res = await fetch("http://172.16.101.146:5509/employees?position_ne=Representante%20Ventas")
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
    let res = await fetch("http://172.16.101.146:5509/employees?position=Representante%20Ventas")
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

//multitable 8 
export const getAllEmployeesWithBoss = async() => {
    let res = await fetch("http://172.16.101.146:5322/employees")
    let dataEmployees = await res.json()
    let dataUpdate = []

    for (let employee of dataEmployees) {
        for (let boss of dataEmployees) {
            if (employee.code_boss == boss.employee_code) {
                dataUpdate.push({
                    nombreEmpleado: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
                    nombreJefe: `${boss.name} ${boss.lastname1} ${boss.lastname2}`
                })
            }
        }
    }
    return dataUpdate
}

//multitable 9 
export const getAllEmployeesWithBossAndBoss = async() => {
    let res = await fetch("http://172.16.101.146:5322/employees")
    let dataEmployees = await res.json()
    let dataUpdate = []

    for (let employee of dataEmployees) {
        for (let boss of dataEmployees) {
            if (employee.code_boss == boss.employee_code) {
                for (let bigBoss of dataEmployees){
                    if (boss.code_boss == bigBoss.employee_code){
                        dataUpdate.push({
                            nombreEmpleado: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
                            nombreJefe: `${boss.name} ${boss.lastname1} ${boss.lastname2}`,
                            nombreJefedelJefe: `${bigBoss.name} ${bigBoss.lastname1} ${bigBoss.lastname2}`
                        })
                    }
                }
            }
        }
    }
    return dataUpdate
}


