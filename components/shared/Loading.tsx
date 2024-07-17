import Image from "next/image";
import React from "react";

type Props = {
  size?: number;
};

const Loading = ({ size = 100 }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image
        src="/loading.svg"
        alt="Loading"
        width={size}
        height={size}
        priority
        className="animate-pulse duration-800"
      />
    </div>
  );
};

export default Loading;
