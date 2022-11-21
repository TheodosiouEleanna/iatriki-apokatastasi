'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdBook, MdContactPage, MdEvent, MdVolunteerActivism, MdPerson } from 'react-icons/md';

const curriculumList = [
  {
    href: '/curriculum',
    title: 'ΒΙΟΓΡΑΦΙΚΟ',
    icon: <MdContactPage size={20} />
  },
  {
    href: '/curriculum/seminars',
    title: 'ΣΕΜΙΝΑΡΙΑ-ΣΥΝΕΔΡΙΑ',
    icon: <MdEvent size={20} />
  },
  {
    href: '/curriculum/scientific-work',
    title: 'ΕΠΙΣΤΗΜΟΝΙΚΕΣ-ΕΡΓΑΣΙΕΣ',
    icon: <MdBook size={20} />
  },
  {
    href: '/curriculum/lectures',
    title: 'ΔΙΑΛΕΞΕΙΣ',
    icon: <MdPerson size={20} />
  },
  {
    href: '/curriculum/activities',
    title: 'ΑΛΛΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ',
    icon: <MdVolunteerActivism size={20} />
  }
];

const CurriculumLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className='w-full  mt-10'>
      <ul className='flex  justify-center items-center overflow-y-auto ml-10 gap-2'>
        {curriculumList.map(curriculum => {
          const { href, title, icon } = curriculum;
          const isActive = pathname === href;

          return (
            <Link href={href} key={href}>
              <li
                className={classNames(
                  'px-4 py-2 h-[40px] flex  items-center font-medium  border-gray-200 first:rounded-t-xl sm:rounded-t-xl cursor-pointer hover:text-blue gap-2',
                  { 'bg-white text-blue border-t border-r border-l': isActive }
                )}
              >
                {icon}
                {title}
              </li>
            </Link>
          );
        })}
      </ul>
      <section className='bg-white border border-gray-200  p-4 border-t-0 mx-10 '>
        {children}
      </section>
    </div>
  );
};

export default CurriculumLayout;
