import { AiOutlineCalendar } from 'react-icons/ai';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledCalendarIcon = styled(AiOutlineCalendar)`
  position: absolute;
  top: 0;
  right: 24px;
  fill: #3cbc81;
  width: 24px;
  height: 24px;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker-wrapper{
    position:relative;
    margin-bottom:14px;
}


input {
  width: 335px;
  background-color: transparent;
  padding: 17px 24px;
  min-height: 54px;
  color: rgba(243, 243, 243, 0.5);
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  border-radius: 42px;
  line-height: 1.28;
  outline: none;

  
  &:focus,
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    background-color: transparent;
    color: #f3f3f3;

    transition:
      border: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
      background-color:300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
     }
     
    @media screen and (min-width: 768px) {
        width: 400px;
    font-size: 17px;
    line-height: 1.56;
     padding: 13px 24px;
       min-height: 56px;
  }};
  
  input.error {
  border: 1px solid red;
}

input.success {
  border: 1px solid green;
}
.react-datepicker{
    font-family: Manrope;
    font-size: 0.8rem;
    background-color: #161F37;
    color: #fafafa;
    transform: translate(50%, 250%);


    @media screen and (min-width: 768px) {
        transform: translate(50%, 200%);
    }
    @media screen and (min-width: 1440px) {
        transform: translate(50%, 170%);
    }

}
  .react-datepicker__month-container {
    background:#161F37;
   font-family: Manrope;
    font-size: 14px;
    }

    .react-datepicker__header{
        background:#161F37;
        font-family: Manrope;
         font-size: 14px;
         color: #fafafa;
    }
    .react-datepicker__current-month{
        color: #fafafa;
    }

    .react-datepicker__month-select{
        color: #fafafa;
        background:#161F37;
    }

    .react-datepicker__year-select{
    color: #fafafa;
    background:#161F37;
}
  


.react-datepicker__day-name {
color: rgba(243, 243, 243, 0.50);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;
}

.react-datepicker__day{
color: rgba(243, 243, 243, 0.20);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;
letter-spacing: -0.28px;

&:focus,
&:hover {
  background-color: transparent;
  color: #f3f3f3;
   }

.react-datepicker__day--selected{
color: #F3F3F3;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28; 
letter-spacing: -0.28px;
   }

 

   . react-datepicker__day--today{
     border-radius:50%;
    background-color:#F3F3F3;
    color:#161F37;
   }
}
    `;
