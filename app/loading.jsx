import Image from "next/image";
import React from "react";
import loading from "../assets/Animation - 1697279167336.gif"

export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <Image src={loading} width={300} height={300} alt="logo" />
    </div>
  );
}