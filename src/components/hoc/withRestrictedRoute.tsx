import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Spin } from "antd";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth/AuthContext";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const RestrictedRoute = (AuthComponent: any) => {
  function RestrictedComponent({ children }: { children: React.ReactNode }) {
    const { state } = useAuth();
    const [accessToken, setAccessToken] = useState<any>("");

    useEffect(() => {
      setAccessToken(localStorage.getItem("accessToken"));
      if (state.isAuthenticated || localStorage.getItem("accessToken")) {
        Router.push("/admin/");
      }
    }, [state]);

    if (state.login.loading) {
      return (
        <LoaderWrapper>
          <Spin size="large" className="loader" />
        </LoaderWrapper>
      );
    }
    return <>{!state.isAuthenticated && !accessToken && children}</>;
  }

  return class Higher extends React.Component {
    render() {
      return (
        <RestrictedComponent>
          <AuthComponent {...this.props} />
        </RestrictedComponent>
      );
    }
  };
};

export default RestrictedRoute;
