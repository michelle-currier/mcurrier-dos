"use-client";

import React from "react";

import Card from "@/components/card";
export const metadata = {
  title: "Services",
  description: "The services that m. currier designs offer.",
};

// Import all logos here
import ReactLogo from "./../../../public/images/react.svg";
import GithubLogo from "./../../../public/images/logo-02.svg";
import GoogleLogo from "./../../../public/images/logo-03.svg";
import FigmaLogo from "./../../../public/images/figma-svg.svg";
import WordPressLogo from "./../../../public/images/wordpress-logo.svg";
import VercelLogo from "./../../../public/images/logo-06.svg";
import NodeJSLogo from "./../../../public/images/nodejs-icon.svg";
import NextJSLogo from "./../../../public/images/logo-08.svg";
import AWSLogo from "./../../../public/images/aws-logo.svg";

export default function ResetPassword() {
  return (
    <div className="mt-20 max-w-6xl mx-auto px-6">
      {/* <div style={styles}> */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center text-indigo-800 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
          Services
        </h1>
      </div>

      <div className="grid grid-cols-3 mx-auto gap-4">
        <Card
          title="Basic Site"
          price="($450 - $900)"
          desc="Small business site built on React with Vercel for Deployment and Github for hosting."
          logos={[ReactLogo, NodeJSLogo, GithubLogo, NextJSLogo, VercelLogo]}
          services={[
            "Web Development with React & Next.js",

            "SendGrid Email Contact Forms",
          ]}
        ></Card>
        <Card
          title="Medium Site"
          price="($1000 - $2400)"
          desc="Small shops, e-commerce, larger portfolios."
          services={[
            "Gallery & Portfolio Sites",
            "Ecommerce",
            "up to 20 pages",
          ]}
          logos={[
            ReactLogo,
            GithubLogo,
            NodeJSLogo,
            NextJSLogo,
            GoogleLogo,
            VercelLogo,
          ]}
        ></Card>
        <Card
          title="Large Site"
          price="($2500 - ^)"
          desc="Complex sites, CMS, integrations, enterprise."
          logos={[
            WordPressLogo,
            AWSLogo,
            FigmaLogo,
            ReactLogo,
            GithubLogo,
            NextJSLogo,
            GoogleLogo,
            VercelLogo,
          ]}
          services={[
            "Custom WordPress Themes & Plugins",
            "API Integrations & Automation",
            "Scheduler & Booking Systems",
          ]}
        ></Card>
      </div>
    </div>
  );
}
