import { Typography } from "@mui/material";

const Credentials = () => {
  return (
    <div className="flex flex-col justify-end items-end p-[25px] z-[999] bg-transparentWhite rounded-3xl">
      <Typography variant="bodyTitle">Credentials</Typography>
      <Typography variant="body" sx={{ textAlign: "right" }}>
        Certified through MIT xPRO Professional Certificate in Coding:
        <br /> Full Stack Development with MERN
      </Typography>
      <a
        className="bg-[transparent]"
        href="https://certificates.emeritus.org/4254f717-c6a7-4d90-a91a-0a74778c249b#gs.zn58wu"
        target="_blank"
        rel="noreferrer"
      >
        <button className="animate-bounce border-2 border-white rounded my-[15px] p-[5px]">
          <Typography variant="body">View Certificate</Typography>
        </button>
      </a>
    </div>
  );
};

export default Credentials;
