//15 Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su 
//precio de venta, mostrando en primer lugar los de mayor precio.

export const getMoreThan100AndOrnamental = async()=>{

    let res = await fetch("http://172.16.101.146:5326/product?gama=Ornamentales")
     let data = await res.json();
     let dataUpdated = data.filter (val => ( val.stock >100))
       .map(val => {
           return {
            ...val
            //  nombre: val.name
   
             
           }
       })
       return dataUpdated.sort((a,b) => b.price_sale - a.price_sale);
   }

   
   export const getAllProducts = async ()=>{
    let res=  await fetch("http://172.16.101.146:5326/product")
    let data= await res.json();
    let dataUpdate=[];
    data.forEach(val => {
        dataUpdate.push({
           codigo_producto: val.code_product,
           nombre_producto: val.name,
           precio_venta: val.price_sale,
           proveedor: val.provider,
           precio_compra: val.price_provider,
           stock: val.stock,
           gama: val.gama,
        });
    });
    return dataUpdate
}