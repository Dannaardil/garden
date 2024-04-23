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