import { useTranslations } from "next-intl";
import { Image } from "next/dist/client/image-component";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row flex-wrap bg-[url(../image/bd-about.svg)] bg-cover bg-center">
      <div className="flex flex-col justify-center items-center max-w-xl bg-grey-300 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-gray-100 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#4831d4]">
          {" "}
          {t("title")}
        </h1>
        <p className="text-center font-semibold text-[#3d155f] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] text-lg md:text-xl lg:text-2xl">
          {t("subtitle")}
        </p>
      </div>
      <Image
        src="../images/pro-app.svg"
        alt=""
        className="m-2"
        width={600}
        height={600}
      />
      <article className="flex flex-col  items-center justify-center ">
        <img
          className="m-1 lg:mb-16"
          src="https://github-readme-stats-hn9t.vercel.app/api?username=FlorianDevv&show_icons=true&theme=default&count-private=true&include_all_commits=true"
          alt="Profile stats"
        />
        <img
          className="m-1 lg:w-96"
          src="https://github-readme-stats-hn9t.vercel.app/api/top-langs/?username=FlorianDevv&layout=compact&langs_count=20&theme=default&show_icons=true&count-private=true"
          alt="Language stats"
        />
      </article>
    </div>
  );
}
