import { FaEnvelope, FaGithub, FaQq } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/leo2197", icon: <FaGithub />, label: "GitHub" },
  { href: "mailto:3405333751@qq.com", icon: <FaEnvelope />, label: "Email" },
  { href: "tencent://message/?uin=3405333751", icon: <FaQq />, label: "QQ" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © Leo 2026. Built with React, Vite, Tailwind CSS and GSAP.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="mailto:3405333751@qq.com"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          3405333751@qq.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
