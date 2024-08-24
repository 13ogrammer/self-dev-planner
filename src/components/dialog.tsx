import { forwardRef } from 'react';

type DialogProps = {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
};

export default forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, title, onClose }, ref) => {
    return (
      <dialog
        ref={ref}
        className="w-screen rounded p-8 backdrop:bg-gray-400 backdrop:bg-opacity-80"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-xl">{title}</h2>
          <button className="text-red-500" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="py-2">{children}</div>
      </dialog>
    );
  }
);
