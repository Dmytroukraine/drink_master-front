import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const DebounceInputStyled = styled(DebounceInput)`
  width: auto;
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
  }
`;
