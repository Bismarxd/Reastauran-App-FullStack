const productos = [
  {
    nombre: "Majadito de charque",
    precio: 25.00,
    imagen: "1_Majadito con charque",
    categoriaId: 1
  },
  {
    nombre: "Pollo al horno con papas",
    precio: 20.00,
    imagen: "1_Pollo al horno con papas",
    categoriaId: 1
  },
  {
    nombre: "Lomo de res a la parrilla",
    precio: 30.00,
    imagen: "1_Lomo de res a la parrilla",
    categoriaId: 1
  },
  {
    nombre: "Trucha frita con arroz",
    precio: 28.00,
    imagen: "1_Trucha frita con arroz",
    categoriaId: 1
  },
  {
    nombre: "Locro de gallina",
    precio: 22.00,
    imagen: "1_Locro de gallina.png",
    categoriaId: 1
  },
  {
    nombre: "Chicharrón de cerdo con mote",
    precio: 26.00,
    imagen: "1_Chicharrón de cero con mote",
    categoriaId: 1
  },
  {
    nombre: "Ensalada mixta con pollo",
    precio: 18.00,
    imagen: "1_Ensalada mixta con pollo",
    categoriaId: 1
  },
  {
    nombre: "Sopa de maní",
    precio: 18.00,
    imagen: "1_Sopa de maní.jpg",
    categoriaId: 1
  },
  {
    nombre: "Charquekan",
    precio: 22.00,
    imagen: "1_Charquekan.jpg",
    categoriaId: 1
  },
  {
    nombre: "Chuleta de cerdo con ensalada",
    precio: 28.00,
    imagen: "1_Chuleta de cerdo con ensalada.jpg",
    categoriaId: 1
  },
  {
    nombre: "Seco de res con arroz y papas",
    precio: 30.00,
    imagen: "1_Seco de res con arroz y papas.jpg",
    categoriaId: 1
  },
  {
    nombre: "Fricasé de pollo",
    precio: 24.00,
    imagen: "1_Fricasé de pollo.jpg",
    categoriaId: 1
  },
  {
    nombre: "Hamburguesa tradicional con papas fritas",
    precio: 25.00,
    imagen: "4_Hamburguesa tradicional con papas fritas.jpg",
    categoriaId: 4
  },
  {
    nombre: "Lomito sandwich con ensalada",
    precio: 22.00,
    imagen: "4_Lomito sandwich con ensalada.jpg",
    categoriaId: 4
  },
  {
    nombre: "Hot dogs con salsas y papas fritas",
    precio: 18.00,
    imagen: "4_Hot dogs con salsas y papas fritas.jpg",
    categoriaId: 4
  },
  {
    nombre: "Sandwich de chola con ensalada",
    precio: 20.00,
    imagen: "4_Sandwich de chola con ensalada.jpg",
    categoriaId: 4
  },
  {
    nombre: "Empanadas de carne y queso",
    precio: 15.00,
    imagen: "4_Empanadas de carne y queso.jpg",
    categoriaId: 4
  },
  {
    nombre: "Pizza de jamón y champiñones",
    precio: 28.00,
    imagen: "4_Pizza de jamón y champiñones.jpg",
    categoriaId: 4
  },
  {
    nombre: "Pollo a la broaster con papas fritas",
    precio: 24.00,
    imagen: "4_Pollo a la broaster con papas fritas.jpg",
    categoriaId: 4
  },
  {
    nombre: "Choripán con chimichurri y ensalada",
    precio: 15.00,
    imagen: "4_Choripán con chimichurri y ensalada.jpg",
    categoriaId: 4
  },
  {
    nombre: "Tacos de carne con guacamole y nachos",
    precio: 22.00,
    imagen: "4_Tacos de carne con guacamole y nachos.jpg",
    categoriaId: 4
  },
  {
    nombre: "Wrap de pollo con vegetales y papas fritas",
    precio: 20.00,
    imagen: "4_Wrap de pollo con vegetales y papas fritas.jpg",
    categoriaId: 4
  },
  {
    nombre: "Salteñitas de pollo y papa",
    precio: 12.00,
    imagen: "4_Salteñitas de pollo y papa.jpg",
    categoriaId: 4
  },
  {
    nombre: "Sandwich de pollo a la plancha con papas fritas",
    precio: 18.00,
    imagen: "4_Sandwich de pollo a la plancha con papas fritas.png",
    categoriaId: 4
  },
  {
    nombre: "Picante de pollo en pan con ensalada",
    precio: 22.00,
    imagen: "4_Picante de pollo en pan con ensalada.jpg",
    categoriaId: 4
  },
  {
    nombre: "Nachos con queso y salsa de frijoles",
    precio: 16.00,
    imagen: "4_Nachos con queso y salsa de frijoles.jpg",
    categoriaId: 4
  },
  {
    nombre: "Café con leche",
    precio: 4.00,
    imagen: "6_Café con leche.jpg",
    categoriaId: 6
  },
  {
    nombre: "Té",
    precio: 4.00,
    imagen: "6_Té.jpg",
    categoriaId: 6
  },
  {
    nombre: "Chocolate caliente",
    precio: 5.00,
    imagen: "6_Chocolate caliente.jpg",
    categoriaId: 6
  },
  {
    nombre: "Api con pastel",
    precio: 10.00,
    imagen: "6_Api con pastel.jpg",
    categoriaId: 6
  },
  {
    nombre: "Cocoa",
    precio: 8.00,
    imagen: "6_Cocoa.jpg",
    categoriaId: 6
  },
  {
    nombre: "Mate",
    precio: 6.00,
    imagen: "6_Mate.jpg",
    categoriaId: 6
  },
  {
    nombre: "Chicha",
    precio: 5.00,
    imagen: "2_Chicha.jpg",
    categoriaId: 2
  },
  {
    nombre: "Mocochinchi",
    precio: 4.00,
    imagen: "2_Mocochinchi.jpg",
    categoriaId: 2
  },
  {
    nombre: "Gaseosa",
    precio: 4.00,
    imagen: "2_Gaseosa.jpg",
    categoriaId: 2
  },
  {
    nombre: "Refresco de quinua",
    precio: 6.00,
    imagen: "2_Fresco de quinua.jpg",
    categoriaId: 2
  },
  {
    nombre: "Fresco de cebada",
    precio: 5.00,
    imagen: "2_Fresco de cebada.jpg",
    categoriaId: 2
  },
  {
    nombre: "Fresco de uva",
    precio: 4.00,
    imagen: "2_Fresco de uva.jpg",
    categoriaId: 2
  },
  {
    nombre: "Cerveza Paceña",
    precio: 8.00,
    imagen: "2_Cerveza Paceña.jpg",
    categoriaId: 2
  },
  {
    nombre: "Singani Sour",
    precio: 10.00,
    imagen: "2_Singani Sour.jpg",
    categoriaId: 2
  },
  {
    nombre: "Sopa de maní",
    precio: 12.00,
    imagen: "5_Sopa de maní.jpg",
    categoriaId: 5
  },
  {
    nombre: "Plato paceño",
    precio: 15.00,
    imagen: "5_Plato paceño.jpg",
    categoriaId: 5
  },
  {
    nombre: "Sajta de papalisa",
    precio: 12.00,
    imagen: "5_Sajta de papalisa.jpg",
    categoriaId: 5
  },
  {
    nombre: "Pesque",
    precio: 8.00,
    imagen: "5_Pesque.png",
    categoriaId: 5
  },
  {
    nombre: "Ensalada de quinua",
    precio: 8.00,
    imagen: "5_Ensalada de quinua.jpg",
    categoriaId: 5
  },
  {
    nombre: "Quesillo",
    precio: 6.00,
    imagen: "3_Quesillo.jpg",
    categoriaId: 3
  },
  {
    nombre: "Salteñas",
    precio: 6.00,
    imagen: "3_Salteñas.jpg",
    categoriaId: 3
  },
  {
    nombre: "Sonso",
    precio: 5.00,
    imagen: "3_Sonso.jpg",
    categoriaId: 3
  },
  {
    nombre: "Helado de canela",
    precio: 4.00,
    imagen: "3_Helado de canela.jpg",
    categoriaId: 3
  },
  {
    nombre: "Arroz con leche",
    precio: 4.00,
    imagen: "3_Arroz con leche.jpg",
    categoriaId: 3
  },
  {
    nombre: "Mazamorra",
    precio: 5.00,
    imagen: "3_Mazamorra.jpg",
    categoriaId: 3
  },
  {
    nombre: "Tawa tawas",
    precio: 6.00,
    imagen: "3_Tawa tawas.jpg",
    categoriaId: 3
  },
  {
    nombre: "Torta",
    precio: 7.00,
    imagen: "3_Torta.jpg",
    categoriaId: 3
  },
  {
    nombre: "Relleno de papa",
    precio: 4.00,
    imagen: "3_Relleno de papa.png",
    categoriaId: 3
  },
  {
    nombre: "Sopaipillas",
    precio: 5.00,
    imagen: "3_Sopaipillas.jpg",
    categoriaId: 3
  },
  {
    nombre: "Empanadas",
    precio: 4.00,
    imagen: "3_Empanadas.jpg",
    categoriaId: 3
  }
]

export {
    productos 
}