import Capabilities from "@/components/capabilities";
import HeaderSection from "@/components/headerSection";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <HeaderSection
        title="Thechnology"
        subtitle="Crafting Experiences That Speak"
        summary="At Brikt, we focus on creating user-centered, visually striking designs that elevate brands and drive engagement. From digital products to immersive experiences, our design solutions are tailored to make an impact."
        links={[
          { label: "Web Development", href: "#webdevelopment" },
          { label: "App Development", href: "#appdevelopment" },
          { label: "UX Audit", href: "#uxaudit" },
        ]}
      />
      <Capabilities/>

    </div>
  );
}
