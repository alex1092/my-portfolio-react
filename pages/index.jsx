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
    <div className="container mx-auto mb-10">
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="mob:mt-10">
        <h1 className="mt-5 text-8xl  mob:text-3xl laptopl:text-8xl mob:pt-2 laptop:w-4/5 laptopl:w-3/5 mob:w-full">
          {/* <h1 className="mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 w-auto text-bold  mob:w-full laptop:w-4/5"> */}
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
        <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
      </div>
      <div
        className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={workRef}
      >
        <h1 className="text-2xl text-bold">Work.</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
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
        <div className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0">
          <h1 className="text-2xl text-bold">Services.</h1>
          <div className="mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6">
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

      <div
        className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={aboutRef}
      >
        <h1 className="text-2xl text-bold">About.</h1>
        <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5">
          {data.aboutpara}
        </p>
      </div>
      <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Contact.</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
        Made With ❤ by
        <a className="underline underline-offset-1">Alexander Little</a>
      </h1>
    </div>
  );
}
