const ProjectItem = ({ image, name, url }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-2xl min-w-65 min-h-65 mx-10 my-10 shadow-[0px_3px_15px_rgba(0,0,0,0.2)] text-center hover:shadow-[0px_3px_15px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in cursor-pointer text-inherit no-underline"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-50 rounded-t-[15px] bg-cover bg-center bg-no-repeat"
      />
      <div className="text-2xl py-4 text-[#3e497a] font-bold">{name}</div>
    </a>
  );
};

export default ProjectItem;
