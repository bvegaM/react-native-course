import { useState } from 'react';
import { Person, emptyPerson } from '../models/person';

export const TOTAL_STEPS = 3;

export const usePersonForm = () => {
  const [person, setPerson] = useState<Person>(emptyPerson);
  const [step, setStep] = useState(0);

  const updateField = (field: keyof Person, value: string) => {
    setPerson(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const goToStep = (target: number) => {
    setStep(target);
  };

  const nextStep = () => goToStep(step + 1);
  const reset = () => {
    setPerson(emptyPerson);
    setStep(0);
  };

  return { person, step, updateField, nextStep, reset };
};
