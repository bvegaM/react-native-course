import { useMemo, useState } from "react";
import { defaultFormData, formSteps, type FormData } from "../models/formData";

export function useFormWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(() => ({ ...defaultFormData }));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const stepDescription = useMemo(() => {
    switch (activeStep) {
      case 0:
        return "Tell us who you are so we can personalize things.";
      case 1:
        return "How can we get in touch with you?";
      case 2:
        return "A few preferences to tailor your experience.";
      default:
        return "Review your information before finishing.";
    }
  }, [activeStep]);

  const updateField = <Key extends keyof FormData>(field: Key, value: FormData[Key]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStep = (): string | null => {
    if (activeStep === 0) {
      if (!formData.firstName.trim()) {
        return "First name is required.";
      }

      if (!formData.email.trim()) {
        return "Email is required.";
      }
    }

    if (activeStep === 1) {
      if (!formData.phone.trim()) {
        return "Phone number is required.";
      }

      if (!formData.city.trim()) {
        return "City is required.";
      }
    }

    return null;
  };

  const goNext = () => {
    const validationError = validateStep();

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setErrorMessage(null);
    setActiveStep((prev) => Math.min(prev + 1, formSteps.length - 1));
  };

  const goBack = () => {
    setErrorMessage(null);
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => {
    setFormData(() => ({ ...defaultFormData }));
    setActiveStep(0);
    setErrorMessage(null);
  };

  const isFinalStep = activeStep === formSteps.length - 1;
  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  return {
    steps: formSteps,
    activeStep,
    formData,
    errorMessage,
    isFinalStep,
    fullName,
    stepDescription,
    updateField,
    goNext,
    goBack,
    reset,
  };
}
