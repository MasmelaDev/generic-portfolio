"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col md:flex-row gap-12 h-screen items-center justify-center mt-5"
    >
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className="w-[200px] overflow-hidden border-[#ffb400] border-2 shadow-lg shadow-black md:border-none md:rounded-md rounded-full h-[200px] md:w-[330px] md:h-[400px]"
      >
        <Image
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          src={"/perfil.jpeg"}
          alt="perfil"
        />
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className="flex flex-col gap-5 items-center md:items-start"
      >
        <h1 className="text-6xl font-extrabold text-center md:text-left">
          <span className="text-[#ffb400] block">Alejandro</span> Salazar
        </h1>
        <p className=" text-center md:w-[400px] md:text-left p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit hic
          maiores praesentium, repellat dicta quos obcaecati velit omnis nemo
          aspernatur non dolorum ipsam facilis. Voluptatum voluptatibus harum
          quas numquam.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap max-w-[500px] md:gap-5">
          <div>
            <p className="flex gap-1 font-medium before:w-3 before:h-3 before:bg-[#ffb400] before:rounded-full items-center before:mr-1">
              <span className="text-[#888] font-medium">Edad:</span> 21 Años
            </p>
            <p className="flex gap-1 font-medium before:w-3 before:h-3 before:bg-[#ffb400] before:rounded-full items-center before:mr-1">
              <span className="text-[#888] font-medium">Nacionalidad:</span>
              Colombia
            </p>
          </div>
          <div>
            <p className="flex gap-1 font-medium before:w-3 before:h-3 before:bg-[#ffb400] before:rounded-full items-center before:mr-1">
              <span className="text-[#888] font-medium">Telefono:</span>+57 316
              0401061
            </p>
            <p className="flex gap-1 font-medium before:w-3 before:h-3 before:bg-[#ffb400] before:rounded-full items-center before:mr-1">
              <span className="text-[#888] font-medium">Correo:</span>{" "}
              Salacho@gmail.com
            </p>
          </div>
        </div>

        <button className="border-[#ffb400] border-2 text-[#ffb400] font-semibold px-2 py-1">
          Descargar CV
        </button>
      </motion.div>
    </section>
  );
};
