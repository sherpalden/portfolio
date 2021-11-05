import { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { MobileMenu } from "./MobileMenu";
import { BurgerCrossBtn } from "./BurgerCrossBtn";

const Container = styled.section`
  position: sticky;
  top: 0;
  z-index: 999999;
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
  padding-left: 72px;
  padding-right: 72px;
  max-width: 100%;
  background: #000000;
  @media (max-width: 768px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftItems = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 25px;
  }
`;

const LogoWrapper = styled.div`
  a {
    text-decoration: none;
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
    @media (max-width: 900px) {
      font-size: 24px;
    }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & .nav-item {
    margin-left: 24px;
    :first-child {
      margin-left: 0px;
    }
  }
  :first-child {
    margin-left: 0px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div<{ current?: boolean }>`
  ${(props) =>
    props.current &&
    css`
      background: #222222;
      border-radius: 100px;
    `}
  padding: 11px 18px 9px;
  list-style: none;
  a {
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    color: #ffffff;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 10px 15px 9px;
    font-size: 14px;
  }
`;

const BurgerWrapper = styled.div`
  padding: 12px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <Container>
        <FlexContainer>
          <LeftItems>
            <LogoWrapper>
              <Link href="/">{`<sherpalden />`}</Link>
            </LogoWrapper>
          </LeftItems>
          <NavItems>
            <NavItem
              className="nav-item"
              current={router.pathname == "/services" ? true : false}
            >
              <Link href="/services">Services</Link>
            </NavItem>
            <NavItem
              className="nav-item"
              current={router.pathname?.startsWith("/projects") ? true : false}
            >
              <Link href="/projects">Projects</Link>
            </NavItem>
            <NavItem
              className="nav-item"
              current={router.pathname?.startsWith("/blogs") ? true : false}
            >
              <Link href="/blogs">Blogs</Link>
            </NavItem>
            <NavItem
              className="nav-item"
              current={router.pathname == "/inquiry" ? true : false}
            >
              <Link href="/inquiry">Inquiry</Link>
            </NavItem>
          </NavItems>
          <BurgerWrapper>
            <BurgerCrossBtn open={mobileMenuOpen} setOpen={handleMenuClick} />
          </BurgerWrapper>
        </FlexContainer>
      </Container>
      <MobileMenu isOpen={mobileMenuOpen} />
    </>
  );
};

export { Header };
