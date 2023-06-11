import { Typography } from "@mui/material";
import { portfolio } from "../data/data";
import Overlay from "./overlay";

const Projects = () => {
  return (
    <div className="mt-[50px] z-[999] bg-[transparent]">
      <div className="flex flex-col justify-center lg:ml-[20px] bg-transparentWhite rounded-3xl md:w-full lg:w-[50%] p-[25px]">
        <Typography variant="bodyTitle">Projects</Typography>
        <Typography variant="body">
          Check out how my projects have improved as I learn to integrate more
          features!
        </Typography>
      </div>
      <div className="flex flex-wrap justify-around bg-[transparent]">
        {portfolio.map((project) => (
          <div
            key={project.title}
            className="relative flex flex-col justify-between w-[650px] h-[325px] my-[25px] mr-[10px] bg-[white] border-4 border-solid border-[gray] rounded-md hover:cursor-pointer overflow-hidden"
          >
            <img
              className="block h-auto w-full"
              src={project.img}
              alt={project.title}
            />
            <Overlay
              title={project.title}
              stack={project.stack}
              description={project.description}
              link={project.link}
              github={project.githubURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
