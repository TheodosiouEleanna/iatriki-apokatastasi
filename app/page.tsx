import Image from "next/image";
import styles from "./page.module.css";
import reception from "public/images/iatreio_1.jpg";

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="absolute top-1/4 left-10 max-w-2xl">
        <h1 className="text-7xl text-blue font-extrabold">
          <span className="text-black">Welcome To</span> Dunes Chiropractic
          Center
        </h1>
      </div>
      <Image className="w-full" src={reception} alt="recepetion" />
    </main>
  );
}
