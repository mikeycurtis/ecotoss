import Image from "next/image";
import compostableImage from "@images/compostable.png";

export default function BioplasticsHero() {
  return (
    <div
      id="bioplastics-hero"
      className="border border-none w-screen h-auto bg-cover bg-center bg-lightbrown lg:flex"
    >
      <div className="features flex-1 w-40 h-40 mt-20 md:ml-40">
        <h1 className="text-cream text-4xl pb-6">
          No Bioplastics: In Accordance with San Diego
        </h1>
        <p className="text-cream text-xl">
          Our bags are made from `00% sustainable organic materials: pine +
          spruce fibers and potatoes starch. No bioplastics of plasticizers.
          <br />
          <br />
          Bioplastics do not consistently break down, jam up composting
          machinery, and leave behind microplastics that can enter our drinking
          water and food. The county of San Diego does not accept bioplastics in
          their composting facilities.
        </p>
      </div>
      <div className="image w-auto h-auto mt-0 md:mx-40">
        <Image
          src={compostableImage}
          alt="Water proof paper bags"
          width={450}
          height={450}
          className="rounded-[50%]"
        />
      </div>
    </div>
  );
}
