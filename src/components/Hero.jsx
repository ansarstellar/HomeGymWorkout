import React from "react";
import Button from "./Button.jsx"

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-5">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur{" "}
        <span className="text-blue-400 font-medium">adipisicing elit.</span>{" "}
        Sint, saepe officia quidem quibusdam{" "}
        <span className="text-blue-400 font-medium">labore nemo</span> voluptas
        veritatis sapiente cum dolores?
      </p>

      <Button func={() => {
        window.location.href = "#generate"
      }}text={"Accept & Begin"}/>
      {/* <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
        <p></p>
      </button> */}
    </div>
  );
}
