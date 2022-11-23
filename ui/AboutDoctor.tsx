import Image from 'next/image';
import { MdInfoOutline } from 'react-icons/md';
import IconTitle from 'ui/IconTitle';
import doctorImage from 'public/images/iatros.jpg';
import Card from 'ui/Card';
import { servicesInfo } from 'data/services';
import Link from 'next/link';

const AboutDoctor = (): JSX.Element => {
  return (
    <main className='w-full flex flex-col items-center justify-center mt-10'>
      <Card className='w-2/3 items-center justify-center p-5'>
        <IconTitle title='O ΓΙΑΤΡΟΣ' icon={<MdInfoOutline size={30} />} />
        <section className='grid grid-cols-3 gap-10 justify-center items-center'>
          <div className='h-full max-h-96 relative col-span-1'>
            <Image src={doctorImage} alt='iatros' className='rounded-xl border-black border' fill />
          </div>
          <div className='flex flex-col col-span-2'>
            <span>
              Αγαπητοί φίλοι,
              <br />
              <br /> Μετά από πολλά χρόνια που προσφέρουμε με συνέπεια τις υπηρεσίες μας στον τομέα
              της Αποκατάστασης, σας υπενθυμίζουμε ότι το ιατρείο και φυσικοθεραπευτήριο διευθύνεται
              από <strong>Ειδικό Ιατρό Αποκατάστασης-Φυσίατρο-Αθλητίατρο</strong> με εξειδικευμένες
              γνώσεις για: <br />
              <br />
            </span>
            {servicesInfo.map(service => (
              <li key={service.title}>{service.title}</li>
            ))}
            <br />

            <Link href='/services' className='text-blue hover:text-black'>
              Περισσότερα...
            </Link>
          </div>
        </section>
      </Card>
    </main>
  );
};

export default AboutDoctor;
