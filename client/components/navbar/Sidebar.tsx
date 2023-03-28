import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useScrolling } from "hooks/useScrolling";
import { sidebarAnimation } from "@/utils/animation";
import { Links } from "../index";

const Sidebar = ({ isSide, setIsSide }: any) => {
  const { hiddenScrollbar, showScrollbar } = useScrolling();
  /**
   * @desc remove scrollbar from mobile sidebar
   */
  useEffect(() => {
    if (isSide) {
      hiddenScrollbar();
    } else {
      showScrollbar();
    }
  }, [hiddenScrollbar, isSide, showScrollbar]);

  return (
    <>
      {isSide && (
        <motion.nav
          animate={isSide ? "open" : "closed"}
          variants={sidebarAnimation}
          transition={{
            type: "spring",
          }}
          className=" bg-lightBg dark:bg-darkBg  z-50 fixed  inset-0 w-full h-screen "
        >
          <div className="flex justify-end p-1">
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
            </motion.button>
          </div>
          <div className=" px-2">
            <Links isSide={true} />
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Sidebar;
