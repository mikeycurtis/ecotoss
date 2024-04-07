import Image from "next/image";
export default function MainHero() {
  return (
    <div
      className="bg-red-300 h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url("/images/mainheroimage.jpg")` }}
    >
      <p className="text-white">
        Organic Waste
        <br />
        Bags For a <span className="text-lightgreen">Greener</span>
        <br />
        San Diego
      </p>
    </div>
  );
}
