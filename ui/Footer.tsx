import {
  MdMailOutline,
  MdOutlineCalendarToday,
  MdOutlinePhone,
  MdLocationPin,
  MdAccessTime
} from 'react-icons/md';

const footerSections = [
  {
    title: 'Ωράριο λειτουργίας',
    subtitles: [
      { icon: <MdOutlineCalendarToday />, value: 'Δευτέρα - Παρασκευή' },
      { icon: <MdAccessTime />, value: '9:00 - 21:00' }
    ]
  },
  {
    title: 'Επικοινωνία',
    subtitles: [
      { icon: <MdLocationPin />, value: 'Ανδρούτσου 22, Ηλιούπολη' },
      { icon: <MdOutlinePhone />, value: '2109711360, 2109711324' },
      { icon: <MdMailOutline />, value: 'info@iatriki-apokatastasi.gr' }
    ]
  }
];

const Footer = (): JSX.Element => {
  return (
    <footer className='bg-black text-white flex items-center flex-col py-10'>
      <div className='flex justify-center items-start gap-20 pb-7'>
        {footerSections.map(footerSection => (
          <section key={footerSection.title}>
            <h4 className='text-3xl pb-4 font-bold'>{footerSection.title}</h4>
            {footerSection.subtitles.map(subtitle => (
              <div className='text-lg flex  items-center justify-start gap-2' key={subtitle.value}>
                {subtitle.icon} {subtitle.value}
              </div>
            ))}
          </section>
        ))}
      </div>
      <section>
        © Copyright 2022 iatriki-apokatastasi.gr. Με την επιφύλαξη παντός δικαιώματος.
      </section>
    </footer>
  );
};

export default Footer;
