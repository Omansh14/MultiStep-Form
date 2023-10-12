import {create} from "zustand";

export interface FormState {
  step1: {
    name: string;
    email: string;
    phone: string;
  };
  step2: {
    plan: string;
    yearly: boolean;
  };
  step3: {
    addOns: string[];
  };
  setForm1: (form: FormState["step1"]) => void;
  setForm2: (form: FormState["step2"]) => void;
  setForm3: (form: FormState['step3']) => void;
}

const useFormStore = create<FormState>((set) => ({
  step1: {
    name: "",
    email: "",
    phone: "",
  },
  step2: {
    plan: "",
    yearly: false,
  },
  step3: {
    addOns: [],
  },
  setForm1: (form: FormState["step1"]) => set({step1: form}),
  setForm2: (form: FormState['step2']) => set({step2: form}),
  setForm3: (form: FormState['step3']) => set({step3: form}),
}));

export default useFormStore;
