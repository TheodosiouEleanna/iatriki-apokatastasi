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
    <div className='w-full flex justify-center items-center flex-col'>
      <ul className='flex flex-wrap gap-4 my-5 items-center justify-center'>
        {curriculumList.map(curriculum => {
          const { href, title } = curriculum;
          const isActive = pathname === href;

          return (
            <Link href={href} key={href}>
              <li
                className={`rounded-xl  px-3 py-2  font-normal ${
                  isActive ? 'bg-blue text-white' : 'bg-gray-500 text-white hover:bg-blue'
                }`}
              >
                {title}
              </li>
            </Link>
          );
        })}
      </ul>
      <main className='w-full p-4'>{children}</main>
    </div>
  );
};

export default CurriculumLayout;
