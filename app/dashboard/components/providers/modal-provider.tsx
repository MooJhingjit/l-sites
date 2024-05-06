"use client";

import { useEffect, useState } from "react";

import { DealModal } from "../modals/DealModal";
import { ContactModal } from "../modals/ContactModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DealModal />
      <ContactModal />
    </>
  );
};
