import { getProjects } from "@/actions/actions";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/about-me";
import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";

export default async function Home() {
  const videos = await getProjects();
  return (
    <>
      <Header />
      <main className="w-full ">
        <AboutMe />
        <Projects mode="show" videos={videos} />
        <Contact />
      </main>
    </>
  );
}
