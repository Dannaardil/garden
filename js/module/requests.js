

////7
export const getStatus = async()=>{
    let res = await fetch("http://localhost:5328/requests")
    let data = await res.json();
    const allStatus = new Set();
    data.forEach(val => {
        allStatus.add(val.status);
    });
   let status=  Array.from(allStatus);
    return status

}




//9   Devuelve un listado con el código de pedido, 
//código de cliente, fecha esperada y fecha de entrega de los
// pedidos que no han sido entregados a tiempo.

//==========================================

export const  getNotInTime = async () =>{
    let res = await fetch("http://localhost:5328/requests?date_request")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.date_wait < val.date_delivery){
            dataUpdate.push({
                pedido: val.code_request,
                cliente: val.code_client,
                fecha_esperada: val.date_wait,
                fecha_entrega: val.date_delivery
            })
            }
        })
        return dataUpdate;
    }
    
    
    
    
    
    
    
    //10 Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de 
    //los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
    export const getTwoDaysBefore = async () =>{
        let res = await fetch("http://localhost:5328/requests?status=Entregado")
        let data = await res.json();
        let dataUpdate = [];
        data.forEach(val => {
            if(val.date_delivery == null){
                dataUpdate.push({
                    estado: val.status,
                    pedido: val.code_request,
                    cliente: val.code_client,
                    fecha_esperada: val.date_wait,
                    fecha_entrega: null
                })
            } else{
                let x = Number(val.date_wait[8] + val.date_wait[9]) - Number(val.date_delivery[8] + val.date_delivery[9]);
                let y = Number(val.date_delivery[5] + val.date_delivery[6]) - Number(val.date_wait[5] + val.date_wait[6]);
                if(x >= 2 && y <= 0){
                    dataUpdate.push({
                        estado: val.status,
                        pedido: val.code_request,
                        cliente: val.code_client,
                        fecha_esperada: val.date_wait,
                        fecha_entrega: val.date_delivery
                    })
                }
            }        
        })
        return dataUpdate;
    }







/// 11 Devuelve un listado de todos 
//los pedidos 
//que fueron rechazados en 2009.

export const rejectedRequestsIn2009 = async()=>{
    let res = await fetch("http://localhost:5328/requests?status=Rechazado")
    let data = await res.json();
    let dataUpdated = data.filter (val => (val.date_request != null && val.date_request[3] === "9"))
    .map(val => {
        return {
            codigo_pedido: val.code_request, 
            codigo_cliente:  val.code_client, 
            tiempo_espera: val.date_wait, 
            fecha_llegada: val.date_delivery,
            estado: val.status
        }
    })
    return dataUpdated;
    }
///12 Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

export const rejectedRequestsInJanuary= async()=>{
    let res = await fetch("http://localhost:5328/requests?status=Entregado")
    let data = await res.json();
    let dataUpdated = data.filter (val => (val.date_delivery != null && val.date_delivery[5] === "0" && val.date_delivery[6]== "1"))
    .map(val => {
        return {
            codigo_pedido: val.code_request, 
            codigo_cliente:  val.code_client, 
            tiempo_espera: val.date_wait, 
            fecha_llegada: val.date_delivery,
            estado: val.status
        }
    })
    return dataUpdated;
}
  
  

export const getAllRequests =async ()=>{
    let res= await fetch("http://localhost:5328/requests")
    let data= await res.json();
   let dataUpdate = []
   data.forEach(val=>{
           dataUpdate.push({
               
               codigo_solicitud: val.code_request,
               codigo_cliente: val.code_client,
               fecha_solicitud: val.date_request,
               fecha_esperada: val.date_wait,
               fecha_entrega: val.date_delivery,
               estado: val.status,
    } )  }
   );
   return dataUpdate
   }   
    
    // data.forEach(val => {
    //     if (val.date_request.split("-")[0]==="2009"){
    //       all.add(
    //         val.code_client)

          
    //     }
        
    // });

    // return Array.from(all)
    // }

// export const getAllNotInTime = async()=>{
//     let res = await fetch("http://localhost:5328/requests?status=Entregado")
//     let data = await res.json();
//     const dataUpdated =  [];

    
//         let wait = data.date_wait.split("-");
//         let delivery = data.date_delivery.split("-");
//         console.log(wait)
//         if(Number(delivery)[2]>Number(wait)[2] ){
//             dataUpdated.push(
//                 data.code_request, 
//                 data.code_client, 
//                data.date_wait, 
//                  data.date_delivery
//             )

 
   

//     }
//     return dataUpdated;




