import Image from "next/image"
import { formatearDinero } from "@/helpers";
import useRestaurant from "@/hooks/useRestaurant";

const Producto = ({producto}) => {

  const {nombre, imagen, precio} = producto

  const { handleSetProducto, handleChangeModal } = useRestaurant();

  return (
    <div className="border p-3">
      <Image
        width={400}
        height={400}
        src={`/assets/img/${imagen}`}
        alt={`imagen ${nombre}`}
        priority
      />

      <div className="p-5">
        <h3 className="text-5xl font-bold font-mono text-blue-950">{nombre}</h3>
        <p className="mt-8 text-6xl font-black text-blue-800">
          {formatearDinero(precio)}
        </p>

        <button
          type="button"
          className="mt-10 w-full bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-900 hover:to-blue-500  text-white font-bold p-4 rounded shadow-md uppercase"
          onClick={() => {
              handleSetProducto(producto)
              handleChangeModal()
          }}
        >
          Agregar Pedido
        </button>
      </div>
    </div>
  );
}

export default Producto