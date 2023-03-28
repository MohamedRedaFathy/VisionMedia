import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import moonIcon from "assets/images/moon.png";
import sunIcon from "assets/images/sun.png";
import { Links, Sidebar } from "components";
import { useTheme } from "next-themes";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [isSide, setIsSide] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  /**
   * @desc when refreshing page get them
   */
  useEffect(() => {
    theme === "dark" ? setIsDark(true) : setIsDark(false);
  }, [theme]);

  /**
   * @desc when user scroll , change state to add styles in navbar
   */
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 1 ? setIsScroll(true) : setIsScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * @desc switch theme between light and dark
   */
  const handleSwitchMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`fixed top-[-1px] left-0 w-full z-40  transition-all duration-150 ease-in-out  ${
        isScroll &&
        "shadow-lg shadow-white dark:shadow-black bg-lightBg dark:bg-darkBg"
      }`}
    >
      <div className=" container flex justify-between items-center p-4">
        <Link href="/">
          <div className="cursor-pointer" onClick={() => setIsSide(false)}>
            <Image src={logo} alt="logo" width={55} />
          </div>
        </Link>
        <div className="hidden md:flex gap-14">
          <div className=" flex items-center cursor-pointer transition duration-150 space-x-10">
            <Links isSide={false} />
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-12  md:mr-20">
          <div
            className="w-20 h-10  overflow-hidden bg-[#000]  px-2 flex items-center justify-between  rounded-full cursor-pointer relative"
            onClick={handleSwitchMode}
          >
            <Image
              priority
              src={sunIcon}
              alt="sunIcon"
              width="25"
              height="25"
            />
            <div
              className={` w-[25px] h-[25px] bg-white rounded-full absolute z-40  ${
                isDark ? "right-1" : "left-1"
              }`}
            />
            <Image
              priority
              src={moonIcon}
              alt="moonIcon"
              width="25"
              height="25"
            />
          </div>
          <motion.button
            onClick={() => setIsSide(!isSide)}
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="block md:hidden"
          >
            {isSide ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </motion.button>
          <div className="block md:hidden ">
            {<Sidebar isSide={isSide} setIsSide={setIsSide} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
