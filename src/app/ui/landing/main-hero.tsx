import Image from "next/image";
export default function MainHero() {
  return (
    <div className="border border-2 h-auto bg-cover bg-center bg-stone lg:flex">
      <LeftArea />
      <RightArea />
    </div>
  );
}

function LeftArea() {
  return (
    <div className="bg-blue-200 w-full h-auto px-10 py-16 md:h-full flex-row items-center justify-center">
      <p className="text-white text-4xl text-left">
        Organic Waste <br />
        Bags For a <span className="text-lightgreen">Greener</span> <br />
        San Diego
      </p>
      <p className="mt-4">
        Our water-repellent paper bags are designed for San Diego's composting
        system, ensuring strength and durability. They are the perfect solution
        and size for your kitchen pails.
      </p>
    </div>
  );
}

function RightArea() {
  return (
    <div className="bg-red-200 w-full h-auto flex-row items-center justify-center px-10 py-16">
      <div className="bg-white w-100 h-40"></div>
      <button className="bg-blue-200 w-24 h-10 mt-5">Order Now</button>
    </div>
  );
}
