//contact form view using nextjs and tailwindcss
import React from "react";
import { useTranslations } from "next-intl";
export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url(../image/bd-contact.svg)] bg-cover bg-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-[#4831d4] lg:text-8xl">
          {" "}
          {t("title")}{" "}
        </h1>
        <p className="mt-3 text-2xl max-w-4xl lg:text-3xl">{t("subtitle")}</p>

        {/* mail form */}
        <div className="flex flex-col items-center justify-center mt-6">
          <form
            className="flex flex-col items-center justify-center"
            action="https://formsubmit.co/8140357591c670e5018a4c20a5b93710"
            method="POST"
          >
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="name" className="text-2xl text-[#4831d4]">
                {t("form.name")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 p-2 rounded-lg w-96"
                required
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="email" className="text-2xl text-[#4831d4]">
                {t("form.email")}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 p-2 rounded-lg w-96"
                required
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="message" className="text-2xl text-[#4831d4]">
                {t("form.message")}
              </label>
              <textarea
                name="message"
                id="message"
                className="border-2 p-2 rounded-lg w-96"
                required
              />
            </div>
            <button
              type="submit"
              className="border-2 p-2 rounded-lg w-96 mt-4 hover:bg-blue-600 focus:bg-blue-600"
            >
              {t("form.send")}
            </button>
          </form>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://www.linkedin.com/in/florian-pichon-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:bg-opacity-80  backdrop-blur-md hover:bg-white focus:bg-opacity-80 focus:backdrop-blur-md transition-all hover:text-blue-700"
          >
            <h3 className="text-2xl font-bold flex items-center">
              Linkedin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="m-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
              </svg>
              &rarr;
            </h3>
            <p className="mt-4 text-xl">{t("social.linkedin")}</p>
          </a>
          <a
            href="https://www.github.com/florianDevv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:bg-opacity-80 backdrop-blur-md hover:bg-white focus:bg-opacity-80 focus:backdrop-blur-md transition-all hover:text-blue-700"
          >
            <h3 className="text-2xl font-bold flex items-center">
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="m-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {/* ... (GitHub SVG path data) */}
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              &rarr;
            </h3>
            <p className="mt-4 text-xl">{t("social.github")}</p>
          </a>
        </div>
      </main>
    </div>
  );
}
