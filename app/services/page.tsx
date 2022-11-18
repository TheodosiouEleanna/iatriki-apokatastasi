import Card from 'ui/Card';
import botoxImage from 'public/images/services/botox.jpg';
import Image from 'next/image';
import SectionTitle from 'ui/SectionTitle';

const servicesInfo = [
  {
    title: 'Botox',
    description:
      'Η πιο ευρέως διαδεδομένη και δημοφιλής τεχνική που εφαρμόζεται σήμερα στην πλαστική χειρουργική για την αντιμετώπιση των ρυτίδων είναι η θεραπεία με βοτουλινική τοξίνη, ευρέως γνωστή ως Botox/Dysport.   Η βοτουλινική τοξίνη είναι μία πρωτεΐνη, η οποία παράγεται από το κλωστηρίδιο Botulinum και κυκλοφορεί σε δύο συσκευασίες: Ως Botox (Allergan) και ως Dysport (Ipsen).    Τα τελευταία χρόνια, διαπιστώθηκε τυχαία πως το Botox είναι εξαιρετικά αποτελεσματικό στην εξάλειψη των ρυτίδων έκφρασης, καθώς χαλαρώνει συγκεκριμένους μύες του προσώπου, με αποτέλεσμα λόγω της ακινητοποίησης- μη σύσπασής τους, να εξαφανίζονται οι ρυτίδες στην περιοχή. Να σημειωθεί ότι στόχος της χρήσης του Botox είναι η προσωρινή αποδυνάμωση των μυών, όχι η παράλυσή τους.',
    image: botoxImage
  },
  {
    title: 'Botox',
    description: 'Mpla mpla mpla mpla',
    image: botoxImage
  },
  {
    title: 'Botox',
    description: 'Mpla mpla mpla mpla',
    image: botoxImage
  },
  {
    title: 'Botox',
    description: 'Mpla mpla mpla mpla',
    image: botoxImage
  },
  {
    title: 'Botox',
    description: 'Mpla mpla mpla mpla',
    image: botoxImage
  },
  {
    title: 'Botox',
    description: 'Mpla mpla mpla mpla',
    image: botoxImage
  },
  {
    title: 'Botox',
    description: 'Mpla mpla mpla mpla',
    image: botoxImage
  }
];

const ServicesPage = () => {
  return (
    <main className='flex items-center justify-center mt-5 flex-col'>
      <SectionTitle title='ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ' />
      <div className='w-2/3 grid grid-cols-4 gap-10  justify-center items-center'>
        {servicesInfo.map(service => (
          <Card
            key={service.title}
            className='overflow-auto h-72 max-h-72 w-64 max-w-64 min-w-64 col-span-1'
          >
            <Image
              alt={service.title}
              src={service.image}
              className='w-full h-28 max-h-28 hover:brightness-75 transition ease-in-out duration-150'
            />
            <main className='p-4'>
              <h1 className='font-extrabold text-2xl'>{service.title}</h1>
              <p className='break-words'>{service.description}</p>
            </main>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
