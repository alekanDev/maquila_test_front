import { useContext } from "react";
import { MobileContext } from "@/context/MobileContext";

export const useContextMobile = () => {
  const context = useContext(MobileContext)
  if (context === undefined) {
    throw new Error("useContextMobile must be used within a MobileProvider")
  }
  return context;
};