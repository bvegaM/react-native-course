export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  subscribe: boolean;
  notes: string;
};

export const defaultFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  city: "",
  subscribe: false,
  notes: "",
};

export const formSteps = ["Profile", "Contact", "Preferences", "Summary"] as const;

export type FormStep = (typeof formSteps)[number];

export type FormFieldUpdater = <Key extends keyof FormData>(
  field: Key,
  value: FormData[Key]
) => void;
