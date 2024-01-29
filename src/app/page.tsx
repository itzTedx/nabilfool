import WatchButton from "@/components/watchButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-white">Imran Khan Live</h1>
      <WatchButton />
      <Image
        src="/imran.webp"
        alt="Imran"
        fill
        className="object-cover -z-50"
      />
    </div>
  );
}
