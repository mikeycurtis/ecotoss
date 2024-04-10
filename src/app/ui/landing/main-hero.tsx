import Image from "next/image";
import mainHeroImage from "@images/mainheroimage.jpg";
export default function MainHero() {
  return (
    <div className="border border-none h-auto bg-cover bg-center bg-cream lg:flex relative">
      <LeftArea />
      <RightArea />
      <div className="custom-shape-divider-bottom-1712632523">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

function LeftArea() {
  return (
    <div className="w-full h-full px-6 md:pl-40 pt-16 md:h-full flex flex-col items-start justify-center">
      <h1 className="text-black text-4xl text-left">
        Organic Waste <br />
        Bags For a <span className="text-lightgreen">Greener</span> <br />
        San Diego
      </h1>
      <p className="text-black pt-10 text-xl">
        Our water-repellent paper bags are designed for San Diego&apos;s composting
        system, ensuring strength and durability. They are the perfect solution
        and size for your kitchen pails.
      </p>
      <div className="flex w-full align-end justify-end pt-10">
        <button className="bg-lightgreen w-48 h-14">Order Now</button>
      </div>
    </div>
  );
}

function RightArea() {
  return (
    <div className="w-full h-auto flex flex-col items-start justify-center px-6 md:px-20 pt-14 pb-40 mb-10">
      <div className="flex flex-col items-start">
        <Image
          src={mainHeroImage}
          alt="Compostable paper bags"
          width={600}
          height={380}
        />
      </div>
    </div>
  );
}
