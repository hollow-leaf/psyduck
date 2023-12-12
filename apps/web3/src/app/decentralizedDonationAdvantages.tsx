"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "Decentralized",
    description: "Secure and transparent transactions",
  },
  {
    title: "Direct Support",
    description: "Donations go directly to creators",
  },
  {
    title: "Global Access",
    description: "Support creators from anywhere, anytime",
  },
  {
    title: "Low Fees",
    description: "Enjoy minimal transaction costs",
  },
];

export function DecentralizedDonationAdvantages() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/decentralized-platform.png" // Update with an appropriate image
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="decentralized-platform-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Empowering Creators
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left text-xl !text-gray-500 lg:px-0"
          >
            Experience the new era of live streaming with decentralized donations.
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default DecentralizedDonationAdvantages;
