import Image from "next/image";
import ImageCycle from "@/components/ImageCycle";

export default function Home() {
  return (
    <main className="">
      <div className="lg:h-[500px] w-full">
        <ImageCycle />
      </div>
    </main>
  );
}
