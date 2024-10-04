"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import Iphone15Pro from "./ui/iphone-15-pro";

export function LayoutGridDemo() {
  return (
    <div className="hidden lg:flex flex-row gap-8 relative w-full h-[450px] mr-10 mb-20">
  <div className="w-full md:w-3/4 space-y-0 mr-10">
    <LayoutGrid cards={cards1} />
    <LayoutGrid cards={cards} />
  </div>
  <div className="md:w-1/4 flex justify-end items-center ml-7">
    <Iphone15Pro
      className="w-[450px] h-[880px] mt-20"
      src="https://res.cloudinary.com/dqljfnmpk/video/upload/v1724930610/Download_8_gwoslx.mp4"
    />
  </div>
</div>


  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards1 = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-1 w-[90px] h-[70px] ml-14",
      thumbnail:
        "/1.jpeg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "row-span-2 w-[230px] h-[150px] ml-6",
      thumbnail:
        "https://res.cloudinary.com/dqljfnmpk/video/upload/v1724932820/videoplayback_12_mzz7a6.mp4",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1 w-[90px] h-[70px] ml-14",
      thumbnail:
        "/1.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "col-span-1 w-[90px] h-[70px] ml-14",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        content: <SkeletonFour />,
        className: "row-span-1 w-[90px] h-[70px] ml-14",
        thumbnail:
          "/1.jpeg",
      },
  ];

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:row-span-2 w-[220px] h-[150px]",
    thumbnail:
      "https://res.cloudinary.com/dqljfnmpk/video/upload/v1724934237/Download_13_nuoal2.mp4",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 w-[90px] h-[70px] ml-8",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "row-span-2 w-[220px] h-[150px]",
    thumbnail:
      "https://res.cloudinary.com/dqljfnmpk/video/upload/v1724933253/Download_11_xyj1eg.mp4",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1 w-[90px] h-[70px] ml-8",
    thumbnail:
      "/1.jpeg",
  },
];
