import { seminars } from 'data/seminars';

const Seminars = () => {
  return (
    <main className='flex items-center justify-center'>
      <table className='table-auto border-collapse border border-slate-300 sm:w-full md:w-2/3'>
        <thead>
          <tr className='bg-blue text-white'>
            <td className='p-2'>#</td>
            <td className='p-2'>Τίτλος</td>
          </tr>
        </thead>
        <tbody>
          {seminars.map((seminar, idx) => (
            <tr key={idx} className='even:bg-zinc-400 odd:bg-blue-100'>
              <td className='p-2'>
                <strong>{idx + 1}.</strong>
              </td>
              <td className='p-2'>{seminar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Seminars;
