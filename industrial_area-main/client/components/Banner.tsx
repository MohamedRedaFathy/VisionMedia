import { bannerButton, bannerProps } from "@/types";
import Image from "next/image";
import React from "react";
import wrapperImage from "../assets/images/wrapper.png";
import googleButton from "../assets/images/play-button.png";
import storeButton from "../assets/images/store-button.png";
import { motion } from "framer-motion";
import { secondAnimation } from "@/utils/animation";
/**
 * @desc that functions created buttons to Downloads APP
 */
// todo: don't forget add links app in array buttonsProperties
export const createButton = () => {
  const buttonsProperties: bannerButton[] = [
    { id: "1", text: "Google Play", href: "", icon: googleButton },
    { id: "2", text: "app store", href: "", icon: storeButton },
  ];
  return (
    <div className="flex justify-center mt-2 md:mt-3 px-2">
      <div>
        <div>
          <h5 className="text-xl md:text-2xl text-center mt-4">
            حمل التطبيق من هنا :
          </h5>
        </div>
        <div className="flex gap-x-4 mt-4">
          {buttonsProperties.map(({ id, text, href, icon }: bannerButton) => (
            <div key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex gap-1"
              >
                <Image priority src={icon} alt={`${text} icon`} width={140} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Banner = ({ title, desc, isButton, image }: bannerProps) => {
  return (
    <div className="flex h-[90vh] w-full flex-col lg:pb-12">
      <div className="relative  h-full">
        <Image
          src={wrapperImage}
          alt="wrapperImage"
          className="absolute inset-0 z-10"
          fill
        />
        <Image
          priority
          fill
          alt="image"
          src={image}
          className="absolute inset-0 "
        />
        <motion.div
          variants={secondAnimation}
          initial="hidden"
          animate="show"
          className="relative z-20 text-darkText grid place-items-center h-full"
        >
          <div className="p-1">
            <div className="flex justify-center">
              <h2 className="text-3xl text-center !leading-[1.1] md:text-6xl md:w-[70%]  xl:w-[50%]">
                {title}
              </h2>
            </div>
            <div className="flex justify-center mt-2 md:mt-6 px-2">
              <p className="text-base text-center md:text-xl md:w-[70%] xl:w-[50%] opacity-95">
                {desc}
              </p>
            </div>
            {isButton && createButton()}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
