import Image from "next/image";
import images from "../assets/bg-cover.svg";
export default function Home() {
  return (
    <div className="bg-sectionbg overflow-hidden bg-cover h-full">
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
