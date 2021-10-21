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
  max-width: 100%;
  background: white;
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
  max-width: 90px;
  padding: 12px;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    max-width: 60px;
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div<{ current?: boolean }>`
  ${(props) =>
    props.current &&
    css`
      background: #f3f4f8;
      border-radius: 100px;
    `}
  padding: 11px 18px 9px;
  list-style: none;
  a {
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    color: black;
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
              <Link href="/">
                <a>
                  <img src={"/apple.png"} alt={"logo"} />
                </a>
              </Link>
            </LogoWrapper>

            <NavItems>
              <NavItem current={router.pathname == "/services" ? true : false}>
                <Link href="/services">Services</Link>
              </NavItem>
              <NavItem
                current={router.pathname?.startsWith("/projects") ? true : false}
              >
                <Link href="/projects">Projects</Link>
              </NavItem>
              <NavItem
                current={
                  router.pathname?.startsWith("/blogs") ? true : false
                }
              >
                <Link href="/blogs">Blogs</Link>
              </NavItem>
              <NavItem current={router.pathname == "/inquiry" ? true : false}>
                <Link href="/inquiry">Inquiry</Link>
              </NavItem>
            </NavItems>
          </LeftItems>
          <BurgerWrapper>
            <BurgerCrossBtn open={mobileMenuOpen} setOpen={handleMenuClick} />
          </BurgerWrapper>
        </FlexContainer>
      </Container>
      <MobileMenu
        isOpen={mobileMenuOpen}
      />
    </>
  );
};

export { Header };
