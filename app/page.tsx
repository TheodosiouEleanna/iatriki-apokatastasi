"use client";
import Image from "next/image";
import reception from "public/images/iatreio_1.jpg";
import { StyledButton } from "styles/general";

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="absolute top-1/4 left-10 max-w-2xl">
        <h1 className="text-7xl text-blue font-extrabold pb-2">
          <span className="text-black">Καλώς ήρθατε</span> στο Ιατρείο μας.
        </h1>
        <div className="flex gap-2">
          <StyledButton variant="primary">Κλείσε Ραντεβού</StyledButton>
          <StyledButton variant="secondary">Επικοινωνία</StyledButton>
        </div>
      </div>
      <Image className="w-full" src={reception} alt="recepetion" />
    </main>
  );
}
