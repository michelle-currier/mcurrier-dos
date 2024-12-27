import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; mcurrier.com - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  NextJS - framework
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://www.tailwindawesome.com/resources/simple-light"
                  target="_blank"
                >
                  Tailwind - styles template
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://michalsnik.github.io/aos/"
                  target="_blank"
                >
                  AOS - animations on scroll
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://sendgrid.com/"
                  target="_blank"
                >
                  SendGrid - emails/contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://vercel.app"
                  target="_blank"
                >
                  Vercel - deploy
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          {/* <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Financial statements
                </Link>
              </li>
            </ul>
          </div> */}

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                  target="_blank"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/terms"
                  target="_blank"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                  target="_blank"
                >
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-teal-600 transition hover:text-blue-600"
                  href="https://github.com/michelle-currier/"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg
                    className="h-12 w-12 fill-current"
                    viewBox="6 8 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-teal-600 transition hover:text-blue-600"
                  href="https://soundcloud.com/dj-nice-rack"
                  aria-label="SoundCloud"
                  title="SoundCloud"
                >
                  <svg className="h-12 w-12 fill-current" viewBox="0 -4 32 32">
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-60.000000, -7483.000000)"
                        fill="#000000"
                        className="fill-current"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M12.5857188,7333.74807 L12.5857188,7323.71968 C12.5857188,7323.40078 12.681671,7323.20964 12.8745748,7323.14824 C16.086973,7322.38863 19.3323547,7324.62982 19.6272077,7328.00596 C22.7676418,7326.67987 25.4982802,7330.67597 23.0644937,7333.07562 C22.4478012,7333.6837 21.7081701,7333.98774 20.8456002,7333.98774 L12.7526356,7333.97883 C12.6456889,7333.94317 12.5857188,7333.83225 12.5857188,7333.74807 L12.5857188,7333.74807 Z M10.4088043,7333.45294 C10.4088043,7334.17789 11.7861176,7334.1868 11.7861176,7333.45294 L11.7861176,7323.80485 C11.7861176,7322.89173 10.4088043,7322.8957 10.4088043,7323.80485 L10.4088043,7333.45294 L10.4088043,7333.45294 Z M8.26987088,7333.45294 C8.26987088,7334.16105 9.6461846,7334.18878 9.6461846,7333.45294 L9.6461846,7327.76629 C9.6461846,7326.85318 8.26987088,7326.85714 8.26987088,7327.76629 L8.26987088,7333.45294 L8.26987088,7333.45294 Z M6.13893345,7333.15782 C6.13893345,7333.88672 7.50725116,7333.89861 7.50725116,7333.15782 L7.50725116,7326.92746 C7.50725116,7326.04504 6.13893345,7326.03415 6.13893345,7326.92746 L6.13893345,7333.15782 Z M4,7332.01494 C4,7332.86566 5.3673182,7333.08057 5.3673182,7332.01494 L5.3673182,7329.34196 C5.3673182,7328.43677 4,7328.44469 4,7329.34196 L4,7332.01494 Z"
                            id="soundcloud-[#164]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-teal-600 transition hover:text-blue-600"
                  href="https://www.linkedin.com/in/mouge/"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.37214 24H0.396429V7.97674H5.37214V24ZM2.88161 5.79102C1.29054 5.79102 0 4.47317 0 2.8821C2.37147e-08 1.29063 1.29014 0.000488281 2.88161 0.000488281C4.47307 0.000488281 5.76321 1.29063 5.76321 2.8821C5.76321 4.47317 4.47214 5.79102 2.88161 5.79102ZM23.9946 24H19.0296V16.2C19.0296 14.341 18.9921 11.9571 16.4427 11.9571C13.8557 11.9571 13.4593 13.9767 13.4593 16.066V24H8.48893V7.97674H13.2611V10.1625H13.3307C13.995 8.90352 15.6177 7.57495 18.0386 7.57495C23.0743 7.57495 24 10.891 24 15.1982V24H23.9946Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
