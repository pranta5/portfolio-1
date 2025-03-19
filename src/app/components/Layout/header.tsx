"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Import animations
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black py-4 px-8 z-50 fixed top-0 right-0 left-0">
      <div className="mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-black">Portfolio</span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-lg ">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition">
            About
          </Link>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-orange-500 transition"
            >
              Projects <ChevronDown className="ml-1" size={18} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 shadow-lg rounded-md bg-black text-white z-50"
                >
                  <Link
                    href="/projects/recent"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-700 transition"
                  >
                    Recent Projects
                  </Link>
                  <Link
                    href="/projects/all"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-700 transition"
                  >
                    All Projects
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </nav>

        {/* mobile */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-200/[.5] z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 space-y-6 text-lg"
            >
              <button
                className="absolute top-4 right-4 text-black"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-400 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-400 transition"
              >
                About
              </Link>

              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center w-full hover:text-blue-400 transition"
                >
                  Projects <ChevronDown className="ml-1" size={18} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-2 space-y-2"
                    >
                      <Link
                        href="/projects/recent"
                        className="block hover:text-blue-400 transition"
                        onClick={() => {
                          setDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Recent Projects
                      </Link>
                      <Link
                        href="/projects/all"
                        className="block hover:text-blue-400 transition"
                        onClick={() => {
                          setDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        All Projects
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="block hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
