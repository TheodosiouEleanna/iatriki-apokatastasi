import Button from 'ui/Button';

const Home = () => {
  return (
    <main className='relative w-full'>
      <div className='absolute top-1/4 left-10 max-w-2xl'>
        <h1 className='text-7xl text-blue font-extrabold pb-2'>
          <span className='text-black'>Καλώς ήρθατε</span> στο Ιατρείο μας.
        </h1>
        <div className='flex gap-2'>
          <Button variant='primary'>Επικοινωνία</Button>
        </div>
      </div>
      <div className='skata w-full' />
      {/* <Image className='w-full' src={reception} alt='recepetion' /> */}
    </main>
  );
};

export default Home;
