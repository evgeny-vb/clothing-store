import React, {Fragment} from "react";
import {createPortal} from "react-dom";

const portalOverlays = document.getElementById("overlays") as HTMLElement;

type BackdropProps = {
  onClose: () => void
}

type ModalOverlayProps = {
  children?: React.ReactNode
}

type ModalProps = {
  onClose: () => void,
  children?: React.ReactNode
}

const Backdrop = ({onClose}: BackdropProps) => (
  <div className="fixed top-0 left-0 z-20 w-full h-screen
      backdrop-blur-md bg-black/10"
    onClick={onClose}
  />
)

const ModalOverlay = ({children}: ModalOverlayProps) => (
  <div className="fixed z-30 p-4 bg-white
    shadow-sm rounded-md shadow-zinc-800
    w-screen h-screen
    md:w-[40rem] md:h-auto md:top-[15vh] md:left-[calc(50%-20rem)]"
  >
    {children}
  </div>
)

const Modal = ({onClose, children}: ModalProps) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose}/>, portalOverlays)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalOverlays)}
    </Fragment>
  );
};

export default Modal;