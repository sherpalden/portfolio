import React from "react";
import styled from "styled-components";
import { Header } from "../molecules/Header";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BodyItems = styled.div`
  min-height: 100vh;
`;

const CustomerRoute = (CustomerComponent: any) => {
  function CustomerLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  return class Higher extends React.Component {
    render() {
      return (
        <CustomerLayout>
          <LayoutWrapper>
            <Header />
            <BodyItems>
              <CustomerComponent />
            </BodyItems>
          </LayoutWrapper>
        </CustomerLayout>
      );
    }
  };
};

export default CustomerRoute;
