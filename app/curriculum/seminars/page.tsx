import { seminars } from 'data/seminars';
import Card from 'ui/Card';

const Seminars = () => {
  return (
    <main className='flex items-center justify-center'>
      <ul className='relative sm:w-full xl:w-3/4'>
        {seminars.map((seminar, idx) => (
          <li
            key={idx}
            className='grid grid-flow-row grid-cols-7 items-center justify-start gap-10'
          >
            <div className='border-r-4 border-blue flex items-center justify-start relative h-full'>
              <h1 className='hidden lg:block break-words mr-2'>{seminar.date}</h1>
              <span className=' absolute w-8 h-8 border-blue rounded-full bg-blue  -right-[17px] flex items-center justify-center  text-white text-sm'>
                {idx + 1}
              </span>
              {idx === 0 && (
                <span className='absolute w-8 h-[calc(50%_-_1rem)] top-0 bg-white  -right-[17px]'></span>
              )}
            </div>
            <div className='flex justify-start col-span-6 my-4'>
              <Card className='p-3'>
                <h1 className='lg:hidden'>{seminar.date}</h1>
                <h3 className='ml-4 text-lg font-semibold text-gray-900'>{seminar.title}</h3>
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Seminars;
