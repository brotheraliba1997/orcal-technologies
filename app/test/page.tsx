"use client";
import Image from "next/image";
import mathew from "@/assests/mathew.png";
import creating from "@/assests/hinobe.jpg";
import runestudios from "@/assests/runestudios.jpg";

export default function ScrollImages() {
  return (
    <div className="h-[300vh] relative">
      {/* Image 1 */}
      <div className="h-screen sticky top-0 z-10">
        <Image
          src={mathew}
          alt="Image 1"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Image 2 */}
      <div className="h-screen sticky top-0 z-20">
        <Image
          src={creating}
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="h-screen sticky top-0 z-30">
        <Image
          src={runestudios}
          alt="Image 3"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
