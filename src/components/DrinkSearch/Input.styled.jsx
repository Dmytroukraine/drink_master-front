import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import ReactSelect from 'react-select';

export const DebounceInputStyled = styled(DebounceInput)`
  width: 335px;
  height: 56px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 24px;

  color: #fafafa;
  font-size: 17px;
  opacity: 1;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
  }
  &::placeholder {
    color: #fafafa;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
  }

  @media screen and (min-width: 1440px) {
    width: 335px;
  }
`;

export const Select = styled(ReactSelect)`
  & .Select__control {
    width: 100%;
    background-color: #161f37;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(0deg);
      transition: transform 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
  }

  & .Select__value-container {
    padding: 17px 24px;
    padding-right: 0;

    @media screen and (min-width: 768px) {
      padding: 15px 24px;
      padding-right: 0;
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: #f3f3f3;
    padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: #f3f3f3;
    margin: 0;
    padding: 0;

    &:hover {
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }

  & .Select__input {
    line-height: 1.285 !important;

    @media screen and (min-width: 768px) {
      line-height: 1.56 !important;
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: #f3f3f3;
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: #161f37;
    overflow: hidden;
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    background-color: #161f37;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 4px 14px;
    border-radius: 20px;
    color: #fafafa;
    transition: color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
      background-color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;

    &:hover,
    &:focus {
      color: #fff;
    }

    &:active {
      color: #fff;
      background-color: #161f37;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`;
