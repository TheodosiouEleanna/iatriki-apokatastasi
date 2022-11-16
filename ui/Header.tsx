"use client";
import { MdMail, MdPhone, MdLocationPin } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import { StyledButton } from "styles/general";
import { ADDRESS, MAIL, PHONE } from "data/general";

const linksConfig = [
  { path: "/", text: "Αρχική" },
  { path: "/services", text: "Υπηρεσίες" },
  { path: "/scientific-articles", text: "Eπιστημονικά Άρθρα" },
  { path: "/curriculum", text: "Βιογραφικό" },
  { path: "/contact", text: "Επικοινωνία" },
];

const Header = (): JSX.Element => {
  return (
    <header>
      <nav className="bg-white border-gray-200   py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-end items-end mx-auto max-w-screen-xl  bg-blue gap-4 p-2 text-primary-50">
          <Link className="flex gap-2 items-center" href={`tel:${PHONE}`}>
            <MdPhone size={30} /> {`tel:${PHONE}`}
          </Link>
          <Link className="flex gap-2 items-center" href={`mailto:${MAIL}`}>
            <MdMail size={30} />
            {MAIL}
          </Link>

          <Link className="flex gap-2 items-center" href="/map">
            <MdLocationPin size={30} />
            {ADDRESS}
          </Link>
        </div>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Flowbite Logo" />
          </Link>

          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {linksConfig.map((linkConfig) => (
              <li key={linkConfig.path}>
                <Link href={linkConfig.path} className="hover:text-blue">
                  {linkConfig.text}
                </Link>
              </li>
            ))}
          </ul>
          <StyledButton variant="primary">Κλείσε Ραντεβού</StyledButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;