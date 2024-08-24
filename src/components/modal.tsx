'use client';

import Dialog from './dialog';
import { useRef } from 'react';

type ModalProps = {
  children: React.ReactNode;
  trigger: string;
};

export default function Modal({ children, trigger }: ModalProps) {
  const dialogTarget = useRef<HTMLDialogElement | null>(null);
  const showDialog = () => dialogTarget.current?.showModal();
  const closeDialog = () => dialogTarget.current?.close();

  return (
    <>
      <button
        className="rounded border bg-blue-500 px-4 py-2 text-sm text-white"
        onClick={showDialog}
      >
        {trigger}
      </button>
      <Dialog ref={dialogTarget} title={trigger} onClose={closeDialog}>
        {children}
      </Dialog>
    </>
  );
}
