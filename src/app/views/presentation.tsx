import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Presentation() {
  const t = useTranslations("Presentation");
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    anime({
      targets: titleRef.current,
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutElastic(1, .6)",
      duration: 1000,
      delay: 100,
      complete: () => {
        anime({
          targets: titleRef.current,
          scale: [1.1, 1],
          loop: true,
          direction: "alternate",
          easing: "easeInOutSine",
          duration: 3000,
        });
      },
    });
    anime({
      targets: subtitleRef.current,
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "easeOutElastic(1, .6)",
      duration: 1000,
      delay: 100,
    });
    anime({
      targets: imageRef.current,
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1500,
      delay: 100,
    });
  }, []);

  return (
    <section
      id="Projects"
      className="w-full h-screen flex flex-col bg-[url(../image/bd-presentation.svg)] bg-cover bg-center"
    >
      <header className="justify-center items-end self-end">
        <h2 className="text-5xl text-[#4831d4] font-bold mr-10 mt-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">
          Florian
        </h2>
      </header>
      <div className="flex flex-row justify-center items-center flex-wrap">
        <article className="flex flex-col justify-center items-center mt-52 max-w-3xl">
          <h1
            ref={titleRef}
            className=" text-7xl lg:text-8xl font-bold text-[#ccf381] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] max-w-xl text-center "
          >
            {" "}
            {t("title")}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg m-8 text-white text-center md:text-xl lg:text-2xl"
          >
            {t("subtitle")}
          </p>
        </article>
        <Image
          ref={imageRef}
          src="../images/programming.svg"
          width={500}
          height={500}
          alt={"programming"}
          className="max-w-full h-auto md:max-w-none md:h-full md:w-1/2"
        />
      </div>
    </section>
  );
}
