import { useRouter } from "next/router";
import useRestaurant from "@/hooks/useRestaurant";

const pasos = [
  { paso: 1, nombre: "Pedido", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Detalles y Total", url: "/total" }
];

const Pasos = () => {



  const router = useRouter();

  const calcularProgreso = () => {
    let valor;
    if (router.pathname === "/") {
      valor = 10
    } else if (router.pathname === "/resumen") {
      valor = 50;
    } else {
      valor = 100;
    }
    

    return valor
  }



  return (
    <>
      <div className="flex justify-between mb-6">
        {pasos.map(paso => (
          <button
            className="text-2xl font-serif font-semibold"
            key={paso.paso}
            onClick={() => {
              router.push(paso.url);
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div className="rounded-full bg-cyan-700 text-xs
         leading-none h-2 text-center text-white w-20" style={{width: `${calcularProgreso()}%`}}>

        </div>
      </div>
    </>
  )
}

export default Pasos