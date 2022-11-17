"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useCallback,
  useState,
} from "react";
import { Card, InputField } from "styles/general";
import SectionTitle from "ui/SectionTitle";

interface InputField {
  dataField: string;
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  required: boolean;
  colSpan?: number;
}

const inputFields: InputField[] = [
  {
    dataField: "name",
    inputType: "text",
    placeholder: "Όνομα",
    required: true,
  },
  {
    dataField: "email",
    inputType: "email",
    placeholder: "Email",
    required: true,
  },
  {
    dataField: "phone",
    inputType: "tel",
    placeholder: "Τηλέφωνο",
    required: true,
  },
  {
    dataField: "date",
    inputType: "date",
    placeholder: "Ημερομηνία Ρεαντεβού",
    required: true,
  },
  {
    dataField: "info",
    inputType: "text",
    placeholder: "Επιπλέον Πληροφορίες",
    required: false,
    colSpan: 2,
  },
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    name: "",
    date: new Date(),
    email: "",
  });

  const onChangeFormData = useCallback(
    (dataField: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [dataField]: e.target.value }));

      console.log({ dataField, e });
    },
    []
  );

  return (
    <main className="flex items-center justify-center flex-col pb-4">
      <SectionTitle title="ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ" />
      <Card>
        <form>
          <div className="grid p-4 grid-cols-2 gap-2">
            {inputFields.map((inputField) => {
              const {
                dataField,
                inputType,
                placeholder,
                required,
                colSpan = 1,
              } = inputField;

              return (
                <InputField
                  className={`col-span-${colSpan}`}
                  key={dataField}
                  required={required}
                  type={inputType}
                  value={formData[dataField as string]}
                  placeholder={placeholder}
                  onChange={onChangeFormData(dataField)}
                />
              );
            })}
          </div>
        </form>
      </Card>
    </main>
  );
};

export default AppointmentForm;
