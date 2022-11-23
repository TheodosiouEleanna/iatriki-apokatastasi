import Card from 'ui/Card';
import Image from 'next/image';
import SectionTitle from 'ui/SectionTitle';
import { servicesInfo } from 'data/services';

const ServicesPage = () => {
  return (
    <main className='flex items-center justify-center mt-6 flex-col'>
      <SectionTitle title='ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ' />
      <div className='w-2/3 grid  gap-10  justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>
        {servicesInfo.map(service => (
          <Card
            key={service.title}
            className='overflow-y-auto overflow-x-hidden h-72 max-h-72 w-64 max-w-64 min-w-64 col-span-1'
          >
            <Image
              alt={service.title}
              src={service.image}
              className='w-full h-28 max-h-28 hover:brightness-75 transition ease-in-out duration-150'
            />
            <main className='p-4 w-full'>
              <h1 className='font-extrabold text-2xl'>{service.title}</h1>
              <span className='break-words'>{service.description}</span>
            </main>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
