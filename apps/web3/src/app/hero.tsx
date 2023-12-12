"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Psyduck <br />  <span className="text-pink-200">Stream & Reward</span>
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Revolutionizing the World of Livestreaming<br/> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              : A New Era of Digital Interaction
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Get the extension for your browser
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Google Extension
              </Button>
            </div>
          </div>
          <Image
            width={770}
            height={576}
            src="/image/extension.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
    </div>
  );
}
export default Hero;
