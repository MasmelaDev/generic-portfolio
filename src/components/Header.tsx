import Link from "next/link";
export const Header = () => {
  return (
    <header className="px-1 p-3 md:p-8 absolute bg-[#111] w-full flex justify-center">
      <nav>
        <ul className="flex font-semibold gap-10 ">
          <li className="border-[#ffb400] border-b-2 text-lg pb-1">
            <Link href={"#about-me"}>Sobre mi</Link>
          </li>

          <li className="border-[#ffb400] border-b-2 text-lg pb-1">
            <Link href={"#projects"}>Proyectos</Link>
          </li>
          <li className="border-[#ffb400] border-b-2 text-lg pb-1">
            <Link href={"#contact"}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
