"use-client";

import React from "react";
import Accordion from "@/components/accordion";
import Link from "next/link";
export const metadata = {
  title: "Projects",
  description: "A deeper look at m. currier's past projects",
};

import Logo01 from "./../../../public/images/react.svg";
import Logo02 from "./../../../public/images/logo-02.svg";
import Logo03 from "./../../../public/images/logo-03.svg";
import Logo04 from "./../../../public/images/figma-svg.svg";
import Logo05 from "./../../../public/images/wordpress-logo.svg";
import Logo06 from "./../../../public/images/logo-06.svg";
import Logo07 from "./../../../public/images/nodejs-icon.svg";
import Logo08 from "./../../../public/images/logo-08.svg";
import Logo09 from "./../../../public/images/aws-logo.svg";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      {/* <div style={styles}> */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center text-indigo-800 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
          Projects
        </h1>
      </div>

      <div className="space-y-4">
        <p>Coming soon!</p>
        <Accordion title="OBS.us.com" id="um" image={Logo05}>
          <p className="leading-6">
            <b>
              <i>Client:</i>
            </b>{" "}
            <Link
              href="https://obs.us.com/"
              target="_blank"
              aria-label="obs.us.com"
              className="font-bold text-blue-800 hover:text-teal-800 hover:cursor-pointer"
            >
              OBS
            </Link>{" "}
            (Disaster Relief Infrastructure Service and Response Organization){" "}
          </p>
          <p className="leading-6 mb-3">
            <i>Project Scope:</i> Development of a collaborative all-in-one
            website for streamlined project management and team coordination.
          </p>
          <ul className="pt-3 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
            <li className="font-bold">Key Deliverables:</li>
            <li>
              <b>Custom New Hire Form:</b> Streamlined process for onboarding
              new team members with all of their info in one place.
            </li>
            <li>
              <b>Role-Based Permissions:</b> Defined access levels for different
              user groups (managers, workers, and admins).
            </li>
            <li>
              <b>Customizable Functionality:</b> Flexible features to meet the
              unique operational needs of OBS.
            </li>
            <li>
              <b>Content Management System (WordPress):</b> Simplified
              management of content with scalability for future updates and
              features.
            </li>
          </ul>
          <Link
            href="https://obs.us.com/"
            target="_blank"
            aria-label="obs.us.com"
            className="font-bold text-blue-800 hover:text-teal-800 hover:cursor-pointer"
          >
            OBS.us.com
          </Link>
        </Accordion>
        <Accordion title="The Nice Notary" id="dos" image={Logo01}>
          <p className="leading-6">
            <b>
              <i>Client:</i>
            </b>{" "}
            <Link
              href="https://the-nice-notary.vercel.app/"
              target="_blank"
              aria-label="thenicenotaryllc.com"
              className="font-bold text-blue-800 hover:text-teal-800 hover:cursor-pointer"
            >
              The Nice Notary
            </Link>{" "}
            (A mobile notarty service provider){" "}
          </p>
          <p className="leading-6 mb-3">
            <i>Project Scope:</i> Development of a website for information about
            their services, rates, and a contact form.
          </p>
          <ul className="pt-3 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
            <li className="font-bold">Key Deliverables:</li>
            <li>
              <b>Contact Form:</b> Utilizing SendGrid and some best practices
              with error checks and responses on send.
            </li>
            <li>
              <b>React + Vercel:</b> Rapid creation and deployment with my small
              business template and streamlined deployment using Vercel and
              Github.
            </li>
          </ul>
          <Link
            href="https://the-nice-notary.vercel.app/"
            target="_blank"
            aria-label="thenicenotaryllc.com"
            className="font-bold text-blue-800 hover:text-teal-800 hover:cursor-pointer"
          >
            The Nice Notary
          </Link>
        </Accordion>
      </div>
    </div>
  );
}
