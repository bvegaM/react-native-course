import React, { useState } from 'react'
import { emptyPerson, Person } from '../models/person'

export const TOTAL_STEPS = 3;

export const usePersonForm = () => {
  
    const [person, setPerson] = useState<Person>(emptyPerson);
    const [step, setStep] = useState(0);

    const goToStep = (target: number) => {
        setStep(target);
    };

    const updateField = (field: keyof Person, value: string) => {
        console.log(value);
        setPerson(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const nextStep = () => goToStep(step + 1);

    const reset = () => {
        setStep(0)
        setPerson(emptyPerson)
    }
  
    return {person, step, nextStep, updateField, reset};
}
