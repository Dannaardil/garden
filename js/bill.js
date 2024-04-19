import {getAllproductBill} from "./component/shopBillCamper.js"
let mybill = document.querySelector("#mybill");
let data = await getAllproductBill();
let row = ""
data.forEach((val, id)=>{
    val.products.forEach(produc=>{
        row +=
       `
       <tr>
        <td>${produc.descript}</td>
        <td>${produc.quantity}</td>
        <td>${produc.price}</td>
        <td>${produc.total}</td>
       </tr>
        `
        
        

    });
})

mybill.innerHTML = row