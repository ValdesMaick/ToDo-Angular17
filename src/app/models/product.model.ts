/* Se usa para definir el tipo de datos de cada uno de los campos traidos de /assets/productos.ts */
export namespace NProduct {

    export interface ProductData{
        id_producto: number;
        nombre_producto: string;
        descripcion:string;
        talla:string[];
        valor: number;
        status: string;
        /* disponibilidad: disponibilidadText; */
        stock: number;
        id_categoria: string[];
        image_url: string[];
        fecha_creacion: string;
        slot: string
        color: homeConfig
        class: homeConfig
    }

    export interface homeConfig {
        status: string
    }

    /* export enum disponibilidad {
        HIGH = 1,
        MEDIUM = 2,
        LOW = 3
    }
    export enum disponibilidadText {
        HIGH = 'Disponible',
        MEDIUM = 'Ultima unidad',
        LOW = 'Agotado'
    } */

}