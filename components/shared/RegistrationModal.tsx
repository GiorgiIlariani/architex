"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-[#09121FCC] backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`w-[705px] h-[517px] relative z-30 bg-white shadow-lg rounded-[25px] transition-transform duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {children}
        <Button
          className="w-12 h-12 rounded-[13px] absolute top-[18px] right-[18px] bg-[#FFFFFF66] hover:bg-[#FFFFFF66] flex items-center justify-center mt-4 text-black"
          onClick={onClose}
        >
          <IoMdClose className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Modal;
