import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import { SideNavAdmin } from "../molecules/SideNavAdmin";

const LayoutWrapper = styled.div`
  display: flex;
`
const LeftItems = styled.div`
  min-height: 100vh;
  background-color: ${theme.primaryAlt};
  `
const RightItems = styled.div`
  min-height: 100vh;
  width: 100%;
  `
const RightHeader = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${theme.line};
  `
const RightBody = styled.div`
  background-color: ${theme.grey};
  padding: 12px;
  min-height: 100vh;
  `

const AdminRoute = (AdminComponent: any) => {
  function AdminLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  return class Higher extends React.Component {
    render() {
      return (
        <AdminLayout>
          <LayoutWrapper>
            <LeftItems>
              <SideNavAdmin />
            </LeftItems>
            <RightItems>
              <RightHeader>
              </RightHeader>
              <RightBody>
                <AdminComponent />
              </RightBody>
            </RightItems>
          </LayoutWrapper>
        </AdminLayout>
      );
    }
  };
};

export default AdminRoute;
