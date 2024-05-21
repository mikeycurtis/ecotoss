import Image from "next/image";
import mainHeroImage from "@images/mainheroimage.jpg";

export default function MainHero() {
  return (
    <div className="border border-none h-auto bg-cover bg-center bg-cream lg:flex relative">
      <div className="mx-6 pt-6 pb-12">
        <h1 className="text-black text-3xl font-medium text-left">
          Organic Waste Bags For a{" "}
          <span className="text-lightgreen">Greener</span> San Diego
        </h1>
        <div className="w-full h-auto flex flex-col items-start justify-center md:px-20 mt-10 lg:pb-40">
          <div className="flex flex-col items-start">
            <Image
              src={mainHeroImage}
              alt="Compostable paper bags"
              width={600}
              height={380}
              className="rounded-[5%]"
            />
          </div>
        </div>
        <p className="text-black mt-10 text-xl">
          Our water-repellent paper bags are designed for San Diego&apos;s
          composting system, ensuring strength and durability. They are the
          perfect solution and size for your kitchen pails.
        </p>
        <div className="flex flex-col w-full align-end md:justify-end mt-10">
          <button className="bg-lightgreen w-full lg:w-48 h-14 rounded-xl text-white">
            Order Now
          </button>
          <button className="bg-lightgreen w-full lg:w-48 h-14 rounded-xl mt-4">
            Join Our Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
{
  /*"mx-6 lg:pl-40 md:h-full flex flex-col items-start justify-center"*/
}
