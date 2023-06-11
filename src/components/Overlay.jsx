import { Typography } from "@mui/material";
import {
  GitHub as GitHubIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";

const Overlay = ({ title, stack, link, github, description }) => {
  return (
    <div className="flex flex-col justify-around py-[5px] px-[20px] absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 ease-in duration-300 bg-[black] hover:opacity-100">
      <Typography variant="bodyTitle">{title}</Typography>
      <div className="flex flex-row flex-wrap justify-around">
        {stack.map((item) => (
          <div
            key={`stack-item-${item}`}
            className="border-2 border-solid border-[grey] text-[white] py-[5px] px-[10px] rounded-2xl"
          >
            {item}
          </div>
        ))}
      </div>
      <Typography variant="body" sx={{ textAlign: "center" }}>
        {description}
      </Typography>
      <div className="flex flex-row justify-around my-[10px]">
        <a href={github} target="_blank" rel="noreferrer">
          <button type="button">
            <GitHubIcon
              sx={{ width: "40px", height: "40px", marginRight: "5px" }}
            />
            <Typography variant="body">Github Code</Typography>
          </button>
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <button type="button">
            <LanguageIcon
              sx={{ width: "40px", height: "40px", marginRight: "5px" }}
            />
            <Typography variant="body">Live Website</Typography>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Overlay;
