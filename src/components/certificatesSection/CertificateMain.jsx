import React from "react";
import CertificateText from "./CertificateText";
import CertificateCard from "./CertificateCard";
import { PiCertificateBold } from "react-icons/pi";

const CertificateMain = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen w-full py-16 px-4 sm:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-20 items-center">
        {/* Heading */}
        <CertificateText />

        {/* Certificate List with Custom Props */}
        <CertificateCard
          iconComponent={PiCertificateBold} // Custom icon component
          iconSize="text-3xl" // Custom icon size
          sectionWidth="w-full" // Adjust the width as needed
        />
      </div>
    </section>
  );
};

export default CertificateMain;
