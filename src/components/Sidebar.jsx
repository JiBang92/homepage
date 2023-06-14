import { technologies } from "../data/data";
import Tilt from "react-parallax-tilt";

const Sidebar = () => {
  const scale = 1.2;

  return (
    <div className="flex flex-col justify-center items-center">
      {technologies.map((tech) => (
        <Tilt
          key={tech.name}
          scale={scale}
          transitionSpeed={2500}
          className="flex justify-center items-center bg-transparentWhite rounded-3xl z-[999] w-[75%] my-[20px]"
        >
          <img
            className="rounded-3xl bg-transparentWhite p-[20px]"
            src={tech.icon}
            alt={tech.name}
            width="100%"
            height="auto"
          />
        </Tilt>
      ))}
    </div>
  );
};

export default Sidebar;
