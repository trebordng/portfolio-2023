import React, { useEffect } from "react";
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
      className="block hover:-rotate-90 hover:scale-125 transition-all duration-200 mb-16"
    >
      <RiCloseFill className="text-white text-3xl" />
    </button>
  );
};

export default CloseButton;
