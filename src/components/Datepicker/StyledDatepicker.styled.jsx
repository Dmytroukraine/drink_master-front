import { createGlobalStyle, styled } from 'styled-components';
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    transform: translate(125%, -40%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 330px;
    padding: 9px 18px;
    background:#161F37;
    border-radius: 8px;
   font-family: Manrope;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    .react-datepicker {
      transform: translate(0%, 5%);
      z-index: 100;
    }
  }
  .react-datepicker__month-container {
    float: inherit;
    padding-top: 8px;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background:#161F37;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__navigation {
    margin-top: 0;
    color: white;
  }
  
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
    margin-top: 26px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
    margin-top: 26px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#161F37;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#161F37;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__header__dropdown{
    color: #fafafa;
    font-size: 12px;
    align-content: center;
  }
  .react-datepicker__year-dropdown{
    background:#161F37;
    width: 35%;
    padding: 10px 3px;
  }
 .react-datepicker__navigation--years-upcoming{
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent; 
  border-bottom: 7px solid #fafafa;
  
 }

 .react-datepicker__navigation--years-previous{
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent; 
  border-top: 7px solid #fafafa;
 }
`;

export const TitleWrapper = styled.button`
  color: #fafafa;
  font-family: Manrope;
  font-size: 14px;
  line-height: 1.29;
  border: none;
  background-color: transparent;
  opacity: 0.8;


    &:hover::placeholder {
      color: #fafafa;
      opacity: 1;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`;