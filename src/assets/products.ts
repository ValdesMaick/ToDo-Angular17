/* Json que trae la informacion de la base de datos para poder mostrarla en el body */
export const PRODUCT_DATA = [
    {
        "id_producto": 1,
        "nombre_producto": "Vestido",
        "descripcion": "Vestido corto",
        "talla": ["M", "S"],
        "valor": 1000,
        "status": "Disponible",
        "stock": 10,
        "id_categoria": ["4", "5"],
        "image_url": [
          "../../../assets/img/productos/vestido1.webp",
          "../../../assets/img/productos/vestidos/vestido2.jpg",
          "../../../assets/img/productos/vestidos/vestido3.jpg",
          "../../../assets/img/productos/vestidos/vestido4.jpg"
        ],
        "fecha_creacion": "2022-01-01T16:51:07.245Z",
        "slot": "Vestido",
        "color": {
          "status": "#3ee43e",
        },
        "class": {
          "status": "Disponible",
        }
      },
      {
        "id_producto": 2,
        "nombre_producto": "blusa",
        "descripcion": "blusa corta color rojo",
        "talla": ["L", "XS"],
        "valor": 500,
        "status": "Ultima unidad",
        "stock": 5,
        "id_categoria": ["4", "5"],
        "image_url": [
          "../../../assets/img/productos/blusa.avif",
          "../../../assets/img/productos/vestidos/blusa4.jpg",
          "../../../assets/img/productos/vestidos/blusa1.jpg",
          "../../../assets/img/productos/vestidos/blusa2.jpg"
        ],
        "fecha_creacion": "2022-02-01T16:51:07.245Z",
        "slot": "blusa",
        "color": {
          "status": "#eeee4f",
        },
        "class": {
          "status": "Ultima-unidad",
        }
      },
      {
        "id_producto": 3,
        "nombre_producto": "Top",
        "descripcion": "Top deportivo",
        "talla": ["M", ""],
        "valor": 300,
        "status": "Agotado",
        "stock": 8,
        "id_categoria": ["4", "5"],
        "image_url": [
          "../../../assets/img/productos/top.avif",
          "../../../assets/img/productos/vestidos/Top2.jpg",
          "../../../assets/img/productos/vestidos/Top1.jpg",
          "../../../assets/img/productos/vestidos/Top4.jpg"
        ],
        "fecha_creacion": "2023-05-01T16:51:07.245Z",
        "slot": "top",
        "color": {
          "status": "#ed4040",
        },
        "class": {
          "status": "Agotado",
        }
      },
      {
        "id_producto": 4,
        "nombre_producto": "Falda",
        "descripcion": "Falda midi con estampado floral",
        "talla": ["M", "L"],
        "valor": 700,
        "status": "Disponible",
        "stock": 12,
        "id_categoria": ["6"],
        "image_url": [
          "../../../assets/img/productos/falda.avif",
          "../../../assets/img/productos/faldas/falda2.jpg",
          "../../../assets/img/productos/faldas/falda3.jpg",
          "../../../assets/img/productos/faldas/falda4.jpg"
        ],
        "fecha_creacion": "2022-03-01T16:51:07.245Z",
        "slot": "Falda",
        "color": {
          "status": "#3ee43e",
        },
        "class": {
          "status": "Disponible",
        }
      },
      {
        "id_producto": 5,
        "nombre_producto": "Jeans",
        "descripcion": "Jeans ajustados de cintura alta",
        "talla": ["XS", "S"],
        "valor": 1200,
        "status": "Disponible",
        "stock": 15,
        "id_categoria": ["3", "4"],
        "image_url": [
          "../../../assets/img/productos/jean.avif",
          "../../../assets/img/productos/jeans/jeans2.jpg",
          "../../../assets/img/productos/jeans/jeans3.jpg",
          "../../../assets/img/productos/jeans/jeans4.jpg"
        ],
        "fecha_creacion": "2022-04-01T16:51:07.245Z",
        "slot": "Jeans",
        "color": {
          "status": "#3ee43e",
        },
        "class": {
          "status": "Disponible",
        }
      },
      {
        "id_producto": 6,
        "nombre_producto": "Camisa",
        "descripcion": "Camisa de rayas azul",
        "talla": ["M", ""],
        "valor": 800,
        "status": "Agotado",
        "stock": 0,
        "id_categoria": ["1", "5"],
        "image_url": [
          "../../../assets/img/productos/camisa.avif",
          "../../../assets/img/productos/camisas/camisa2.jpg",
          "../../../assets/img/productos/camisas/camisa3.jpg",
          "../../../assets/img/productos/camisas/camisa4.jpg"
        ],
        "fecha_creacion": "2022-05-01T16:51:07.245Z",
        "slot": "Camisa",
        "color": {
          "status": "#ed4040",
        },
        "class": {
          "status": "Agotado",
        }
      },
      {
        "id_producto": 7,
        "nombre_producto": "Chaqueta",
        "descripcion": "Chaqueta de cuero negra",
        "talla": ["S", "XL"],
        "valor": 2000,
        "status": "Disponible",
        "stock": 7,
        "id_categoria": ["2", "3"],
        "image_url": [
          "../../../assets/img/productos/chaqueta.avif",
          "../../../assets/img/productos/chaquetas/chaqueta2.jpg",
          "../../../assets/img/productos/chaquetas/chaqueta3.jpg",
          "../../../assets/img/productos/chaquetas/chaqueta4.jpg"
        ],
        "fecha_creacion": "2022-06-01T16:51:07.245Z",
        "slot": "Chaqueta",
        "color": {
          "status": "#3ee43e",
        },
        "class": {
          "status": "Disponible",
        }
      },
      {
        "id_producto": 8,
        "nombre_producto": "Short",
        "descripcion": "Short de mezclilla claro",
        "talla": ["", "S"],
        "valor": 600,
        "status": "Disponible",
        "stock": 18,
        "id_categoria": ["4", "6"],
        "image_url": [
          "../../../assets/img/productos/short.avif",
          "../../../assets/img/productos/shorts/short2.jpg",
          "../../../assets/img/productos/shorts/short3.jpg",
          "../../../assets/img/productos/shorts/short4.jpg"
        ],
        "fecha_creacion": "2022-07-01T16:51:07.245Z",
        "slot": "Short",
        "color": {
          "status": "#3ee43e",
        },
        "class": {
          "status": "Disponible",
        }
      },
      {
        "id_producto": 9,
        "nombre_producto": "Sweater",
        "descripcion": "Sweater de lana beige",
        "talla": ["M", "L"],
        "valor": 1500,
        "status": "Ultima unidad",
        "stock": 1,
        "id_categoria": ["2", "3"],
        "image_url": [
          "../../../assets/img/productos/Sweater.avif",
          "../../../assets/img/productos/sweaters/sweater2.jpg",
          "../../../assets/img/productos/sweaters/sweater3.jpg",
          "../../../assets/img/productos/sweaters/sweater4.jpg"
        ],
        "fecha_creacion": "2022-08-01T16:51:07.245Z",
        "slot": "Sweater",
        "color": {
          "status": "#eeee4f",
        },
        "class": {
          "status": "Ultima-unidad",
        }
      },
      {
        "id_producto": 10,
        "nombre_producto": "Abrigo",
        "descripcion": "Abrigo largo gris",
        "talla": ["XS", "S"],
        "valor": 2500,
        "status": "Ultima unidad",
        "stock": 1,
        "id_categoria": ["2"],
        "image_url": [
          "../../../assets/img/productos/abrigo.avif",
          "../../../assets/img/productos/abrigos/abrigo2.jpg",
          "../../../assets/img/productos/abrigos/abrigo3.jpg",
          "../../../assets/img/productos/abrigos/abrigo4.jpg"
        ],
        "fecha_creacion": "2022-09-01T16:51:07.245Z",
        "slot": "Abrigo",
        "color": {
          "status": "#eeee4f",
        },
        "class": {
          "status": "Ultima-unidad",
        }
      },
      {
        "id_producto": 11,
        "nombre_producto": "Zapatos",
        "descripcion": "Zapatos de tacón rojo",
        "talla": ["XS", "XL"],
        "valor": 1100,
        "status": "Agotado",
        "stock": 0,
        "id_categoria": ["7"],
        "image_url": [
          "../../../assets/img/productos/tacones.avif",
          "../../../assets/img/productos/zapatos/zapato2.jpg",
          "../../../assets/img/productos/zapatos/zapato3.jpg",
          "../../../assets/img/productos/zapatos/zapato4.jpg"
        ],
        "fecha_creacion": "2022-10-01T16:51:07.245Z",
        "slot": "Zapatos",
        "color": {
          "status": "#ed4040",
        },
        "class": {
          "status": "Agotado",
        }
      },
      {
        "id_producto": 12,
        "nombre_producto": "Bufanda",
        "descripcion": "Bufanda de lana gris",
        "talla": ["", ""],
        "valor": 300,
        "status": "Agotado",
        "stock": 0,
        "id_categoria": ["8"],
        "image_url": [
          "../../../assets/img/productos/bufanda.avif",
          "../../../assets/img/productos/accesorios/bufanda2.jpg",
          "../../../assets/img/productos/accesorios/bufanda3.jpg",
          "../../../assets/img/productos/accesorios/bufanda4.jpg"
        ],
        "fecha_creacion": "2022-11-01T16:51:07.245Z",
        "slot": "Bufanda",
        "color": {
          "status": "#ed4040",
        },
        "class": {
          "status": "Agotado",
        }
      },
      {
        "id_producto": 13,
        "nombre_producto": "Sombrero",
        "descripcion": "Sombrero de ala ancha marrón",
        "talla": ["M", "S"],
        "valor": 900,
        "status": "Ultima unidad",
        "stock": 1,
        "id_categoria": ["8"],
        "image_url": [
          "../../../assets/img/productos/sombrero.avif",
          "../../../assets/img/productos/accesorios/sombrero2.jpg",
          "../../../assets/img/productos/accesorios/sombrero3.jpg",
          "../../../assets/img/productos/accesorios/sombrero4.jpg"
        ],
        "fecha_creacion": "2022-12-01T16:51:07.245Z",
        "slot": "Sombrero",
        "color": {
          "status": "#eeee4f",
        },
        "class": {
          "status": "Ultima-unidad",
        }
      }
]