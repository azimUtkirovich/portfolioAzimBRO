import ProjectItem from "../components/ProjectItem";
import { projects } from "../data/Projects";

export default function Projects() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <h1 className="text-center text-[#3e497a] text-[60px] font-bold">My Personal Projects</h1>
      <div className="w-[70vw] h-auto flex flex-wrap justify-center">
        {projects.map((item) => (
          <ProjectItem key={item.id} name={item.title} image={item.img} url={item.url}/>
        ))}
      </div>
    </div>
  );
}
