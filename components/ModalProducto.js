import { useState, useEffect } from "react";
import Image from "next/image";
import useRestaurant from "@/hooks/useRestaurant";
import { formatearDinero } from "@/helpers";

const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido, pedido } = useRestaurant();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
      //Comprobar si el modal esta en el pedido
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {

      const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id);
      setEdicion(true);
      setCantidad(productoEdicion.cantidad);
      
    }
  }, [producto, pedido])
  

  

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`Imagen ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-5xl font-bold font-mono text-blue-950">
          {producto.nombre}
        </h1>
        <p className="mt-8 text-6xl font-black text-blue-800">
          {formatearDinero(producto.precio)}
        </p>

        <div className="flex gap-4 mt-8">
          <button
            type="button"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <p className="text-3xl">{cantidad}</p>

          <button
            type="button"
            onClick={() => {
              if (cantidad >= 5) return;
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="mt-5 inline-block px-6 py-4 text-sm font-medium text-white bg-blue-950 rounded-md shadow-md hover:bg-blue-500  focus:outline-none focus:ring-2 focus:bg-blue-800  focus:ring-offset-2 uppercase"
          onClick={() => handleAgregarPedido({...producto, cantidad})}
        >
          {edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
