import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed z-30 w-full md:top-1 sm:top-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center text-lg">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/repo"
                className="btn-sm bg-white text-lime-800 shadow hover:bg-slate-100 hover:border-2 hover:border-lime-500 focus:ring-2 focus:ring-lime-400 focus:ring-opacity-50 ease-in"
              >
                Repos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-white text-teal-800 shadow hover:bg-slate-100 hover:border-2 hover:border-teal-500 focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 ease-in"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="btn-sm bg-white text-blue-800 shadow hover:bg-slate-100 hover:border-2 hover:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ease-in"
              >
                Projects
              </Link>
            </li>
            {/* <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Register
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}
