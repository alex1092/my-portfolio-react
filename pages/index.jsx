import { useRef } from "react";
// import Link from "next/link";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { motion } from "framer-motion";

// Local Data
import data from "../yourData";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto mb-10 dark">
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="sm:mt-10">
        <h1 className="mt-5 text-8xl  sm:text-3xl lg:text-8xl sm:pt-2 md:w-4/5 lg:w-3/5 sm:w-full">
          {/* <h1 className="mt-5 text-8xl sm:text-3xl md:text-8xl sm:p-2 w-auto text-bold  sm:w-full md:w-4/5"> */}
          {data.headerTaglineOne}
          <motion.div
            animate={{ rotate: [0, 15, -20, 20, -20, 20, -15, 0, 0, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            style={{ display: "inline-block" }}
          >
            👋
          </motion.div>
          <br />
          {data.headerTaglineTwo}
        </h1>
        <Socials className="mt-5 sm:mt-2 md:mt-5" />
      </div>
      <div className="mt-40 sm:mt-10 md:mt-40 sm:p-2 md:p-0" ref={workRef}>
        <h1 className="text-2xl text-bold">Work.</h1>
        <div className="mt-10 sm:mt-5 md:mt-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {data.projects.map((project, index) => (
            <WorkCard
              key={index}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
            />
          ))}
        </div>
      </div>

      {data.services ? (
        <div className="mt-40 sm:mt-2 md:mt-40 sm:p-2 md:p-0">
          <h1 className="text-2xl text-bold">Services.</h1>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-40 sm:mt-2 md:mt-40 sm:p-2 md:p-0" ref={aboutRef}>
        <h1 className="text-2xl text-bold">About.</h1>
        <p className="m-5 sm:m-0 md:m-5 sm:mt-2 md:ml-0 ml-0 text-3xl sm:text-xl md:text-3xl w-3/5 sm:w-full md:w-3/5">
          {data.aboutpara}
        </p>
      </div>
      <div className="mt-40 sm:mt-5 md:mt-40 sm:p-2 md:p-0">
        <h1 className="text-2xl text-bold">Contact.</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10 sm:mt-2 md:mt-10 sm:p-2 md:p-0">
        Made With ❤ by
        <a className="underline underline-offset-1">Alexander Little</a>
      </h1>
    </div>
  );
}
