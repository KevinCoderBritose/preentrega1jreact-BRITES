const productos = [
    {
        id: "producto1",
        nombre: "Zapatilla Converse Color Verde",
        descripcion: "Zapatillas comodas para caminar un rato por el parque.",
        stock: 7,
        precio: 75000,
        imagen: "/img/productoAsal.png"
    },
    {
        id: "Producto2",
        nombre: "Zapatilla Montagne",
        descripcion: "Zapatillas para largas caminatas y ir por lugares con mucho desnivel",
        stock: 27,
        precio: 55000,
        imagen: "/img/productoAsal2.png"
    },
    {
        id: "Producto3",
        nombre: "Zapatilla FACKIE X",
        descripcion: "Zapatilla casual y con cuero con detalles microperforados. ",
        stock: 2,
        precio: 78000,
        imagen: "/img/productoAsal3.jpg"
    },
    {
        id: "Producto2",
        nombre: "Zapatilla Kaisocks",
        descripcion: "Zapatillas de una procedencia inusual, con un ligero toque deportivo, comodo para correr, y andar, cuidado por donde vas, pueden suceder cosas raras",
        stock: 1,
        precio:  800000,
        imagen: "/img/productoAsal4.png"
    },
];

const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 1000);
});

export default obtenerProductos