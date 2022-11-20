'use client';

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
    <div className='w-full flex justify-center items-center flex-col '>
      <ul className='flex flex-wrap text-sm font-medium text-center border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
        {curriculumList.map(curriculum => {
          const { href, title } = curriculum;
          const isSelected = pathname === href;

          return (
            <Link href={href} key={href}>
              <li className={` p-4 ${isSelected ? 'bg-blue' : 'bg-gray-400'}`}> {title}</li>
            </Link>
          );
        })}
      </ul>

      <main>{children}</main>
    </div>
  );
};

export default CurriculumLayout;
