import { Typography, useMediaQuery } from "@mui/material";

const About = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");

  const scroll = () => {
    window.scrollTo({
      top: 925,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-between items-start md:w-full lg:w-[75%] p-[25px] bg-transparentWhite my-[25px] rounded-3xl z-[999]">
      <Typography variant="bodyTitle">About Me</Typography>
      <Typography variant="body">Hello, my is Ji Bang!</Typography>
      <Typography variant="body">
        Fullstack Development is teaching me the enjoyment of building upon what
        I know, as well as the excitement when newly learned components are
        successfully integrated into projects. As you will see through some of
        my projects, I have learned the basic skills necessary to build a fully
        functioning MERN application, as well as integrate popular libraries and
        packages.
      </Typography>
      <button
        className="animate-bounce border-2 border-white rounded my-[15px] p-[5px]"
        onClick={scroll}
      >
        <Typography variant="body">View Projects</Typography>
      </button>
    </div>
  );
};

export default About;
