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

///5
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




