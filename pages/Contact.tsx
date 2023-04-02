import Slider from "@/Layout/Slider";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface Input {
  name: string;
  placeholder: string;
}
const Contact = () => {
  const dots: string[] = ["bg-pink", "bg-light-purple", "bg-light-blue"];
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const inputs: Input[] = [
    { name: "user_name", placeholder: "Your Name .." },
    { name: "user_email", placeholder: "Email .." },
    { name: "subject", placeholder: "Subject" },
  ];

  const sendEmail = (e: any) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oi0y69p",
        "template_jlptrno",
        "#form",
        "UgAGXUn0vfna_94-h"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 1500);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target?.reset();
  };

  return (
    <Slider pageColor="bg-cream">
      <section className="w-full min-h-full py-32 md:px-48 md:py-96 lg:py-128 flex justify-center items-center ">
        <div className="bg-faded-white w-1024 max-w-[100%] min-h-fit rounded-lg shadow-xl shadow-light-purple overflow-hidden">
          <article className="w-full  p-32 flex justify-between items-center bg-purple">
            <div className="flex gap-8 sm:gap-16">
              {dots.map((dot: string) => {
                return (
                  <div
                    key={dot + "-dot"}
                    className={` ${dot} w-16 h-16  rounded-full `}
                  />
                );
              })}
            </div>
            <p className="text-2xl text-white">...</p>
          </article>
          <article className="min-h-fit p-32 ">
            <div className="flex flex-col md:flex-row md:justify-between gap-32 md:gap-64">
              <div className="md:basis-1/2 flex flex-col justify-between">
                <h2 className="text-3xl text-black font-bold ">Let's Chat!</h2>
                <p className="text-lg font-med">Contact: +61 451129979</p>
              </div>

              <form
                id="form"
                onSubmit={sendEmail}
                className="w-[100%] md:basis-1/2 flex flex-col gap-32"
              >
                {inputs.map((input: Input) => {
                  return (
                    <input
                      key={input.name}
                      type="text"
                      required
                      name={input.name}
                      placeholder={input.placeholder}
                      className="bg-transparent outline-none border-b-2 focus:border-purple focus:placeholder:text-black text-xl pb-8 w-full text-black"
                    />
                  );
                })}
                <textarea
                  required
                  name="message"
                  rows={4}
                  cols={50}
                  className="bg-transparent text-xl p-8 w-full text-black border-2 rounded-md focus:border-purple focus:placeholder:text-black outline-none"
                  placeholder="Place Your Message Here"
                />
                <button
                  type="submit"
                  className="button bg-purple text-white rounded-full"
                >
                  Send
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>
    </Slider>
  );
};

export default Contact;
