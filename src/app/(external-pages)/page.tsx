"use client";
import { MobileMenu } from "@/components/NavigationMenu/ExternalNavbar/MobileMenu";
import { MobileMenuContext } from "@/components/NavigationMenu/ExternalNavbar/MobileMenuContext";
import { motion, AnimatePresence } from "framer-motion";
import Features from "@/components/Landing/Features";
import { useContext } from 'react';
import Main from "@/components/Landing/Main";
import Quote from "@/components/Landing/Quote";
import PricingPage from "@/components/Landing/PricingPage";
import Integrations from "@/components/Landing/Integrations";
import Testimonial from "@/components/Landing/Testimonial";
import FAQ from "@/components/Landing/Faq";
import Journey from "@/components/Landing/Journey";
export default function Page() {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(MobileMenuContext);
  return (<>
    <AnimatePresence>
      {mobileMenuOpen && (

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.5,
            ease: "backInOut"
          }}
          className="h-screen w-screen dark:bg-black/70 backdrop-blur-xl bg-white/70 fixed top-0 right-0 z-[1000] "  >

          <motion.section initial={{
            paddingLeft: "0rem",
            paddingRight: "0rem",
            opacity: 0,
            x: -100
          }}
            exit={{
              paddingLeft: "0rem",
              paddingRight: "0rem",
              opacity: 0,
              x: -100,
              transition: {
                duration: 1
              }
            }}
            animate={{
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5,
            }}

            className="text-black bg-[#020817] flex-col absolute  left-0 top-0  h-screen  py-4 gap-4 z-50 flex">
            <MobileMenu />
          </motion.section>


        </motion.div>

      )}
    </AnimatePresence>

    <Main/>
    <Features/>
    <Quote/>
    <Integrations/>
    <Testimonial/>
    <PricingPage/>
    <FAQ/>
    <Journey/>
  </>
  );
}
