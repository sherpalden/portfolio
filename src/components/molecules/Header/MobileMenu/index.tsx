import React from "react";
import styled from "styled-components";

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
  background: #222222;
`;
const NavItems = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const NavItem = styled.a`
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
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
