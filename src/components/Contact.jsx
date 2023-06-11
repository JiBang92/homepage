import { useRef } from "react";
import { Typography } from "@mui/material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ku2enlo",
        "template_cvbkquh",
        refForm.current,
        "i0uVb2KB7Zz23NeZ4"
      )
      .then(
        () => {
          alert("Message Successfully Sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed To Send The Message, Please Try Again");
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center p-[15px] bg-transparentWhite lg:z-[3] md:w-full lg:w-[75%] rounded-3xl mt-[25px]">
      <Typography variant="bodyTitle">Leave a Message</Typography>
      <Typography variant="body" sx={{ marginBottom: "10px" }}>
        Help me improve my skills and build real-life experiences by working
        with your team of developers!
      </Typography>

      <div className="contact-form bg-[transparent]">
        <form
          className="flex flex-row flex-wrap bg-[transparent]"
          ref={refForm}
          onSubmit={sendEmail}
        >
          <input
            className="md:w-full lg:w-[49%] my-[10px] mr-[5px] text-[white] h-[45px] p-[10px] border-2 border-solid rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="md:w-full lg:w-[49%] my-[10px] mr-[5px] h-[45px] p-[10px] border-2 border-solid rounded-lg"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <div className="flex flex-col flex-nowrap w-full bg-[transparent]">
            <textarea
              className="h-[175px] border-2 border-solid rounded-lg my-[10px] p-[10px]"
              name="message"
              placeholder="Message"
              required
            />
            <button
              className="md:w-full lg:w-[25%] my-[10px] py-[10px] border-2 border-solid border-[white] rounded-lg bg-[#0d47a1]"
              type="submit"
            >
              <Typography variant="body">SEND</Typography>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
