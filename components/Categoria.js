import Image from "next/image";
import useRestaurant from "@/hooks/useRestaurant";

const Categoria = ({ categoria }) => {
  const { handleClickCategoria, categoriaActual } = useRestaurant();

  const { nombre, icono, id } = categoria;

  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-blue-200" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-blue-200`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Imagen Icono ${nombre}`}
        className="mr-5"
      />

      <button
        type=""
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
