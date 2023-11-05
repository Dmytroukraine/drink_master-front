import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CustomSelect = ({
  select,
  setSelect,
  options,
  customSelect,
  customSelectBtn,
  customSelectContent,
  customSelectItem,
}) => {
  const [isActive, setIsActive] = useState(false);
  const customSelectRef = useRef(null);

  const handleClickOutside = event => {
    if (
      customSelectRef.current &&
      !customSelectRef.current.contains(event.target)
    ) {
      setIsActive(false);
    }
  };

  const handleSelectClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={customSelect} ref={customSelectRef}>
      <div onClick={handleSelectClick} className={customSelectBtn}>
        <span>{select}</span>
      </div>
      {isActive && (
        <div className={customSelectContent}>
          {options.map(el => (
            <div
              key={uuidv4()}
              onClick={() => {
                setSelect(el);
                setIsActive(false);
              }}
              className={customSelectItem}
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
