import Head from "next/head";
import Link from "next/link";
import notfoundIamge from "assets/json/notfound.json";
import Lottie from "react-lottie-player";
import { motion } from "framer-motion";
import { notfoundAnimation } from "@/utils/animation";

const notfoundPage = () => {
  return (
    <div className="mt-14 p-4">
      <Head>
        <title>Portfolio | Notfound</title>
      </Head>
      <div className="w-full md:w-[900px] m-auto">
        <Link href="/">
          <motion.div
            variants={notfoundAnimation}
            initial="initial"
            animate="animate"
          >
            <Lottie
              loop
              animationData={notfoundIamge}
              play
              style={{ width: "100%" }}
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default notfoundPage;
