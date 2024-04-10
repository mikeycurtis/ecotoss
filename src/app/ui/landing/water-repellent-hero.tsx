import Image from "next/image";
import macroDropsImage from "@images/macrowaterdrops.jpg";

export default function WaterRepellentHero() {
  return (
    <div className="border border-none w-screen h-auto bg-cover bg-center bg-lightgreen lg:flex relative pb-14">
      <div className="image bg-lightgreen w-auto h-auto mt-0 md:mx-40">
        <Image
          src={macroDropsImage}
          alt="Water proof paper bags"
          className="rounded-[50%] hidden sm:block md:w-[500px] md:h-[500px]"
        />
      </div>

      <div className="features flex-1 bg-lightgreen w-40 h-auto md:mt-20 md:mr-40">
        <h1 className="text-cream text-4xl pb-6">
          Water-Repellent: Keeping You and Your Bins Dry
        </h1>
        <p className="text-cream text-xl">
          Our bags are water-repellent to ensure that your wet organics do not
          leak on you. In your kitchen pail or your big green bin, the liquid
          from your coffee ground, tea bags, and wet organics will stay confined
          to our EcoToss bags.
        </p>
      </div>
      <div className="custom-shape-divider-bottom-1712710911 hidden sm:block">
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
