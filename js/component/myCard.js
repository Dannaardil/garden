
import {getAllOfficesCodeAndCity, getAllOfficesFromSpainCityAndMovil, getOfficesWithClientsFromFuenlabrada} from "../module/offices.js"
import {getAllEmployeesWithBossAndCodeServer, getBossFullNameAndEmail, getAllNotSellManager, getAllEmployeesWithBoss, getAllEmployeesWithBossAndBoss} from "../module/employees.js"
import {getSpainClients, getAllMadridClientsWith11And33Code, getClientsName, getClients, getClientsNoPay, getClientsPay, getClientNoPayAndSM, getAllClientsAndRepresentSalesOffices, getAllClientsWithLateRequests} from "../module/clients.js"
import {getStatus, getNotInTime, getTwoDaysBefore, rejectedRequestsIn2009, rejectedRequestsInJanuary} from "../module/requests.js"
import {getAllClientsBefore2008, getPaypalPaymentsIn2008, getAllPayOptions} from "../module/payments.js"
import {getMoreThan100AndOrnamental} from "../module/product.js"
import {getAllGamas} from "../module/gama.js"



export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.shadowRoot.innerHTML = /*html*/ `
            <link rel="stylesheet" href="../css/myCard.css">
        `
    }

 // // 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

 async getAllOfficesCodeAndCityDesing() {
    let data = await getAllOfficesCodeAndCity()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo oficina y ciudad</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_de_oficina </b>${val.codigo}</p>
                       <p><b>Ciudad: </b>${val.ciudad}</p>

                    </div>
                </div>
            </div>
        `
    })
}


// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.


async getAllOfficesFromSpainCityAndMovilDesing() {
    let data = await getAllOfficesFromSpainCityAndMovil()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo oficina y telefono - España</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Telefono: </b>${val.telefono}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
        `
    })
}




// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.


async getAllEmployeesWithBossAndCodeServerDesing() {
    let data = await getAllEmployeesWithBossAndCodeServer()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Nombre-Apellidos-Email Empleados con codigo de jefe 7</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}

// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.



async getBossFullNameAndEmailDesing() {
    let data = await getBossFullNameAndEmail()
    // data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Jefe de la empresa</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Puesto: </b>${data.puesto}</p>
                        <p><b>Nombre: </b>${data.nombre}</p>
                        <p><b>Apellidos: </b>${data.apellido}</p>
                        <p><b>Email: </b>${data.email}</p>
            
                    </div>
                </div>
            </div>
        `
    // })
}


// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.


async getAllNotSellManagerDesing() {
    let data = await getAllNotSellManager()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Empleados no representantes de venta</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_empleado: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}



// 6. Devuelve un listado con el nombre de los todos los clientes españoles.


async getSpainClientsDesing() {
    let data = await getSpainClients()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes españoles</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_Cliente: </b>${val.nombre}</p>
                        <p><b>Nacionalidad: </b>${val.pais}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}




// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

async getStatusDesing() {
    let data = await getStatus()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Estados de pedido</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre_estados: </b>${val}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}


// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008.


async getAllClientsBefore2008Desing() {
    let data = await getAllClientsBefore2008()
    data.forEach(payment => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo de clientes pagos 2008</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${code_client}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}


// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.


async getNotInTimeDesing() {
    let data = await getNotInTime()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo de clientes pedidos no entregados a tiempo</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_pedido: </b>${val.pedido}</p>
                        <p><b>Codigo_cliente: </b>${val.cliente}</p>
                        <p><b>Fecha_esperada: </b>${val.fecha_esperada}</p>
                        <p><b>Fecha_entrega: </b>${val.fecha_entrega}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}




// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.



async getTwoDaysBeforeDesing() {
    let data = await getTwoDaysBefore()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Codigo de clientes pedidos entregados dos dias antes</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_pedido: </b>${val.pedido}</p>
                        <p><b>Codigo_cliente: </b>${val.codigoCliente}</p>
                        <p><b>Fecha_esperada: </b>${val.fecha_esperada}</p>
                        <p><b>Fecha_entrega: </b>${val.fecha_entrega}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}



// 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.


async rejectedRequestsIn2009Desing() {
    let data = await rejectedRequestsIn2009()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Pedidos rechazados 2009</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_solicitud: </b>${val.codigo_pedido}</p>
                        <p><b>Fecha_esperada: </b>${val.tiempo_espera}</p>
                        <p><b>Fecha_entrega: </b>${val.fecha_llegada}</p>
                        <p><b>Estado: </b>${val.status}</p>
                        <p><b>Codigo_cliente: </b>${val.codigo_cliente}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}




// 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.

async rejectedRequestsInJanuaryDesing() {
    let data = await rejectedRequestsInJanuary()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Pedidos entregados en el mes de Enero</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_solicitud: </b>${val.codigo_pedido}</p>
                        <p><b>Fecha_esperada: </b>${val.tiempo_espera}</p>
                        <p><b>Fecha_entrega: </b>${val.fecha_llegada}</p>
                        <p><b>Estado: </b>${val.estado}</p>
                        <p><b>Codigo_cliente: </b>${val.codigo_cliente}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}



// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.


async getPaypalPaymentsIn2008Desing() {
    let data = await getPaypalPaymentsIn2008()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Pedidos realizados 2008/PayPal </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${val.codigo_cliente}</p>
                        <p><b>Tipo_pago: </b>${val.metodo_de_pago}</p>
                        <p><b>Fecha_pago: </b>${val.fecha_de_pago}</p>
                        <p><b>total_pago: </b>${val.total}</p>
                        <p><b>id: </b>${val.id}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}


// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.


async getAllPayOptionsDesing() {
    let data = await getAllPayOptions()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Formas de pago </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Tipo_pago: </b>${val}</p>
            
                    </div>
                </div>
            </div>
        `
    })
}



// 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.


async getMoreThan100AndOrnamentalDesing() {
    let data = await getMoreThan100AndOrnamental()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Productos Ornamentales/Mas de 100U stock </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_producto: </b>${val.code_product}</p>
                        <p><b>Nombre: </b>${val.name}</p>
                        <p><b>Gama: </b>${val.gama}</p>
                        <p><b>Dimension: </b>${val.dimension}</p>
                        <p><b>Provedor: </b>${val.provider}</p>
                        <p><b>Stock: </b>${val.stock}</p>
                        <p><b>Precio_venta: </b>${val.price_sale}</p>
                        <p><b>id: </b>${val.id}</p>
                
                    </div>
                </div>
            </div>
        `
    })
}



// 16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

async getAllMadridClientsWith11And33CodeDesing() {
    let data = await getAllMadridClientsWith11And33Code()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes de Madrid y RV = 11 0 30 </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${val.client_code}</p>
                        <p><b>Nombre_cliente: </b>${val.client_name}</p>
                        <p><b>Celular: </b>${val.phone}</p>
                        <p><b>Direccion: </b>${val.address1}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                        <p><b>Pais: </b>${val.country}</p>
                        <p><b>Codigo_representante: </b>${val.code_employee_sales_manager}</p>
                        <p><b>id: </b>${val.id}</p>
                
                    </div>
                </div>
            </div>
        `
    })
}




// 2. 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

async getClientsNameDesing() {
    let data = await getClientsName()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes con sus representantes de ventas </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>CodigoCliente: </b>${val.codigo_cliente}</p>
                        <p><b>NombreCliente: </b>${val.nombre_cliente}</p>
                        <p><b>NombreRepresentante: </b>${val.nombre_representante}</p>
                
                    </div>
                </div>
            </div>
        `
    })
}



// 2. 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

async getClientsDesing() {
    let data = await getClients()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes que hayan realizado pagos con sus representantes de ventas </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>NombreCliente: </b>${val.nombre_cliente}</p>
                        <p><b>NombreRepresentante: </b>${val.nombre_representante}</p>
                
                    </div>
                </div>
            </div>
        `
    })
}



// 2. 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

async getClientsNoPayDesing() {
    let data = await getClientsNoPay()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes que no hayan realizado pagos con sus representantes de ventas </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>NombreCliente: </b>${val.nombreCliente}</p>
                        <p><b>NombreRepresentante: </b>${val.nombreRepresentante}</p>
                
                    </div>
                </div>
            </div>
        `
    })
}




// 2. 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

async getClientsPayDesing() {
    let data = await getClientsPay()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes con sus representantes de ventas y la ciudad de la oficina (pagos) </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>NombreCliente: </b>${val.nombreCliente}</p>
                        <p><b>NombreRepresentante: </b>${val.nombreRepresentante}</p>
                        <p><b>CiudadOficina: </b>${val.ciudadOficinaRepresentante}</p>
                
                    </div>
                </div>
            </div>
        `
    })
}



// 2. 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

async getClientNoPayAndSMDesing() {
    let data = await getClientNoPayAndSM()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes con sus representantes de ventas y la ciudad de la oficina (no pagos) </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>NombreCliente: </b>${val.nombreCliente}</p>
                        <p><b>NombreRepresentante: </b>${val.nombreRepresentante}</p>
                        <p><b>CiudadOficina: </b>${val.ciudadOficinaRepresentante}</p>
                
                    </div>
                </div>
            </div>
        `
    })
}


// 2. 6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.

async getOfficesWithClientsFromFuenlabradaDesing() {
    let data = await getOfficesWithClientsFromFuenlabrada()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Direccion de oficinas con clientes en Fuenlabrada</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo_oficina: </b>${val.code_office}</p>
                        <p><b>Direccion_1: </b>${val.address}</p>
                        <p><b>Direccion_2: </b>${val.address2}</p>
                
                    </div>
                </div>
            </div>
        `
    })
}


// 2. 7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.


async getAllClientsAndRepresentSalesOfficesDesing() {
    let data = await getAllClientsAndRepresentSalesOffices()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes, representantes de venta y oficina  </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>NombreCliente: </b>${val.nombre_cliente}</p>
                        <p><b>NombreRepresentante: </b>${val.nombre_representante}</p>
                        <p><b>CiudadOficina: </b>${val.ciudad_oficina_representante}</p>
                    
                    </div>
                </div>
            </div>
        `
    })
}


// 2. 8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

async getAllEmployeesWithBossDesing() {
    let data = await getAllEmployeesWithBoss()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Empleados con sus jefes  </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>NombreEmpleado: </b>${val.nombreEmpleado}</p>
                        <p><b>NombreJefe: </b>${val.nombreJefe}</p>
                    
                    </div>
                </div>
            </div>
        `
    })
}



// 2. 9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.



async getAllEmployeesWithBossAndBossDesing() {
    let data = await getAllEmployeesWithBossAndBoss()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Empleados con sus jefes y el jefe de sus jefes  </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>NombreEmpleado: </b>${val.nombreEmpleado}</p>
                        <p><b>NombreJefe: </b>${val.nombreJefe}</p>
                        <p><b>NombreJefedelJefe: </b>${val.nombreJefedelJefe}</p>


                    
                    </div>
                </div>
            </div>
        `
    })
}




// 2. 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.



async getAllClientsWithLateRequestsDesing() {
    let data = await getAllClientsWithLateRequests()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Clientes que no se les ha entregado a tiempo pedidos  </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>NombreCliente: </b>${val.nombreCliente}</p>




                    
                    </div>
                </div>
            </div>
        `
    })
}



// 2. 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.


async getAllGamasDesing() {
    let data = await getAllGamas()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Gamas de producto compradas  </div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>CodigoCliente: </b>${val.client_code}</p>
                        <p><b>NombreCliente: </b>${val.client_name}</p>
                        <p><b>GamasCompradas: </b>${val.boughtGamas}</p>



                    
                    </div>
                </div>
            </div>
        `
    })
}




static get observedAttributes() {
    return ["logic"];
}
attributeChangedCallback(name, old, now) {
    if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()
    if(name=="logic" && now=="office_2") this.getAllOfficesFromSpainCityAndMovilDesing()
    if(name=="logic" && now=="employees_3") this.getAllEmployeesWithBossAndCodeSevenDesing()
    if(name=="logic" && now=="employees_4") this.getBossFullNameAndEmailDesing()
    if(name=="logic" && now=="employees_5") this.getAllNotRVDesing()
    if(name=="logic" && now=="clients_6") this.getSpainClientsDesing()
    if(name=="logic" && now=="requests_7") this.getAllStatusDesing()
    if(name=="logic" && now=="payments_8") this.getAllClientsBefore2008Desing()
    if(name=="logic" && now=="requests_9") this.getNotInTimeDesing()
    if(name=="logic" && now=="requests_10") this.getTwoDaysBeforeDesing()
    if(name=="logic" && now=="requests_11") this.getAllRejected2009Desing()
    if(name=="logic" && now=="requests_12") this.rejectedRequestsInJanuaryDesing()
    if(name=="logic" && now=="payments_13") this.getPaypalPaymentsIn2008Desing()
    if(name=="logic" && now=="payments_14") this.getAllPayOptionsDesing()
    if(name=="logic" && now=="product_15") this.getMoreThan100AndOrnamentalDesing()
    if(name=="logic" && now=="clients_16") this.getAllMadridClientsWith11And33CodeDesing()
    if(name=="logic" && now=="clients_17") this.getClientsNameDesing()
    if(name=="logic" && now=="clients_18") this.getClientsPayDesing()
    if(name=="logic" && now=="clients_19") this.getClientNoPayDesing()
    if(name=="logic" && now=="clients_20") this.getClientsPayDesing()
    if(name=="logic" && now=="clients_21") this.getClientNoPayAndSMDesing()
    if(name=="logic" && now=="office_22") this.getOfficesWithClientsFromFuenlabradaDesing()
    if(name=="logic" && now=="clients_23") this.getAllClientsAndRepresentSalesOfficesDesing()
    if(name=="logic" && now=="employees_24") this.getAllEmployeesWithBossDesing()
    if(name=="logic" && now=="employees_25") this.getAllEmployeesWithBossAndBossDesing()
    if(name=="logic" && now=="clients_26") this.getAllClientsWithLateRequestsDesing()
    if(name=="logic" && now=="gama_27") this.getAllGamasDesing()







    


















    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // V
    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    // if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing()

    


    
}}