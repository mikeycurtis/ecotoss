import Image from "next/image";
import compostableImage from "@images/compostable.png";

export default function BioplasticsHero() {
  return (
<<<<<<< HEAD
    <div
      id="bioplastics-hero"
      className="border border-none w-screen h-auto bg-cover bg-center bg-lightbrown lg:flex"
    >
      <div className="features flex-1 w-40 h-40 mt-20 md:ml-40">
=======
    <div className="border border-none w-screen h-auto bg-cover bg-center bg-lightbrown lg:flex">
      <div className="features flex-1 w-auto md:w-40 h-auto md:h-40 md:ml-40 mx-4 pt-10">
>>>>>>> c4b59c18877afbbebd2cd65b73642f1a6f82ef3e
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
      <div className="image w-200 h-200 md:w-450 md:h-450 mt-0 md:mx-40 align-center justify-center flex">
        <Image
          src={compostableImage}
          alt="Water proof paper bags"
          className="rounded-[50%]"
        />
      </div>
    </div>
  );
}
