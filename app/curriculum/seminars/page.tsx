import Timeline from 'ui/Timeline';
import { seminars } from 'data/curriculum/seminars';

const Seminars = () => {
  return (
    <main className='flex items-center justify-center'>
      <Timeline timeInfo={seminars} />
    </main>
  );
};

export default Seminars;
