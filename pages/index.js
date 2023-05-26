import Layout from "@/layout/Layout";
import useRestaurant from "@/hooks/useRestaurant";
import Producto from "@/components/Producto";

export default function Home() {

  const {categoriaActual} = useRestaurant()

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-6xl text-sky-950 font-serif font-bold">
        {categoriaActual?.nombre}
      </h1>
      <p className="text-3xl text-sky-800 font-serif font-bold mt-8">
        Crea tu pedido personalizado
      </p>

      <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
