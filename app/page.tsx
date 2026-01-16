import Image from "next/image";
import NftCard from "./components/nft-card";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <NftCard />
    </div>
  );
}
