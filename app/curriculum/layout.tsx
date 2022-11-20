'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const curriculumList = [
  {
    href: '/curriculum',
    title: 'ΒΙΟΓΡΑΦΙΚΟ'
  },
  {
    href: '/curriculum/seminars',
    title: 'ΣΕΜΙΝΑΡΙΑ-ΣΥΝΕΔΡΙΑ'
  },
  {
    href: '/curriculum/scientific-work',
    title: 'ΕΠΙΣΤΗΜΟΝΙΚΕΣ-ΕΡΓΑΣΙΕΣ'
  },
  {
    href: '/curriculum/lectures',
    title: 'ΔΙΑΛΕΞΕΙΣ'
  },
  {
    href: '/curriculum/activities',
    title: 'ΑΛΛΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ'
  }
];

const CurriculumLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className='w-full flex justify-center items-center flex-col mt-10'>
      <ul className='block sm:flex'>
        {curriculumList.map(curriculum => {
          const { href, title } = curriculum;
          const isActive = pathname === href;

          return (
            <Link href={href} key={href}>
              <li
                className={classNames(
                  'px-4 py-2 sm:mr-0.5 flex items-center font-medium border-t border-r border-l border-gray-200 first:rounded-t-xl sm:rounded-t-xl cursor-pointer hover:text-blue',
                  { 'bg-white text-blue': isActive }
                )}
              >
                {title}
              </li>
            </Link>
          );
        })}
      </ul>
      <section className='bg-white border border-gray-200 sm:rounded-r-xl rounded-b-xl w-full p-4 border-t-0'>
        {children}
      </section>
    </div>
  );
};

export default CurriculumLayout;
