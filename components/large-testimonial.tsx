import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              Michelle at M. Currier Designs was a pleasure to work with, I
              highly recommend her services as a website builder.{" "}
            </p>
            <p>
              I was paying way too much through{" "}
              <em className="italic text-yellow-600">Squarespace</em> because my
              site was designed using their interface, I was using it to
              maintain my domain and also my site itself. M. Currier Designs was
              able to quickly build me a much better site and move it off of
              Squarespace to avoid the monthly fees. She was super attentive and
              responsive to my emails changing various details I wanted to add
              to the site. She gave the site new features I didn't have on the
              boring Squarespace site, like contact me fields that will generate
              an email to my inbox, and security, now it's https, making it
              easier to search for and find as well as making clients feel
              safer.
            </p>
            <p>
              <span className="italic text-indigo-600 text-lg">
                Having a professionally built site is well worth it,
              </span>{" "}
              it reflects on my business and the level of competence and
              steadiness I want to present to prospective clients. I love my new
              site and I can't be happier about the money I will save in the
              long run. So happy I did this!{" "}
            </p>
            <div className="text-md font-medium text-gray-500">
              <span className="text-gray-700">Margaret Dufoure</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a
                className="text-blue-500"
                href="https://thenicenotaryllc.com"
                target="_blank"
                aria-label="https://thenicenotaryllc.com"
              >
                Owner The Nice Notary LLC
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
