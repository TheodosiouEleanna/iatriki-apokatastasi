'use client';

import { MdMail, MdPhone, MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png';
import { ADDRESS, MAIL, PHONE } from 'data/general';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import Button from 'ui/Button';

const linksConfig = [
  { path: '/', text: 'Αρχική' },
  { path: '/services', text: 'Υπηρεσίες' },
  { path: '/scientific-articles', text: 'Eπιστημονικά Άρθρα' },
  { path: '/curriculum', text: 'Βιογραφικό' },
  { path: '/contact', text: 'Επικοινωνία' }
];

const Header = () => {
  const pathname = usePathname();

  const scrollToAppointment = useCallback(() => {
    const appointmentDiv = document.getElementById('appointment-name');

    if (appointmentDiv) {
      appointmentDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      appointmentDiv.focus();
    }
  }, []);

  return (
    <header>
      <nav className='pb-5 bg-white'>
        <div className='flex flex-wrap justify-end items-end  max-w-screen mb-4 bg-blue gap-7  text-primary-50 py-3 pr-10'>
          <Link className='text-sm flex gap-2 items-center active:text-blue' href={`tel:${PHONE}`}>
            <MdPhone size={30} />
            {PHONE}
          </Link>
          <Link className='text-sm flex gap-2 items-center' href={`mailto:${MAIL}`}>
            <MdMail size={30} />
            {MAIL}
          </Link>
          <Link className='text-sm flex gap-2 items-center' href='/contact'>
            <MdLocationPin size={30} />
            {ADDRESS}
          </Link>
        </div>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link href='/' className='flex items-center'>
            <Image src={logo} alt='Flowbite Logo' />
          </Link>

          <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
            {linksConfig.map(linkConfig => {
              const isLinkActive = linkConfig.path === pathname;

              return (
                <li key={linkConfig.path}>
                  <Link
                    href={linkConfig.path}
                    className={`hover:text-blue ${isLinkActive ? 'text-blue' : ''}`}
                  >
                    {linkConfig.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button variant='primary' onClick={scrollToAppointment}>
            Κλείσε Ραντεβού
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
