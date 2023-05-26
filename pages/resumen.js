import Layout from "@/layout/Layout";
import useRestaurant from "@/hooks/useRestaurant";
import ResumenProducto from "@/components/ResumenProducto";

export default function Resumen() {

  const{pedido} = useRestaurant()

  return (
    <Layout pagina="Resumen">
      <h1 className="text-6xl text-sky-950 font-serif font-bold">Resumen</h1>
      <p className="text-3xl text-sky-800 font-serif font-bold mt-8">
        Revisa el Pedido
      </p>

      {pedido.length === 0 ? (
        <p className="center">Aún no hay Pedidos</p>
      ) : (
        pedido.map( producto => (
          <ResumenProducto
            key={producto.id}
            producto={producto}
          />
        ))
      )}
    </Layout>
  );

};

