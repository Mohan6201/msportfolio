import { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const handleDetailsClick = () => {
    if (!showDetails) {
      setShowArrow(true);
      setTimeout(() => {
        setShowDetails(true);
        setShowArrow(false);
      }, 600); // a bit longer delay for arrow animation
    } else {
      setShowDetails(false);
    }
  };

  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col relative`}
    >
      {/* Left Text Section */}
      <div className="flex-1 relative">
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>

        {/* Buttons */}
        <div
          className={`flex gap-4 items-center mt-2 ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          }`}
        >
          <a
            href={link}
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          >
            View <BsFillArrowUpRightCircleFill />
          </a>

          <button
            onClick={handleDetailsClick}
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          >
            Details <BsFillArrowUpRightCircleFill />
          </button>
        </div>

        {/* Centered Downward Arrow */}
        <AnimatePresence>
          {showArrow && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 mt-8 z-10"
            >
              <FaArrowDownLong className="text-6xl text-orange" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanding Description Box */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="overflow-hidden mt-14"
            >
              <motion.div
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="border-orange border-dashed border-2 rounded-xl p-5 shadow-lg bg-[#1e1e1e] w-full max-w-[500px] mx-auto"
              >
                <h3 className="text-cyan text-lg font-semibold">
                  {description.job}{" "}
                  <span className="text-orange">@ {description.company}</span>
                </h3>
                <p className="text-sm" style={{ color: "#A0A0A0" }}>
                  {description.date}
                </p>
                <ul className="list-disc ml-5 mt-2 text-sm text-white space-y-1">
                  {description.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website preview" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
