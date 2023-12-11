"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  GlobeAltIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: GlobeAltIcon,
    title: "Global Access",
    children:
      "Support your favorite creators from anywhere in the world. Our platform breaks down geographical barriers to connect you directly.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Low Transaction Fees",
    children:
      "Enjoy the benefits of blockchain technology with minimal transaction fees, ensuring that more of your support goes directly to the creators.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure Transactions",
    children:
      "Experience the peace of mind that comes with blockchain's secure and transparent transaction process for each donation.",
  },
  {
    icon: UserGroupIcon,
    title: "Empower Creators",
    children:
      "Directly impact the livelihood of content creators. Your support helps them continue to produce the content you love.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Stream & Reward 
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Empower Live Streaming  
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Unlock the potential of livestreaming with our decentralized donation platform. 
          Empower creators and participate in a new era of digital interaction, ensuring a secure, transparent
          , and inclusive experience.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
