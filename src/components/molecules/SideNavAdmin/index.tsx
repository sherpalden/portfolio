import styled, { css } from "styled-components";
import { theme } from "../../../theme";
import {
  UserOutlined,
  BuildOutlined,
  LogoutOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavItem = styled.div<{ current?: boolean }>`
  ${(props) =>
    props.current &&
    css`
      background: ${theme.orange};
      border-radius: 15px;
    `}
  display: flex;
  align-items: center;
  margin: 6px;
  padding: 9px;
  &:hover {
    cursor: pointer;
  }
`;

const NavItemText = styled.span<{ isCollapsed?: boolean }>`
  ${(props) =>
    props.isCollapsed &&
    css`
      display: none;
    `}
  min-width: 150px;
  margin-left: 12px;
  font-size: 15px;
  color: ${theme.base};
`;

const Collapser = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${theme.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export interface SideNavAdminProps {
  input?: string;
}

const SideNavAdmin: React.FC<SideNavAdminProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Collapser>
        {collapsed === true ? (
          <DoubleRightOutlined
            style={{ fontSize: "18px", color: "white" }}
            onClick={handleCollapse}
          />
        ) : (
          <DoubleLeftOutlined
            style={{ fontSize: "18px", color: "white" }}
            onClick={handleCollapse}
          />
        )}
      </Collapser>
      <LogoWrapper>
        <img width="90" src="/apple.png" />
      </LogoWrapper>
      <NavItems>
        <NavItem current={router.pathname == "/admin/person" ? true : false}>
          <Link href="/admin/person">
            <div>
              <UserOutlined style={{ fontSize: "18px", color: "black" }} />
              <NavItemText isCollapsed={collapsed}>Person</NavItemText>
            </div>
          </Link>
        </NavItem>
        <NavItem current={router.pathname == "/admin/company" ? true : false}>
          <Link href="/admin/company">
            <div>
              <BuildOutlined style={{ fontSize: "18px", color: "black" }} />
              <NavItemText isCollapsed={collapsed}>Company</NavItemText>
            </div>
          </Link>
        </NavItem>
        <NavItem>
          <LogoutOutlined style={{ fontSize: "18px", color: "black" }} />
          <NavItemText isCollapsed={collapsed}>Logout</NavItemText>
        </NavItem>
      </NavItems>
    </>
  );
};

export { SideNavAdmin };
