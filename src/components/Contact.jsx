import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Contact Leo
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild <br /> practical w<b>o</b>rk <br /> t<b>o</b>gether."
            containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <p className="mt-6 max-w-xl px-6 font-circular-web text-sm text-blue-50/70 md:text-base">
            欢迎通过邮箱联系我，也可以在 GitHub 上查看我的项目迭代。
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              title="email me"
              href="mailto:3405333751@qq.com"
              containerClass="cursor-pointer"
            />
            <Button
              title="github"
              href="https://github.com/leo2197"
              containerClass="cursor-pointer bg-yellow-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
