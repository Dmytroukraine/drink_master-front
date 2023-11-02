import React, { useState, useEffect, useRef } from 'react';
import css from './CustomSelect.module.css';

export const CustomSelect = ({ select, setSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['test-1', 'test-2', 'test-3'];
  const customSelectRef = useRef(null);

  const handleClickOutside = event => {
    if (
      customSelectRef.current &&
      !customSelectRef.current.contains(event.target)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={css.customSelect} ref={customSelectRef}>
      <div
        onClick={() => setIsActive(!isActive)}
        className={css.customSelectBtn}
      >
        {select}
      </div>
      {isActive && (
        <div className={css.customSelectContent}>
          {options.map(el => (
            <div onClick={() => setSelect(el)} className={css.customSelectItem}>
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
