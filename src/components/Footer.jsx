import { Typography } from "@mui/material";
import { jbLogo } from "../assets/images";

const Footer = () => {
  return (
    <div className="text-[white] flex flex-nowrap justify-center items-center mt-[25px]">
      <img
        src={jbLogo}
        alt="Ji Bang Logo"
        width="50px"
        height="50px"
        className="mr-[10px]"
      />
      <Typography variant="footer">
        Ji Bang 2023 | All Rights Reserved.
      </Typography>
    </div>
  );
};

export default Footer;
