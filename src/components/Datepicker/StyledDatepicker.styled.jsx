import { AiOutlineCalendar } from 'react-icons/ai';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledCalendarIcon = styled(AiOutlineCalendar)`
  position: absolute;
  top: 18px;
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
.date-airpicker-wrapper{
    position:relative;
    margin-bottom:14px;
}


.date-airpicker-input {
  width: 100%;
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
    font-size: 17px;
    line-height: 1.56;
     padding: 13px 24px;
       min-height: 56px;
  }};
  
  .date-airpicker-input.error {
  border: 1px solid red;
}

.date-airpicker-input.success {
  border: 1px solid green;
}
  .air-datepicker {
    background:#161F37;
    border-radius: 8px;
   font-family: Manrope;
    font-size: 14px;}

  
    
    .air-datepicker-nav--title{
color: #F3F3F3;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.32px;
margin-bottom:14px;
margin-top:14px;
background-color:transparent;
}
 
.air-datepicker-nav--title:active{
    background: transparent;
    border: 0.5px solid #F3F3F3;
}
.air-datepicker-nav--title:hover {
    background: transparent;}

.air-datepicker-nav--title i{
  color: #F3F3F3;
  font-size: 16px;
font-style: normal;
font-weight: 500;
letter-spacing: -0.32px;
}
.air-datepicker-nav{
    border-bottom: 1px solid  rgba(243, 243, 243, 0.20);
}
.air-datepicker-body--day-name {
color: rgba(243, 243, 243, 0.50);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;
}
   .air-datepicker-body--day-names {
    margin-bottom:11px;
   }
   .air-datepicker-cell.-day-.-other-month-{
color: rgba(243, 243, 243, 0.20);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;
letter-spacing: -0.28px;
   }
   .air-datepicker-cell.-day-{
    color: #F3F3F3;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28; 
letter-spacing: -0.28px;
   }
   .air-datepicker-cell.-selected-{
    border-radius:50%;
    background-color:#F3F3F3;
    color:#161F37;
   }
   .air-datepicker-cell.-year-.-selected-{
    border-radius:50%;
    background-color:#F3F3F3;
    color:#161F37;
   }
   .-selected-.air-datepicker-cell.-day-.-other-month-{
     border-radius:50%;
     background-color:#F3F3F3;
    color:#161F37;
   }
   .air-datepicker-cell.-month-{
      color: #F3F3F3;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28; 
letter-spacing: -0.28px;
   }
   .air-datepicker-cell.-month-.-selected-{
    border-radius:50%;
    background-color:#F3F3F3;
    color:#161F37;
   }
   .air-datepicker-cell.-day-.-focus-{
    background: transparent;
    border: 0.5px solid #F3F3F3;
   }
   .air-datepicker-cell.-month-.-focus-{
    background: transparent;
    border: 0.5px solid #F3F3F3;
   }
   .air-datepicker-cell.-year-{
    color: #F3F3F3;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28; 
letter-spacing: -0.28px;
   }
  .air-datepicker-cell.-year-:hover{
background: transparent;
   }
   .air-datepicker-cell.-year-.-other-decade-{
color: rgba(243, 243, 243, 0.20);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28 ;
letter-spacing: -0.28px;
   }
   .-selected-.air-datepicker-cell.-year-.-other-decade-{
     border-radius:50%;
    background-color:#F3F3F3;
    color:#161F37;
   }
   .air-datepicker-cell.-selected-.-current- {
    color: #161F37;
    background: #F3F3F3;
    border-radius:50%;
}
    `;
