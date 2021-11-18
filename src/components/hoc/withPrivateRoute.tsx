import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Spin } from "antd";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth/AuthContext";
import { API } from "../../api";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const PrivateRoute = (AuthComponent: any) => {
  function PrivateComponent({ children }: { children: React.ReactNode }) {
    const { state } = useAuth();
    const [accessToken, setAccessToken] = useState<any>(null);
    useEffect(() => {
      (async () => {
        try {
          if (localStorage.getItem("accessToken")) {
            await API.post("/api/auth/check-admin");
            setAccessToken(localStorage.getItem("accessToken"));
          } else {
            if (!state.isAuthenticated) {
              localStorage.removeItem("accessToken");
              Router.push("/auth/login");
            }
          }
        } catch (error) {
          Router.push("/auth/login");
          localStorage.removeItem("accessToken");
        }
      })();
    }, []);

    if (state.login.loading) {
      return (
        <LoaderWrapper>
          <Spin size="large" className="loader" />
        </LoaderWrapper>
      );
    }
    return <>{(state.isAuthenticated || accessToken) && <> {children} </>} </>;
  }

  return class Higher extends React.Component {
    render() {
      return (
        <PrivateComponent>
          <AuthComponent {...this.props} />
        </PrivateComponent>
      );
    }
  };
};

export default PrivateRoute;
