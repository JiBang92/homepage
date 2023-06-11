import {
  Navbar,
  Sidebar,
  About,
  Credentials,
  Projects,
  Contact,
  Footer,
} from "./components";
import { Typography, useMediaQuery } from "@mui/material";

function App() {
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <div className="p-[25px] bg-[transparent]">
        <div className="flex flex-col justify-center items-center text-[white] h-[250px]">
          <Navbar />
        </div>

        <div className="flex flex-row flex-nowrap justify-between mt-[50px]">
          {!isMobile ? (
            <div className="flex flex-col w-[300px]">
              <Sidebar />
            </div>
          ) : null}

          <div className="flex flex-col w-[100%] text-[white]">
            <About />
            <div className="flex justify-end mt-[25px]">
              <Credentials />
            </div>

            <Projects />
            <div className="flex justify-center items-center">
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {!isMobile ? (
        <>
          <div className="gradient-white" />
          <div className="gradient-pink" />
          <div className="gradient-blue" />
          <div className="gradient-white2" />
          <div className="gradient-pink2" />
          <div className="gradient-blue2" />
        </>
      ) : null}
    </>
  );
}

export default App;
