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
    </div>
  );
}
