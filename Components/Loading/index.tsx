import React from "react";

const Loading = ({ pageColor }: { pageColor: string }) => {
  return (
    <main
      className={`${pageColor} absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center z-1`}
    >
      <span className="loader"></span>
    </main>
  );
};

export default Loading;
