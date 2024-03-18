"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconPhone,
  IconMail,
  IconSocial,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
export const Contact = () => {
  return (
    <section className="flex flex-col gap-5 w-full pt-10 pb-10">
      <h2 className="text-4xl font-extrabold px-2 mb-5" id="projects">
        Contactos
      </h2>
      <section className="flex flex-wrap gap-10 justify-center">
        <Cuadro
          icon={<IconPhone color="#ffb400" />}
          title="Telefono"
          content="+57 316 0401061"
          delay={0.5}
        />
        <Cuadro
          icon={<IconMail color="#ffb400" />}
          title="Email"
          content="salacho@gmail.com"
          delay={0.8}
        />
        <Cuadro
          icon={<IconBrandLinkedin color="#ffb400" />}
          title="Linkedin"
          content="Alejandro Salazar"
          delay={1.1}
        />
        <Cuadro
          icon={<IconSocial color="#ffb400" />}
          title="Redes sociales"
          delay={1.4}
        >
          <div className="flex gap-2 pt-3">
            <IconBrandFacebook />
            <IconBrandInstagram />
            <IconBrandTiktok />
          </div>
        </Cuadro>
      </section>
    </section>
  );
};

const Cuadro = ({
  icon,
  title,
  content,
  delay,
  children,
}: {
  icon: ReactNode;
  title: string;
  content?: string;
  delay: number;
  children?: ReactNode;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px", // Tweak this value as needed
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
      transition={{ delay }}
      className="w-[200px] shadow-lg shadow-black h-[160px]  bg-[#333] rounded-md flex flex-col items-center"
    >
      <div className="border-2 border-[#111] bg-[#333] rounded-full p-3 relative -top-5">
        {icon}
      </div>
      <h3 className="text-[#999] font-semibold">{title}</h3>
      {typeof content === "string" ? (
        <p className=" font-medium text-lg pt-3">{content}</p>
      ) : (
        content
      )}
      {children}
    </motion.article>
  );
};
