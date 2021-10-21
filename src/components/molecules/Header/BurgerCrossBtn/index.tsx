import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme';

const StyledBurger = styled.button<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? theme.red : theme.line};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export interface IBurgerProps {
  open?: boolean;
  setOpen?: any;
}

const BurgerCrossBtn: React.FC<IBurgerProps> = (props) => {
  const { open, setOpen, ...rest } = props;
  const isExpanded = open ? true : false;
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...rest}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export { BurgerCrossBtn };