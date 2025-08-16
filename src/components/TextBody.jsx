import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const TextBody = ({ menu }) => {
  return (
    <div
      className={`md:w-screen 2xl:w-screen h-screen overflow-y-hidden flex flex-col justify-center items-center overflow-x-hidden ${
        menu ? "blur-sm" : ""
      }`}
    >
      <motion.div
        className="flex flex-col items-start justify-start md:pb-40 2xl:pb-40 pb-20 text-start p-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-semibold text-4xl">
          Meet{" "}
          <span className="font-extrabold text-5xl 2xl:text-6xl text-[#6a5bff]">
            Bino
          </span>{" "}
          <span className="md:visible 2xl:visible">—</span>{" "}
          <span className="text-3xl sm:self-start">
            Your <span className="text-3xl font-bold">AI Assistant</span> for
            Everyday Life
          </span>
        </h1>
        <h2 className="text-xl 2xl:text-2xl text-wrap">
          Find <span className="font-bold">anything</span>,{" "}
          <span className="font-bold">anytime</span> — from{" "}
          <span className="font-bold">food</span> to{" "}
          <span className="font-bold">travel</span> to daily needs — all through{" "}
          <span className="font-bold">WhatsApp</span>.
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <h1 className="font-bold text-xl 2xl:text-2xl  text-[#6a5bff]">
          Try Now
        </h1>
        <a
          href="https://wa.me/919800081110"
          className="px-4 py-3 bg-green-500 rounded-2xl text-white font-semibold text-md hover:bg-green-600 transition-all duration-100 hover:scale-105"
        >
          <span className="flex items-center gap-1 2xl:text-xl">
            <FaWhatsapp className="text-xl 2xl:text-2xl" />
            WhatsApp
          </span>
        </a>
      </motion.div>
    </div>
  );
};

export default TextBody;
