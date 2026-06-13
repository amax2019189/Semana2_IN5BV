/*
    Objetivo:

        1. Hacer una app desde consola para una tienda
        2. Que pueda almacenar datos
        3. Que pueda mostrar datos
        4. Que pueda editar datos
        5. Que pueda eliminar datos
        6. Que sea interactivo
        7. Que este en constante ejecución
*/

import promptSync from "prompt-sync";
import { createProduct } from "./services/ProductServices";

const prompt = promptSync();

const readNumber = (message: string): number => {
    return Number(prompt(message));
};

const create = (): void => {
    const name = prompt("Ingrese el nombre del producto: ");
    const price = readNumber("Ingrese el precio: ");
    const stock = readNumber("Ingrese el stock: ");

    if (!name || price <= 0 || stock < 0) {
        console.log("Datos inválidos. Intente nuevamente.");
        return;
    }

    const product = createProduct(name, price, stock);

    console.log("Producto creado correctamente.");
    console.log(product);
}

create();