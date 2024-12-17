import Image, { StaticImageData } from "next/image";

// Import all logos here
import ReactLogo from "./../../../public/images/react.svg";
import Logo02 from "./../../../public/images/logo-02.svg";
import Logo03 from "./../../../public/images/logo-03.svg";
import FigmaLogo from "./../../../public/images/figma-svg.svg";
import WordPressLogo from "./../../../public/images/wordpress-logo.svg";
import Logo06 from "./../../../public/images/logo-06.svg";
import NodeJSLogo from "./../../../public/images/nodejs-icon.svg";
import Logo08 from "./../../../public/images/logo-08.svg";
import AWSLogo from "./../../../public/images/aws-logo.svg";

type CardProps = {
  title: string;
  desc: string;
  //   image?: StaticImageData | string;
  //   imageDesc: string;
  price: string;
  logos?: Array<StaticImageData>;
  services?: string[];
};
export default function Card({
  title,
  desc,
  //   image,
  //   imageDesc,
  price,
  logos = [],
  services = [],
}: CardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      {/* {image &&
        (typeof image === "string" ? (
          <img
            src={image}
            alt={imageDesc}
            className="h-10 w-10 rounded-md object-cover"
          />
        ) : (
          <Image
            src={image}
            alt={imageDesc}
            className="h-10 w-10 rounded-md object-cover"
          />
        ))} */}
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="text-3xl font-medium text-blue-600">{price}</p>
      <p className="mb-3 font-normal text-gray-700">{desc}</p>
      {services.length > 0 && (
        <ul className="mt-4 list-disc list-inside text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="text-sm">
              {service}
            </li>
          ))}
        </ul>
      )}
      {logos.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 my-4">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-11 w-11 object-contain pr-2"
            />
          ))}
        </div>
      )}
    </div>
  );
}
