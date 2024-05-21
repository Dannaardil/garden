//8 Devuelve un listado con el código de cliente de aquellos clientes que 
//realizaron algún pago en 2008. Tenga en cuenta que 
//deberá eliminar aquellos códigos de cliente que aparezcan repetidos
export const getAllClientsBefore2008 = async()=>{
    let res = await fetch("http://172.16.101.146:5325/payments")
    let data = await res.json();
    const all = new Set();
    data.forEach(val => {
        if (val.date_payment.split("-")[0]==="2008"){
          all.add(
            val.code_client)

          
        }
        
    });

    return Array.from(all)
    }



////13 Devuelve un listado con todos los pagos que se realizaron 
//en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getPaypalPaymentsIn2008 = async()=>{

 let res = await fetch("http://172.16.101.146:5325/payments?payment=PayPal")
  let data = await res.json();
  let dataUpdated = data.filter (val => ( val.date_payment[3] === "8" ))
    .map(val => {
        return {
          codigo_cliente:  val.code_client, 
          fecha_de_pago: val.date_payment,
            metodo_de_pago : val.payment,
            total : val.total, 

          
        }
    })
    return dataUpdated.sort();
}

//14
export const getAllPayOptions = async()=>{
  let res = await fetch("http://172.16.101.146:5325/payments")
  let data = await res.json();
  const all = new Set();
  data.forEach(val => {
     
        all.add(
          val.payment
        )

       
      
      
  });

  return Array.from(all)
  }

//MULTITABLA 2 : 
//Muestra el nombre de los clientes que hayan 
//realizado pagos junto con el 
//nombre de sus representantes de ventas.


export const getPayments = async()=>{
  let res = await fetch("http://172.16.101.146:5325/payments")
  let data = await res.json();
  let dataPay = [];
  data.forEach(val => {
    dataPay.push({
  codigo_cliente: val.code_client, 
   })
  })
  

  
  return dataPay
}





