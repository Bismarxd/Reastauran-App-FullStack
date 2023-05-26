import Image from "next/image"
import useRestaurant from "@/hooks/useRestaurant"
import Categoria from "./Categoria";

const Sidebar = () => {

  const {categorias} = useRestaurant();

  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logo"
      />

      <nav className="mt-10">{categorias.map(categoria => (
        <Categoria
          key={categoria.id}
          categoria={categoria}
        />
      ))}</nav>
    </>
  );
}

export default Sidebar