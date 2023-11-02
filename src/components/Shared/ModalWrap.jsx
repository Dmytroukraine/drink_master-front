import React, { useCallback } from 'react';
import css from '../Shared/ModalWrap.module.css';
import x from '../../images/x.svg';

const ModalWrap = ({ children, ...props }) => {
  const { isOpen, toggle } = props;

  const handleEsc = useCallback(
    e => {
      if (e.key === 'Escape') {
        toggle();
      }
    },
    [toggle]
  );

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, handleEsc]);

  return (
    <div
      onClick={toggle}
      className={isOpen ? css.modal + ' ' + css.active : css.modal}
    >
      <div onClick={e => e.stopPropagation()} className={css.content}>
        <div onClick={toggle} className={css.close}>
          <img src={x} alt="Close Icon" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrap;
