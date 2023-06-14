import { Typography } from "@mui/material";

const About = () => {
  const scroll = () => {
    window.scrollTo({
      top: 925,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-between items-start md:w-full lg:w-[75%] p-[25px] bg-transparentWhite my-[25px] rounded-3xl z-[999]">
      <Typography variant="bodyTitle">About Me</Typography>
      <Typography variant="body" sx={{ margin: "10px 0" }}>
        Hello, my name is Ji Bang!
      </Typography>
      <Typography variant="body" sx={{ margin: "10px 0" }}>
        Who knew that Full Stack Development could be so rewarding? As a
        maturing developer, it is a pleasure learning how many small details and
        how much time is invested into creating apps and definitely increased my
        appreciation for developers of all fields.
      </Typography>
      <button
        className="border-2 border-white rounded my-[15px] p-[5px]"
        onClick={scroll}
      >
        <Typography variant="body">View Projects</Typography>
      </button>
    </div>
  );
};

export default About;
