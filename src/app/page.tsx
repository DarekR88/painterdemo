import Image from "next/image";
import ImageCycle from "@/components/ImageCycle";
import workingImg from "../../public/images/working.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="relative lg:h-[500px] h-[500px] w-full mb-[75px]">
        <ImageCycle />
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:h-[400px]">
        <div className="lg:w-1/2 overflow-hidden">
          <Image src={workingImg} alt="work" />
        </div>
        <div className="flex lg:w-1/2 items-center">
          <p className="lg:px-[40px] px-3">
            At Kurazawa Construction, we take pride in our commitment to
            excellence. With a legacy rooted in family values and a dedication
            to quality craftsmanship, we ensure that every project, no matter
            the size, receives the utmost attention and care. Our team consists
            of top-tier talent, each member carefully selected for their
            expertise and dedication to exceeding client expectations. From
            large-scale renovations to minor repairs, we approach every job with
            the same level of professionalism and attention to detail. At
            Kurazawa Construction, you're not just a client – you're a valued
            member of our extended family. Trust us to bring your vision to life
            with integrity, precision, and a personal touch.
          </p>
        </div>
      </div>
    </main>
  );
}
