import NavBar from "./ui/navbar";
import MainHero from "./ui/landing/main-hero";
import WaterRepellentHero from "./ui/landing/water-repellent-hero";
import BioplasticsHero from "./ui/landing/bioplastics-hero";
export default function Page() {
  return (
    <>
      <NavBar />
      <MainHero />
      <WaterRepellentHero />
      <BioplasticsHero />
    </>
  );
}
