import Image from "next/image";
export default function FeaturesHero() {
  return (
    <div className="border border-none w-screen h-auto bg-cover bg-center bg-lightgreen lg:flex">
      <div className="image flex-1 bg-darkbrown w-40 h-40 mt-20 md:pl-40">
        <h1 className="text-white">Hi there</h1>
      </div>
      <div className="features flex-1 bg-lightbrown w-40 h-40 mt-20"></div>
    </div>
  );
}
