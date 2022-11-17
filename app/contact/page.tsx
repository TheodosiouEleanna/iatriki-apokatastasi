import { cloneElement } from 'react';
import { MdMailOutline, MdOutlinePhone, MdLocationPin } from 'react-icons/md';

const contactInfo = [
  {
    icon: <MdLocationPin className='text-blue hover:text-black' size={70} />,
    title: 'Διεύθνση',
    value: 'Ανδρούτσου 22, Ηλιούπολη'
  },
  {
    icon: <MdOutlinePhone className='text-blue hover:text-black' size={70} />,
    title: 'Τηλέφωνο',
    value: '2109711360, 2109711324'
  },
  {
    icon: <MdMailOutline className='text-blue hover:text-black' size={70} />,
    title: 'Email',
    value: 'info@iatriki-apokatastasi.gr'
  }
];

export default function Map() {
  return (
    <main className='flex items-center justify-center gap-10'>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.9871647693208!2d23.7547994!3d37.9307303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd8c56b4503f%3A0x5d6c464600d258f1!2sOdissea%20Androutsou%2022%2C%20Ilioupoli%20163%2041!5e0!3m2!1sen!2sgr!4v1668618908141!5m2!1sen!2sgr'
        width='600'
        height='450'
        className='border-hidden'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
      <div className='flex items-center justify-start gap-4 flex-col'>
        {contactInfo.map(info => (
          <section key={info.title} className='flex items-center justify-center gap-4'>
            {cloneElement(info.icon)}
            <span className='flex flex-col gap-2'>
              <p className='font-extrabold'>{info.title}</p>
              <p> {info.value}</p>
            </span>
          </section>
        ))}
      </div>
    </main>
  );
}
