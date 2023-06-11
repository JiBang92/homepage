import { Typography, useMediaQuery } from "@mui/material";
import { jbLogo } from "../assets/images/";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <>
      {!isMobile ? (
        <div className="flex flex-row flex-nowrap justify-center items-center z-[999] bg-[transparent]">
          <img
            className="mb-[25px] mx-[25px] w-[200px] h-[200px] bg-[transparent] animate-pulse"
            src={jbLogo}
            alt="Ji Bang Logo"
          />
          <Typography variant="navbarTitle">
            Ji Bang | Full Stack Developer
          </Typography>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            className="absolute opacity-20 animate-pulse"
            src={jbLogo}
            alt="Ji Bang Logo"
            width="250px"
            height="250px"
          />
          <Typography className="z-[1]" variant="navbarTitle">
            Ji Bang
          </Typography>
          <Typography className="z-[1]" variant="body">
            Full Stack Developer
          </Typography>
        </div>
      )}
    </>
  );
};

export default Navbar;
