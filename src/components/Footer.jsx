import { socialLinks } from "../data/SocialLinks";

const Footer = () => {
  return (
    <div className="w-full h-50 bg-[#21325e] flex justify-center items-center flex-col pt-2.5 text-white">
      <div className="flex flex-row gap-6 md:gap-12 justify-center items-center">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white font-medium transition-colors underline underline-offset-4"
          >
            {item.link}
          </a>
        ))}
      </div>
      <p className="text-center mt-2.5">&copy; 2026 AzimBRO</p>
    </div>
  );
};

export default Footer;
