"use client";
import LinkButton from "./LinkButton";

const HomeHero: React.FC = () => {
  return (
    <header className="home-header overflow-x-hidden bg-slate-800 dark:bg-slate-950 text-slate-200 dark:text-slate-100">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-16 items-center relative py-28">
          <div className="flex-initial md:w-2/3 lg:w-3/6 p-5 flex flex-col gap-16">
            <div>
              <h1 className="text-slate-100">My Portfolio</h1>
              <p>
                I am best described as a digital marketer crossed with a
                programmer. I use my unique blend of talents to share engaging
                stories, create unique tools and designs, and connect people with the products and services that help them.
              </p>
            </div>
            <div className="tw-btn">
              <LinkButton url="#nav-main" className="mt-2">
                Dive In
              </LinkButton>
            </div>
          </div>
          <div className="">
            <img
              src="/me.png"
              width="400px"
              className="absolute bottom-0"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
