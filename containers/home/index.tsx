import MyButton from "@/components/Button";
import AmazingGroup from "@/components/home/AmazingGroup";
import CallToAction from "@/components/home/CallToAction";
import DonationOption from "@/components/home/DonationOption";
import Hero from "@/components/home/Hero";
import KajianInspiration from "@/components/home/KajianInspiration";
import ProgramOption from "@/components/home/ProgramOption";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { FaWhatsapp } from "react-icons/fa";

export default function Homepage() {
  return (
    <>
      <Header />
      <section className="min-h-[850px] bg-[url('/hero-bg.svg')] bg-no-repeat bg-bottom py-20 px-2 md:px-0">
        <Hero />
      </section>
      <section className="px-2 md:px-0">
        <DonationOption />
      </section>
      <section className="min-h-[1120px] bg-[url('/bg-program.svg')] bg-no-repeat bg-center px-2 md:px-0">
        <ProgramOption />
      </section>
      <section className="px-2 md:px-0">
        <KajianInspiration />
      </section>
      <section className="min-h-[900px] bg-[url('/bg-call-toaction.svg')] bg-no-repeat bg-center px-2 md:px-0">
        <AmazingGroup />
        <CallToAction />
      </section>
      <Footer />
      <MyButton
        className="fixed bottom-8 right-8 bg-green-600 text-white border-green-600"
        rightIcon={<FaWhatsapp color="white" />}
      >
        Hubungi Kami
      </MyButton>
    </>
  );
}
