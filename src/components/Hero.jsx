import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import '../i18n.js';

const langs = {
  en: "English",
  hn: "Hindi"
};

const Hero = () => {
  const {t,i18n} = useTranslation();
  return (
    <div className="text-white hero ">
      <div className="max-w-[800px] w-full h-screen text-center flex flex-col justify-center mt-[-96px] mx-auto px-2 md:px-0 ">
        <p className="uppercase text-[#ff7010] font-bold text-xl pt-6 md:pt-0">
          <Trans i18nKey={"desc"}>
         yo motherfucker
          </Trans>

        </p>
        <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold serif py-2">
          {t("title")}
        </h1>
        <div className="flex  justify-center items-center">
          <p className="sm:text-4xl text-xl font-bold py-2">
            Discover 🦚 about{" "}
          </p>
          <Typed
            className="sm:text-4xl text-xl font-bold pl-2 text-[#ff7010]"
            strings={[
              "Life decisions",
              "Relationships",
              "Destiny",
              "Self-Growth",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Get in touch with central india's most eminent vedic astrologer.
        </p>
          <Link to="/appointment" className="w-min mx-auto py-6">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} className="w-[260px] p-3 bg-[#ff7010] text-white text-2xl font-bold rounded-md "
          >
            Book Appointment
          </motion.button>
          </Link>
      </div>
    </div>
  );
};

export default Hero;
