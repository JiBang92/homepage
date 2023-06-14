import { Typography } from "@mui/material";

const ApiWarning = ({ project }) => {
  return (
    <div
      key={project.title}
      className="relative flex flex-col justify-between w-[650px] h-[325px] my-[25px] mr-[10px] bg-[white] border-4 border-solid border-[gray] rounded-md overflow-hidden"
    >
      <img
        className="block h-auto w-full"
        src={project.img}
        alt={project.title}
      />
      <div className="flex flex-col justify-around py-[5px] px-[20px] absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 ease-in duration-300 bg-[black] hover:opacity-100">
        <Typography variant="bodyTitle">{project.title}</Typography>
        <Typography variant="body" sx={{ marginBottom: "50px" }}>
          Sorry! This app has reached its RapidAPI usage limit.
          <br />
          Check back on or after 6/17/2023 to view this project!
          <br />
          <br />
          Please view the{" "}
          <a
            className="text-[#7dd3fc]"
            href="https://github.com/JiBang92/travel-advisor-companion-app"
            target="_blank"
            rel="noreferrer"
          >
            ReadMe
          </a>{" "}
          on GitHub in the meantime :&#41;
        </Typography>
      </div>
    </div>
  );
};

export default ApiWarning;
