import { seminars } from 'data/seminars';

const Seminars = () => {
  return (
    <main className='relative w-full'>
      {seminars.map((seminar, idx) => (
        <h1 key={idx}>
          <strong>{idx + 1}.</strong>&nbsp;
          {seminar}
        </h1>
      ))}
    </main>
  );
};

export default Seminars;
