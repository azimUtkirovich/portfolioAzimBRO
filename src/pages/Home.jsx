import { socialLinks } from "../data/SocialLinks";

export default function Home() {
  return (
    <div className="w-full items-center text-[#3e497a]">
      <div className="about w-full h-[calc(100vh-100px)] flex flex-col justify-center items-center text-center bg-[#21325e] text-[#f0f0f0]">
        <h2 className="text-4xl md:text-7xl font-bold 2xl:text-9xl 2xl:-mt-60 text-[#e9d35b] h-12">
          {" "}
          Hi, My Name is Azim
        </h2>
        <div className="mt-10 text-[20px] w-[80%] md:w-[40%] md:text-[30px]">
          <p className="my-8 2xl:pt-15 2xl:text-4xl">A software developer with a passion for learning and creating.</p>
          <div className="flex gap-2.5 justify-center">
            {socialLinks.map((item) => (
              <a href={item.url}>
                <img src={item.img} alt={item.link} className="w-14 h-14 m-1 2xl:w-20 2xl:h-20" />
              </a>
            ))}
          </div>
        </div>
      </div>


      <div className="w-full min-h-[calc(100vh-160px)] 2xl:min-h-[calc(80vh-160px)] text-center text-4xl flex flex-col justify-center items-center py-10">
        <h1 className="text-[#3e497a] font-bold mb-8 2xl:text-8xl">Skills</h1>
        <ol className="w-[60%] space-y-12">
          <li className="space-y-2">
            <h2 className="text-[#3e497a] font-semibold text-3xl 2xl:text-6xl">Front-End</h2>
            <p className="text-[20px] text-slate-600 leading-relaxed 2xl:text-[30px]">
              ReactJS, React Router, Tailwind CSS v4, Vite, Lucide Icons, HTML5,
              CSS3, JavaScript, TypeScript
            </p>
          </li>

          <li className="space-y-2">
             <h2 className="text-[#3e497a] font-semibold text-3xl 2xl:text-6xl">
              Tools & Build Tools
            </h2>
            <p className="text-[20px] text-slate-600 leading-relaxed 2xl:text-[30px]">
              NPM, Yarn, Git, GitHub, VS Code
            </p>
          </li>

          <li className="space-y-2">
             <h2 className="text-[#3e497a] font-semibold text-3xl 2xl:text-6xl">
              Back-End & Databases
            </h2>
            <p className="text-[20px] text-slate-600 leading-relaxed 2xl:text-[30px]">
              NodeJS, ExpressJS, GraphQL, MySQL, MongoDB
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
