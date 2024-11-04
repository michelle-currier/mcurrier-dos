import Link from "next/link";
import Image from "next/image";
import Img from "@/public/images/favicon-32.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex text-lg items-center"
      aria-label="m. currier designs"
    >
      <Image src={Img} className="mr-2"></Image>{" "}
      <p className="text-indigo-800 mt-1">currier designs</p>
    </Link>
  );
}
