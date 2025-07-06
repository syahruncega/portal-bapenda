import Link from "next/link";
import React, { FC } from "react";

const FancyButton: FC<{ label: string; href: string }> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="group bg-purple_blue text-white font-medium flex flex-row justify-between items-center px-5 rounded-full max-w-64 w-full py-3 border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue"
    >
      <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-20">
        {label}
      </span>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition-transform duration-200 ease-in-out group-hover:-translate-x-44 group-hover:rotate-45"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          className="fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue"
        />
        <path
          d="M15.832 15.3334H24.1654V23.6667"
          className="stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.832 23.6667L24.1654 15.3334"
          className="stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default FancyButton;
