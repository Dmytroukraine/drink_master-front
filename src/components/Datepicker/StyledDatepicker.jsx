import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import { useEffect, useRef } from 'react';
import {
  StyledCalendarIcon,
  CalendarGlobalStyles,
} from './StyledDatepicker.styled';

const DatePicker = ({
  type,
  value,
  setFieldValue,
  name,
  error,
  success,
  placeholder,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const datepicker = new AirDatepicker(inputRef.current, {
      selectedDates: [new Date(value)],
      isMobile: true,
      autoClose: true,
      locale: localeEn,
      dateFormat: 'yyyy-MM-dd',
      classes: 'date-airpicker-calendar',
      onSelect: formattedDate => {
        setFieldValue('dateOfBirth', formattedDate.formattedDate);
      },
    });

    return () => {
      datepicker.destroy();
    };
  }, [type, value, setFieldValue]);
  const inputClassName = `date-airpicker-input ${error === 'true' && 'error'} ${
    success === 'true' && 'success'
  }`;
  return (
    <>
      <CalendarGlobalStyles />
      <div className="date-airpicker-wrapper">
        <input
          id="input"
          ref={inputRef}
          placeholder={placeholder}
          name={name}
          className={inputClassName}
        />
        <StyledCalendarIcon />
      </div>
    </>
  );
};

export default DatePicker;
