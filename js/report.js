// import "./components/clock.js";
import {getAllOfficesCodeAndCity}from "./module/offices.js"
import {getAllOfficesFromSpainCityAndMovil} from "./module/offices.js"
import {getAllEmployeesWithBossAndCodeServer,getBossFullNameAndEmail}from "./module/employees.js"


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