import ContactSection from "@/component/contact/ContactSection";
import HeroSection from "@/component/home/hero/HeroSection";
import ServicesSection from "@/component/services/ServicesSection";
import SkillSection from "@/component/skills/SkillSection";
import AnimationLayout from "../../layout/AnimationLayout";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="">
      <AnimationLayout>
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
        <SkillSection></SkillSection>
        <ContactSection></ContactSection>
        <Toaster></Toaster>
      </AnimationLayout>
    </div>
  );
}
