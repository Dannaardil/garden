/*export const example= ()=>{
   let calculo = new Promise((resolve, reject)=>{
     let suma = ""
     for (let i = 0; i < 10; i++){
        res += i;

     }
     resolve(suma)



   });

   calculo.then(res=>{
    console.log(res);

   })
}*/
export const getAllproductBill= async()=>{
   let conexion = await fetch("http://localhost:5600/camper");
   let data = await conexion.json();
   return data;
}
