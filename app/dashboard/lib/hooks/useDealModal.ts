import { create } from "zustand";

export type Data = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

export type DataRefs = any;

type Store = {
  isOpen: boolean;
  data: Data | null;
  refs: DataRefs | undefined;
  onOpen: (data?: Data | null, refs?: DataRefs | null) => void;
  onClose: () => void;
};

const useDealModal = create<Store>((set) => ({
  isOpen: false,
  data: null,
  refs: undefined,
  onOpen: (data, refs) =>
    set({
      isOpen: true,
      data: data ?? null,
      refs: refs ?? undefined,
    }),
  onClose: () => set({ isOpen: false }),
}));

export default useDealModal;
