// 2. 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.
import { getAllproduct } from "./product.js";
import { getAllRequests } from "./requests.js";
import { getAllClients } from "./clients.js";

export const getAllGamas = async () => {
    let res = await fetch("http://localhost:5503/gama");
    let dataProductos = await getAllproduct();
    let dataRequestDetails = await res.json();
    let dataRequests = await getAllRequests();
    let dataClients = await getAllClients();
    let dataUpdate = [];

    for (let cliente of dataClients) {
        let datosCliente = {
            client_code: cliente.codigoCliente,
            client_name: cliente.nombreCliente,
            boughtGamas: new Set(),
            // code_employee_sales_manager: cliente.code_employee_sales_manager
        };

        for (let request of dataRequests) {
            if (request.code_client == cliente.client_code) {
                for (let requestDetails of dataRequestDetails) {
                    if (request.code_request == requestDetails.code_request) {
                        for (let product of dataProductos) {
                            if (requestDetails.product_code == product.code_product) {
                                let { gama } = product;
                                datosCliente.boughtGamas.add(gama);
                            }
                        }
                    }
                }
            }
        }

        datosCliente.boughtGamas = Array.from(datosCliente.boughtGamas);

        if (datosCliente.boughtGamas.length >= 1) {
            dataUpdate.push(datosCliente);
        }
    }

    return dataUpdate;
};
