import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const heroVideos = [
  {
    name: "寄居蟹漫步",
    src: "videos/hero-hermit-crab.mp4",
  },
  {
    name: "海湾浪涌",
    src: "videos/hero-sea-waves-bay.mp4",
  },
  {
    name: "新素材",
    src: "videos/hero-new-material.mp4",
  },
  {
    name: "橙色海岸",
    src: "videos/hero-orange-beach-sunset.mp4",
  },
  {
    name: "沙滩航拍",
    src: "videos/hero-sunny-beach-flight.mp4",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = heroVideos.length;
  const nextVdRef = useRef(null);

  const getHero = (index) => heroVideos[(index - 1 + totalVideos) % totalVideos];
  const getVideoSrc = (index) => getHero(index).src;
  const nextIndex = (currentIndex % totalVideos) + 1;
  const currentHero = getHero(currentIndex);
  const nextHero = getHero(nextIndex);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos >= 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(nextIndex);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div
            className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
            aria-label="Switch hero video"
          >
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleMiniVdClick();
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Switch to ${nextHero.name}`}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  src={getVideoSrc(nextIndex)}
                  loop
                  muted
                  playsInline
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
                <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-center font-robert-regular text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Next · {nextHero.name}
                </div>
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            playsInline
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          LE<b>O</b>
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-black/35 px-4 py-2 font-robert-regular text-xs uppercase tracking-[0.22em] text-blue-50 backdrop-blur-md">
              Hero · {currentHero.name}
            </div>

            <h1 className="special-font hero-heading text-blue-100">
              bui<b>l</b>d
            </h1>

            <p className="mb-5 max-w-72 font-robert-regular text-blue-100">
              计算机专业学生 <br /> 学习前端开发、AI 工具与项目实践
            </p>

            <Button
              id="watch-trailer"
              title="View projects"
              leftIcon={<TiLocationArrow />}
              href="#projects"
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        LE<b>O</b>
      </h1>
    </div>
  );
};

export default Hero;
