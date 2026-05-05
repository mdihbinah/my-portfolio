import ContactSection from "@/component/contact/ContactSection";
import HeroSection from "@/component/home/hero/HeroSection";
import ServicesSection from "@/component/services/ServicesSection";
import SkillSection from "@/component/skills/SkillSection";
import AnimationLayout from "../../layout/AnimationLayout";
import { Toaster } from "react-hot-toast";
import ProjectSection from "@/component/projects/ProjectSection";
import MyEducation from "@/component/education/MyEducation";

export default function Home() {
  return (
    <div className="">
      <AnimationLayout>
        <HeroSection></HeroSection>
        <SkillSection></SkillSection>
        <ProjectSection></ProjectSection>
        <MyEducation></MyEducation>
        <ServicesSection></ServicesSection>
        <ContactSection></ContactSection>
        <Toaster></Toaster>
      </AnimationLayout>
    </div>
  );
}
