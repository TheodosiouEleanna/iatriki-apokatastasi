import Timeline from 'ui/Timeline';
import {
  basicTraining,
  abroadTraining,
  specialTraining,
  masterTitles
} from 'data/curriculum/curriculum';
import { ADDRESS } from 'data/general';
import { MdSchool, MdMedicalServices, MdFlightTakeoff, MdInfoOutline } from 'react-icons/md';
import IconTitle from 'ui/IconTitle';

const Curriculum = () => {
  return (
    <main className='w-full flex items-center justify-center flex-col'>
      <div className='p-5 mr-auto border-gray-700 border-2 rounded-xl'>
        <h1 className='font-extrabold text-xl text-blue flex justify-center items-center gap-2'>
          CURRICULUM VITAE <MdInfoOutline className='' />
        </h1>
        <h2>
          <strong>Ονομα:</strong> ΣΤΑΥΡΟΣ
        </h2>
        <h2>
          <strong>Επώνυμο:</strong> ΔΗΜΗΤΡΑΚΟΠΟΥΛΟΣ
        </h2>
        <h2>
          <strong>Πατρώνυμο:</strong> ΝΙΚΟΛΑΟΣ
        </h2>
        <h2>
          <strong>Γέννηση:</strong> 17/9/1957{' '}
        </h2>
        <h2>
          <strong>Διεύθυνση:</strong> {ADDRESS}
        </h2>
      </div>
      <ul className='relative sm:w-full xl:w-3/4 '>
        <IconTitle title='ΒΑΣΙΚΗ ΕΚΠΑΙΔΕΥΣΗ' icon={<MdSchool size={40} />} />
        <Timeline timeInfo={basicTraining} />
        <IconTitle title='ΕΚΠΑΙΔΕΥΣΗ ΣΤΟ ΕΞΩΤΕΡΙΚΟ' icon={<MdFlightTakeoff size={40} />} />
        <Timeline timeInfo={abroadTraining} />
        <IconTitle
          title='ΕΚΠΑΙΔΕΥΣΗ ΣΕ ΕΞΕΙΔΙΚΕΥΜΕΝΑ ΚΕΝΤΡΑ'
          icon={<MdMedicalServices size={40} />}
        />
        <Timeline timeInfo={specialTraining} />

        <IconTitle title='ΤΙΤΛΟΙ-ΠΤΥΧΙΑ' icon={<MdSchool size={40} />} />
        <Timeline timeInfo={masterTitles} />
      </ul>
    </main>
  );
};

export default Curriculum;
