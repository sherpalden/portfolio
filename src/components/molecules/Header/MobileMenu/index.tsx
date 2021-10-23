import React from "react";
import styled, { css } from "styled-components";

const MenuWrapper = styled.div<{ open?: boolean }>`
  @media (min-width: 768px) {
    display: none;
  }
  position: fixed;
  z-index: 999999;
  top: 80px;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  transition: all 0.3s linear;
  transform: ${({ open }) => (open ? "translateX(-0)" : "translateX(100%)")};
  background: #f3f4f8;
`;
const NavItems = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const NavItem = styled.a`
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
`;

interface IProps {
  isOpen?: boolean;
}

const MobileMenu: React.FC<IProps> = ({ isOpen }) => {
  return (
    <MenuWrapper open={isOpen}>
      <NavItems>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/blogs">Blogs</NavItem>
        <NavItem href="/inquiry">Inquiry</NavItem>
      </NavItems>
    </MenuWrapper>
  );
};

export { MobileMenu };
