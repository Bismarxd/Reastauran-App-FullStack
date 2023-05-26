import { useEffect, useCallback } from "react";
import Layout from "@/layout/Layout";
import useRestaurant from "@/hooks/useRestaurant";
import { formatearDinero } from "@/helpers";

export default function Total() {

  const { pedido, nombre, setNombre, colocarOrden, total } = useRestaurant();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido])
  

  

  return (
    <Layout pagina="Confirmar Pedido">
      <h1 className="text-6xl text-sky-950 font-serif font-bold">
        Confirmar Pedido
      </h1>
      <p className="text-3xl text-sky-800 font-serif font-bold mt-8">
        Confirma el pedido
      </p>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={colocarOrden}
      >
        <div className="mb-6">
          <label
            htmlFor="nombre"
            className="block text-gray-700 font-bold mb-2 text-2xl"
          >
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-slate-100 block w-1/2 py-2 px-3 leading-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="total"
            className="block text-gray-700 font-bold mb-2 text-2xl"
          >
            Total a Pagar:{" "}
            <span className="font-bold text-3xl">
              {formatearDinero(total)}
            </span>
          </label>
        </div>

        <div className="flex items-center justify-center">
          <button
            className={`${
              comprobarPedido()
                ? "bg-neutral-300"
                : "bg-blue-500 hover:bg-blue-600"
            } inline-block w-1/2 px-4 py-5 text-sm font-medium text-white  rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            type="submit uppercase`}
            disabled={comprobarPedido()}
          >
            Confirmar Pedido
          </button>
        </div>
      </form>
    </Layout>
  );
}
