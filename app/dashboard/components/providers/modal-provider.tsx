"use client";

import { useEffect, useState } from "react";

import { DealModal } from "../modals/DealModal";
import { ContactModal } from "../modals/ContactModal";
import { LeadModal } from "../modals/LeadModal";
import { PipelineStateModal } from "../modals/PipelineStageModal";

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
      <LeadModal />
      <ContactModal />
      <PipelineStateModal />
    </>
  );
};
