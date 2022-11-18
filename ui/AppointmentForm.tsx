'use client';

import { ChangeEvent, HTMLInputTypeAttribute, useCallback, useState } from 'react';
import Button from 'ui/Button';
import Card from 'ui/Card';
import TextField from 'ui/TextField';
import SectionTitle from 'ui/SectionTitle';
import TextArea from 'ui/TextArea';

interface InputFieldProps {
  id: string;
  dataField: string;
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  required: boolean;
  colSpan?: number;
  autocomplete?: string;
}

const inputFields: InputFieldProps[] = [
  {
    id: 'appointment-name',
    autocomplete: 'name',
    dataField: 'name',
    inputType: 'text',
    placeholder: 'Όνομα',
    required: true
  },
  {
    id: 'appointment-email',
    autocomplete: 'email',
    dataField: 'email',
    inputType: 'email',
    placeholder: 'Email',
    required: true
  },
  {
    id: 'appointment-phone',
    autocomplete: 'phone',
    dataField: 'phone',
    inputType: 'tel',
    placeholder: 'Τηλέφωνο',
    required: true
  },
  {
    id: 'appointment-date',
    dataField: 'date',
    inputType: 'date',
    placeholder: 'Ημερομηνία Ραντεβού',
    required: true
  }
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    name: '',
    date: new Date(),
    email: '',
    info: ''
  });

  const onChangeFormData = useCallback(
    (dataField: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [dataField]: e.target.value }));
    },
    []
  );

  return (
    <main className='flex items-center justify-center flex-col'>
      <SectionTitle title='ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ' />
      <Card className='mb-5'>
        <form>
          <div className='grid p-4 grid-cols-2 gap-2'>
            {inputFields.map(inputField => {
              const { dataField, inputType, placeholder, required, colSpan, id, autocomplete } =
                inputField;

              return (
                <TextField
                  id={id}
                  autoComplete={autocomplete}
                  key={dataField}
                  required={required}
                  type={inputType}
                  value={formData[dataField as string]}
                  placeholder={placeholder}
                  onChange={onChangeFormData(dataField)}
                />
              );
            })}
            <TextArea
              className='col-span-full'
              required={false}
              rows={4}
              value={formData.info as string}
              placeholder='Επιπλέον Πληροφορίες'
              onChange={onChangeFormData('info')}
            />
            <Button className='mt-5' variant='primary'>
              Κλείσε Ραντεβού
            </Button>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default AppointmentForm;
