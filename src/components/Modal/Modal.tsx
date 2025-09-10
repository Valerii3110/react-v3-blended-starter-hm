import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  const handleEsc = useCallback(
    (e: WindowEventMap['keydown']) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <div
      className={style.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={style.modal}>
        <button
          className={style.closeButton}
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
