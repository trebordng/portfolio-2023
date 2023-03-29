import React,{useEffect} from "react";
import CloseButton from "./CloseButton";

const Container = ({
  children,
  open,
  setOpen,
  id,
  bgColor,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  bgColor: string;
}) => {
  
  useEffect(()=>{
     console.log(document.getElementById(id))
  })
  return (
    <section
      id={id}
      className={`fixed top-0 w-full lg:w-[50vw] h-[100vh] z-999 ${bgColor} ${
        open ? "opacity-1 right-0 " : "opacity-0 -right-[100%]"
      } transition-all duration-500 text-right p-32 lg:p-64 overflow-y-auto  hide-scroll`}
    >
      <CloseButton setOpen={setOpen} />
      <div className={`${open ? "block" : "hidden"}`}> {children}</div>
    </section>
  );
};

export default Container;
