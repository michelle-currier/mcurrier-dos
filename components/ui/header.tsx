import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed z-30 w-full md:top-1 sm:top-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center text-lg">
            <Logo />
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden btn-sm border-2 border-transparent bg-white text-gray-800 shadow hover:bg-slate-100 hover:border-gray-500 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          >
            Menu
          </button>
          {/* Desktop sign in links */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/repo"
                className="btn-sm border-2 border-transparent bg-white text-lime-800 shadow hover:bg-slate-100 hover:border-2 hover:border-lime-500 focus:ring-2 focus:ring-lime-400 focus:ring-opacity-50 ease-in"
              >
                Repos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="btn-sm border-2 border-transparent bg-white text-teal-800 shadow hover:bg-slate-100 hover:border-2 hover:border-teal-500 focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 ease-in"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="btn-sm border-2 border-transparent bg-white text-blue-800 shadow hover:bg-slate-100 hover:border-2 hover:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ease-in"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="btn-sm border-2 border-transparent bg-white text-purple-800 shadow hover:bg-slate-100 hover:border-2 hover:border-purple-500 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 ease-in"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-start gap-3 p-4">
              <li>
                <Link
                  href="/repo"
                  className="block w-full text-left btn-sm border-2 border-transparent bg-white text-lime-800 shadow hover:bg-slate-100 hover:border-2 hover:border-lime-500 focus:ring-2 focus:ring-lime-400 focus:ring-opacity-50 ease-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Repos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block w-full text-left btn-sm border-2 border-transparent bg-white text-teal-800 shadow hover:bg-slate-100 hover:border-2 hover:border-teal-500 focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 ease-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block w-full text-left btn-sm border-2 border-transparent bg-white text-blue-800 shadow hover:bg-slate-100 hover:border-2 hover:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ease-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block w-full text-left btn-sm border-2 border-transparent bg-white text-purple-800 shadow hover:bg-slate-100 hover:border-2 hover:border-purple-500 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 ease-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
