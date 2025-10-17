import Hero from "@/components/hero";
import ServiceCards from "@/components/serviceCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero/>
        <ServiceCards />
      </main>

    </div>
  );
}
