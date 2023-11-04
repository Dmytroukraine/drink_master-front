import React, { useCallback } from 'react';
import css from '../Shared/ModalWrap.module.css';
import x from '../../images/x.svg';

const ModalWrap = ({ children, ...props }) => {
  const { isOpen, onToggle } = props;

  const handleEsc = useCallback(
    e => {
      if (e.key === 'Escape') {
        onToggle();
      }
    },
    [onToggle]
  );

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, handleEsc]);

  const handleToggle = e => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <div
      onClick={handleToggle}
      className={isOpen ? css.modal + ' ' + css.active : css.modal}
    >
      <div onClick={e => e.stopPropagation()} className={css.content}>
        <div onClick={onToggle} className={css.close}>
          <img src={x} alt="Close Icon" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrap;
