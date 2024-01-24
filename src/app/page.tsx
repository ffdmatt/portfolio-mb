import Image from "next/image";
import Navbar from "./Components/Navbar";
import HomeHero from "./Components/HomeHero";
import Blurb from "./Components/Blurb";
import {
  BeakerIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const blurbNav = [
  {
    name: "My Experience",
    href: "/experience",
    icon: <BeakerIcon className="w-12" />,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: <BriefcaseIcon className="w-12" />,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: <DocumentTextIcon className="w-12" />,
  },
  { name: "About", href: "/contact", icon: <BeakerIcon className="w-12" /> },
  {
    name: "Web Design Work",
    href: "/web",
    icon: <BriefcaseIcon className="w-12" />,
  },
  {
    name: "Recent Projects",
    href: "/recent",
    icon: <DocumentTextIcon className="w-12" />,
  },
  {
    name: "React Apps",
    href: "/apps",
    icon: <CommandLineIcon className="w-12" />,
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full bg-blue-100 py-24 text-blue-900">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {blurbNav.map((item) => (
                <Blurb
                  key={item.name}
                  icon={item.icon}
                  headline={item.name}
                  url={item.href}
                  className="border-slate-300 bg-slate-100"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
