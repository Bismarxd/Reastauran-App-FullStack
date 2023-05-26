import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { formatearDinero } from "@/helpers";

export default function Orden({orden}) {
  
  const {id, nombre, total, pedido}  = orden

  const completarOrden = async () => {
    try {
      await axios.post(`api/ordenes/${id}`)
      toast.success('Orden Lista')
      
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div className="flex flex-col border p-10 space-y-5 mt-8 bg-sky-950 text-white">
      <h3 className="text-3xl  font-serif font-bold">Orden: {id}</h3>
      <p className="text-3xl  font-serif font-bold mt-8">Cliente: {nombre}</p>

      <div>
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${platillo.imagen}`}
                alt={`Imagen ${platillo.nombre}`}
              />
            </div>

            <div className="p-5 space-y-2">
              <h2 className="text-5xl font-extralight">{platillo.nombre}</h2>
              <p className="text-2xl mt-3 font-serif">
                Cantidad: {platillo.cantidad}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-10 text-gray-50">
        <p htmlFor="total" className="block font-bold mb-2 text-5xl">
          Total a Pagar:{" "}
          <span className="font-black text-6xl">{formatearDinero(total)}</span>
        </p>

        <button 
          className="bg-emerald-950 hover:bg-emerald-700 text-white uppercase font-bold p-8 rounded 
          "
          onClick={completarOrden}
          >
          Completar Orden
        </button>
      </div>
    </div>
  );
}
