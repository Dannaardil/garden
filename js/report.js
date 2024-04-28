// import "./components/clock.js";
import {getAllOfficesCodeAndCity}from "./module/offices.js"
import {getAllOfficesFromSpainCityAndMovil} from "./module/offices.js"
import {getAllEmployeesWithBossAndCodeServer,getBossFullNameAndEmail,getAllNotSellManager,  }from "./module/employees.js"
import {getSpainClients, getAllMadridClientsWith11And33Code}from "./module/clients.js"
import{getStatus, getNotInTime, getTwoDaysBefore, rejectedRequestsIn2009, rejectedRequestsInJanuary}from "./module/requests.js"
import {getAllClientsBefore2008, getAllPayOptions, getPaypalPaymentsIn2008}from "./module/payments.js"
import{
    getMoreThan100AndOrnamental
}from "./module/product.js"

// import { getClientsEmploy } from "./module/clients.js";


const queryAboutTable1 = document.querySelector("#queryAboutTable1");
const queryAboutTable2 = document.querySelector("#queryAboutTable2");
const queryAboutTable3 = document.querySelector("#queryAboutTable3");
const queryAboutTable4 = document.querySelector("#queryAboutTable4");
const queryAboutTable5 = document.querySelector("#queryAboutTable5");
const queryAboutTable6 = document.querySelector("#queryAboutTable6");
const queryAboutTable7 = document.querySelector("#queryAboutTable7");
const queryAboutTable8 = document.querySelector("#queryAboutTable8");
const queryAboutTable9 = document.querySelector("#queryAboutTable9");
const queryAboutTable10 = document.querySelector("#queryAboutTable10");
const queryAboutTable11= document.querySelector("#queryAboutTable11");
const queryAboutTable12= document.querySelector("#queryAboutTable12");
const queryAboutTable13= document.querySelector("#queryAboutTable13");
const queryAboutTable14= document.querySelector("#queryAboutTable14");
const queryAboutTable15= document.querySelector("#queryAboutTable15");
const queryAboutTable16= document.querySelector("#queryAboutTable16");
//////////////////////////






////////////////////////////
// 1 . Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
queryAboutTable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b>Oficinas disponibles:</b></div>
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>codigo: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

///////////////////////////////////
// 2. Devuelve un listado con la ciudad y el 
//teléfono de las oficinas de España.
queryAboutTable2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesFromSpainCityAndMovil(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b>oficinas disponibles en España</b></div>
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Ciudad: </b>${val.ciudad}</p>
                    <p><b>telefono: </b>${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

///// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un 
//código de jefe igual a 7.

queryAboutTable3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesWithBossAndCodeServer(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b> Empleados del jefe cod: 7:</b></div>
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Nombre: </b>${val.nombre}</p>
                    <p><b>Apellidos: </b>${val.apellidos}</p>
                    <p><b>Email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

////////////////4 .  Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

queryAboutTable4.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4.children
    if(!report__container.innerHTML){
        let data = await getBossFullNameAndEmail(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
      
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b>Jefe de la empresa:</b></div>
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Nombre: </b>${data.nombre}</p>
                    <p><b>Puesto: </b>${data.puesto}</p>
                    <p><b>Apellido: </b>${data.apellidos}</p>
                    <p><b>Email: </b>${data.email}</p>
                    </div>
                </div>
            </div>
            `;
        
        report__container.innerHTML = plantilla;
    }
})


//////////////////5 . 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
queryAboutTable5.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable5.children
    if(!report__container.innerHTML){
        let data = await getAllNotSellManager(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b> Empleados que no son sales manager:</b> </div>

                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Nombre: </b>${val.nombre}</p>
                    <p><b>Apellidos: </b>${val.apellidos}</p>
                    <p><b>Puesto: </b>${val.puesto}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

/////////////////// 6.  Devuelve un listado con el nombre de los todos los clientes españoles.
queryAboutTable6.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6.children
    if(!report__container.innerHTML){
        let data = await getSpainClients(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b>Clientes Españoles</b></div>
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Nombre: </b>${val.nombre}</p>
                   
                    <p><b>Pais: </b>${val.pais}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
////////////////////7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

queryAboutTable7.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7.children
    if(!report__container.innerHTML){
        let data = await getStatus(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b>Estados por los que puede pasar un pedido</b></div>

                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Estados:  </b>${val}</p>
                   
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
}) //// 8 Devuelve un listado con el código de cliente de aquellos 
//clientes que realizaron algún pago en 2008.

queryAboutTable8.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable8.children
    if(!report__container.innerHTML){
        let data = await getAllClientsBefore2008(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b>Pagos realizados en 2008</b></div>
                
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Codigo_cliente:  </b>${val}</p>
                   
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y
// fecha de entrega de los pedidos que no han sido entregados a tiempo.
queryAboutTable9.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable9.children
    if(!report__container.innerHTML){
        let data = await getNotInTime(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                
                <div><b>Pedidos entregados a tiempo</b></div>
                 

                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Pedido:  </b>${val.pedido}</p>
                    <p><b>Cliente:  </b>${val.cliente}</p>
                    <p><b>Fecha_esperada:   </b>${val.fecha_esperada}</p>
                    <p><b>Fecha_entrega:  </b>${val.fecha_entrega}</p>
                   
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
//10. Devuelve un listado con el código 
//de pedido, código de cliente, fecha esperada y 
//fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
queryAboutTable10.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable10.children
    if(!report__container.innerHTML){
        let data = await getTwoDaysBefore(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                <div><b> Fecha de entrega 2 dias antes de lo esperado</b></div>

                
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Pedido:  </b>${val.pedido}</p>
                    <p><b>Cliente:  </b>${val.cliente}</p>
                    <p><b>Fecha_esperada:   </b>${val.fecha_esperada}</p>
                    <p><b>Fecha_entrega:  </b>${val.fecha_entrega}</p>
                   
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
//11. Devuelve un listado de todos los pedidos 
//que fueron **rechazados** en `2009`
queryAboutTable11.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable11.children
    if(!report__container.innerHTML){
        let data = await rejectedRequestsIn2009(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                
                <div><b> Pedidos Rechazados en 2009</b></div>

                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>codigo_pedido:  </b>${val.codigo_pedido}</p>
                    <p><b>codigo_ciente:  </b>${val.codigo_cliente}</p>
                    <p><b>tiempo_espera:   </b>${val.tiempo_espera}</p>
                    <p><b>fecha_llegada:  </b>${val.fecha_llegada}</p>
                    <p><b>estado:  </b>${val.estado}</p>
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
//12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
queryAboutTable12.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable12.children
    if(!report__container.innerHTML){
        let data = await rejectedRequestsInJanuary(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">

                <div><b> Pedidos entregados en el mes de enero </b></div>
                
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>codigo_pedido:  </b>${val.codigo_pedido}</p>
                    <p><b>codigo_ciente:  </b>${val.codigo_cliente}</p>
                    <p><b>tiempo_espera:   </b>${val.tiempo_espera}</p>
                    <p><b>fecha_llegada:  </b>${val.fecha_llegada}</p>
                    <p><b>estado:  </b>${val.estado}</p>
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
//13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
queryAboutTable13.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable13.children
    if(!report__container.innerHTML){
        let data = await getPaypalPaymentsIn2008(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">

                <div><b> Pagos en el 2008 mediante PayPal</b></div>
                
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>codigo_ciente:  </b>${val.codigo_cliente}</p>
                    <p><b>fecha_de_pago:  </b>${val.fecha_de_pago}</p>
                    <p><b>metodo_de_pago:   </b>${val.metodo_de_pago}</p>
                    <p><b>total:  </b>${val.total}</p>
    
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
//
//14. Devuelve un listado con todas las formas de
// pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.
queryAboutTable14.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable14.children
    if(!report__container.innerHTML){
        let data = await getAllPayOptions(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">

                <div><b> Metodos de pago </b></div>
                
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Opcion_de_pago:  </b>${val}</p>
    
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
//15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
queryAboutTable15.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable15.children
    if(!report__container.innerHTML){
        let data = await getMoreThan100AndOrnamental(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">

                <div><b> Ornamentales con mas de 100 en stock</b></div>
                
                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Nombre_producto:  </b>${val.name}</p>
                    <p><b>gama:  </b>${val.gama}</p>
    
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
//16. Devuelve un listado con todos los 
//clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.
queryAboutTable16.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable16.children
    if(!report__container.innerHTML){
        let data = await getAllMadridClientsWith11And33Code(); //// cambiar por la funcion a usar 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                
                <div><b> clientes de madrid cod: 11, cod: 33</b></div>

                 
                </div>
                <div class="card__body">
                    <div class="body__marck">
                 
                    <p><b>Nombre_cliente:  </b>${val.client_name}</p>
                    <p><b>codigo_sales:  </b>${val.code_employee_sales_manager}</p>
                    <p><b>ciudad:  </b>${val.city}</p>
    
                  
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})