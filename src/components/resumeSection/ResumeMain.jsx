import ResumeText from "./ResumeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsFillFileEarmarkArrowDownFill, BsEyeFill } from "react-icons/bs";
import ResumePreview from "./ResumePreview";

const ResumeMain = () => {
  const resumeFile = "/assets/resume.pdf"; // Verify this path is correct

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    window.open(resumeFile, "_blank");
  };

  return (
    <div id="resume" className="max-w-[1200px] mx-auto px-4 py-12">
      <ResumeText />

      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="mt-12 flex flex-col items-center gap-8"
      >
        <ResumePreview file={resumeFile} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex gap-6 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-6 py-3 bg-cyan text-white rounded-md flex items-center gap-2 hover:bg-orange transition-all duration-300 shadow-md"
          >
            <BsFillFileEarmarkArrowDownFill /> Download Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePreview}
            className="px-6 py-3 bg-cyan text-white rounded-md flex items-center gap-2 hover:bg-orange transition-all duration-300 shadow-md"
          >
            <BsEyeFill /> Open Fullscreen
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumeMain;