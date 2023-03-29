import React from "react";
import { RiCloseFill } from "react-icons/ri";

const CloseButton = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <button
      onClick={handleClose}
      className="absolute top-16 left-16 hover:-rotate-90 hover:scale-125 transition-all duration-200"
    >
      <RiCloseFill className="text-white text-2xl" />
    </button>
  );
};

export default CloseButton;
