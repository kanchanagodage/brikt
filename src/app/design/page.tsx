import HeaderSection from "@/components/headerSection";
import Hero from "@/components/hero";
import ServiceSelector from "@/components/serviceselector";
import Image from "next/image";

export default function Home() {
    const designServices = [
  {
    id: "branding",
    title: "Branding",
    description:
      "Crafting unique visual identities and brand strategies that resonate with your audience.",
  },
  {
    id: "uiux",
    title: "UI/UX",
    description:
      "Designing intuitive interfaces and experiences that maximize engagement and usability.",
  },
  {
    id: "webdesign",
    title: "Web Design",
    description:
      "Creating visually stunning and responsive websites that reflect your brand values.",
  },
];
  return (
    <div className="">
        <HeaderSection
        title="Design"
        subtitle="Crafting Experiences That Speak"
        summary="At Brikt, we focus on creating user-centered, visually striking designs that elevate brands and drive engagement. From digital products to immersive experiences, our design solutions are tailored to make an impact."
        links={[
          { label: "Branding", href: "#branding" },
          { label: "UI/UX Design", href: "#uiux" },
          { label: "Web Design", href: "#webdesign" },
          { label: "App Design", href: "#appdesign" },
          { label: "Design System", href: "#designsystem" },
        ]}
      />

        <ServiceSelector services={designServices} />
    </div>
  );
}
