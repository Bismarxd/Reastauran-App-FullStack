import AdminLayout from "@/layout/AdminLayout"
import useSWR from "swr";
import axios from "axios";
import Orden from "@/components/Orden";

export default function Admin()
{
  const fetcher = () => axios("/api/ordenes").then(datos => datos.data);

  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {refreshInterval: 100});

  

  return (
    <AdminLayout pagina={'Administrador'}>
      <h1 className="text-6xl text-sky-950 font-serif font-bold">Administración</h1>
      <p className="text-3xl text-sky-800 font-serif font-bold mt-8">
        Administrar las ordenes
      </p>

      {data && data.length ? data.map(orden =>
        <Orden
          key={orden.id}
          orden={orden}
        />
      ) : <p>Aun no Hay Ordenes Pendientes</p>}

    </AdminLayout>
  );

}