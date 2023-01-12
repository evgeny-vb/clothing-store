import React, {useEffect, useState} from "react";
import Portal from "../Portal";


type BackdropProps = {
  onClose: () => void,
  className: string,
}

type ModalOverlayProps = {
  className: string,
  children?: React.ReactNode
}

type ModalProps = {
  onClose: () => void,
  children?: React.ReactNode
}

const Backdrop = ({onClose, className}: BackdropProps) => (
  <div className={`fixed top-0 left-0 z-10 w-full h-screen
    backdrop-blur-md bg-black/10
    transition-all ease-out duration-300 ${className}`}
    onClick={onClose}
  />
)

const ModalOverlay = ({className, children}: ModalOverlayProps) => (
  <div className={`fixed z-10 p-4 bg-white
    shadow-sm rounded shadow-zinc-800
    w-screen h-full left-0 top-0
    md:w-[40rem] md:h-auto md:top-[15vh] md:left-[calc(50%-20rem)]
    transition-all ease-out duration-300 ${className}`}
  >
    {children}
  </div>
)

const Modal = ({onClose, children}: ModalProps) => {
  const [backdropClasses, setBackdropClasses] = useState("opacity-0");
  const [modalClasses, setModalClasses] = useState("-translate-y-full");

  useEffect(() => {
    setBackdropClasses("")
    setModalClasses("")
  }, [])

  return (
    <Portal>
      <Backdrop className={backdropClasses} onClose={onClose}/>
      <ModalOverlay className={modalClasses}>{children}</ModalOverlay>
    </Portal>
  );
};

export default Modal;