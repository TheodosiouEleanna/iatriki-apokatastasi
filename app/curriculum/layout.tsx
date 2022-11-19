// 'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const curriculumList = [
  {
    href: '/',
    title: 'ΒΙΟΓΡΑΦΙΚΟ'
  },
  {
    href: '/seminars',
    title: 'ΣΕΜΙΝΑΡΙΑ-ΣΥΝΕΔΡΙΑ'
  },
  {
    href: '/scientific-work',
    title: 'ΕΠΙΣΤΗΜΟΝΙΚΕΣ-ΕΡΓΑΣΙΕΣ'
  },
  {
    href: '/lectures',
    title: 'ΔΙΑΛΕΞΕΙΣ'
  },
  {
    href: '/activities',
    title: 'ΑΛΛΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ'
  }
];

const basePath = '/curriculum';
const CurriculumLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const pathname = usePathname();

  return (
    <main className='relative w-full flex justify-start items-start '>
      <div className='w-2/3 flex justify-center items-start'>
        <div>
          {curriculumList.map(curriculum => {
            const { href, title } = curriculum;
            const isSelected = pathname?.includes(href);
            console.log({ isSelected, pathname });

            return (
              <Link href={`${basePath}${href}`} key={href}>
                <div
                  className={`border-2 border-black p-4 ${isSelected ? 'bg-blue' : 'bg-gray-400'}`}
                >
                  {title}
                </div>
              </Link>
            );
          })}
        </div>

        {children}
      </div>
    </main>
  );
};

export default CurriculumLayout;
