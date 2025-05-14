import ResumeText from "./ResumeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsFillFileEarmarkArrowDownFill, BsEyeFill } from "react-icons/bs";

const ResumeMain = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume.pdf";
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    window.open("/assets/resume.pdf", "_blank");
  };

  return (
    <div id="resume" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ResumeText />
      </motion.div>

      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="mt-12 flex flex-col items-center gap-8"
      >
        <div className="w-full max-w-[600px] h-[400px] bg-gray-800 rounded-xl flex items-center justify-center border border-white">
          <p className="text-white text-center">[ Resume Preview Placeholder ]</p>
        </div>

        <div className="flex gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-6 py-3 bg-cyan text-white rounded-md flex items-center gap-2 hover:bg-orange transition-all duration-300"
          >
            <BsFillFileEarmarkArrowDownFill /> Download Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePreview}
            className="px-6 py-3 bg-cyan text-white rounded-md flex items-center gap-2 hover:bg-orange transition-all duration-300"
          >
            <BsEyeFill /> Preview Resume
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeMain;
