import React from "react";

type BackDropType = {
  className?: string;
  clickHandler: () => void;
};

const BackDrop: React.FC<BackDropType> = ({
  className,
  clickHandler,
}: BackDropType) => {
  return (
    <div
      className={`fixed w-full h-full top-0 right-0 left-0 bottom-0 bg-black/20 z-20 ${className}`}
      id="overlay"
      onClick={clickHandler}
    ></div>
  );
};

export default BackDrop;
