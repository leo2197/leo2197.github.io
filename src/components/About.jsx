import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          About Leo
        </p>

        <AnimatedTitle
          title="Lear<b>n</b>ing by <br /> building real pr<b>o</b>jects"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>大二计算机专业学生，正在把学习变成可运行的作品。</p>
          <p className="text-gray-500">
            目前聚焦 Web 开发、Python、AI 工具和数据结构；我喜欢用简洁的界面、
            清楚的工作流和一点动效，把想法变成可以被访问、被验证的项目。
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Abstract background for Leo's personal site"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
