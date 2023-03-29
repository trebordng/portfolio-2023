import React, { SetStateAction } from "react";

const Experience = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section
      className={`absolute top-0  full-w-h md:w-[60%] z-999 bg-blue ${
        open ? "opacity-1 right-0" : "opacity-0 -right-[100%]"
      } transition-right duration-500 overflow-y-scroll hide-scroll text-right p-16 sm:p-24 md:p-32 lg:p-64`}
    ></section>
  );
};

export default Experience;
