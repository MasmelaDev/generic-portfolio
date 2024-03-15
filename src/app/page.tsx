import { Header } from "@/components/Header";
import { AboutMe } from "@/components/about-me";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full ">
        <AboutMe />
        <section className="flex flex-col gap-5 w-full min-h-screen">
          <h2 className="text-4xl font-extrabold px-2" id="projects">
            Proyectos
          </h2>
          <div className="flex justify-center gap-10 flex-wrap">
            <div className="w-[300px] h-[400px] bg-[#555] rounded-md"></div>
            <div className="w-[300px] h-[400px] bg-[#555] rounded-md"></div>
            <div className="w-[300px] h-[400px] bg-[#555] rounded-md"></div>
            <div className="w-[300px] h-[400px] bg-[#555] rounded-md"></div>
            <div className="w-[300px] h-[400px] bg-[#555] rounded-md"></div>
            <div className="w-[300px] h-[400px] bg-[#555] rounded-md"></div>
          </div>
        </section>
        <section className="flex flex-col gap-5 w-full min-h-screen pt-10 pb-5">
          <h2 className="text-4xl  font-extrabold mb-10 px-2" id="contact">
            Contacto
          </h2>
          <section className="flex flex-wrap gap-10 justify-center">
            <article className="w-[200px] shadow-lg shadow-black h-[160px]  bg-[#333] rounded-md flex flex-col items-center">
              <div className="border-2 border-[#111] bg-[#333] rounded-full p-3 relative -top-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffb400"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </div>
              <h3 className="text-[#999] font-semibold ">Telefono</h3>
              <p className=" font-medium text-lg pt-3">+57 316 0401061</p>
            </article>

            <article className="w-[200px] shadow-lg shadow-black h-[160px]  bg-[#333] rounded-md flex flex-col items-center">
              <div className="border-2 border-[#111] bg-[#333] rounded-full p-3 relative -top-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffb400"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </div>
              <h3 className="text-[#999] font-semibold ">Email</h3>
              <Link className="font-medium text-lg pt-3" href={""}>
                salacho@gmail.com
              </Link>
            </article>
            <article className="w-[200px] shadow-lg shadow-black h-[160px]  bg-[#333] rounded-md flex flex-col items-center">
              <div className="border-2 border-[#111] bg-[#333] rounded-full p-3 relative -top-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffb400"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin "
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </div>
              <h3 className="text-[#999] font-semibold ">Linkedin</h3>
              <Link className="font-medium text-lg pt-3" href={""}>
                Alejandro Salazar
              </Link>
            </article>
            <article className="w-[200px] shadow-lg shadow-black h-[160px]  bg-[#333] rounded-md flex flex-col items-center">
              <div className="border-2 border-[#111] bg-[#333] rounded-full p-3 relative -top-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffb400"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-social"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M12 7l0 4" />
                  <path d="M6.7 17.8l2.8 -2" />
                  <path d="M17.3 17.8l-2.8 -2" />
                </svg>
              </div>
              <h3 className="text-[#999] font-semibold">Redes sociales</h3>
              <div className="flex gap-2 pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
