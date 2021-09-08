import styled from "styled-components";
import { GoogleOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Button } from "../../../atoms";
import { API } from "../../../../api";
import { notification } from "antd";

const Wrapper = styled.div`
    & button {
        border: 1px solid white;
        border-radius: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:hover {
            cursor: pointer;
            background: black;
            border: 1px solid green;
            border-radius: 100px;
        }
    }
`;

export interface GoogleAuthProps {
    authType: "login" | "sign-up";
}

const GoogleAuth: React.FC<GoogleAuthProps> = (props) => {
    const [isGoogleAuthLoaded, setIsGoogleAuthLoaded] = useState(false)
    const handleCredentialResponse = async (response: any) => {
        try {
            const res = await API.post(`/api/auth/${props.authType}/`, { credential: response.credential })
            if (res && res.status == 200) {
                notification.success({ "message": res.data.message })
            }
        } catch (error: any) {
            notification.error({ "message": error?.response?.data?.message })
        }
    }

    useEffect(() => {
        window.onload = () => {
            google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_WEB_CLIENT_ID,
                callback: handleCredentialResponse,
                context: "signup"
            });
            setIsGoogleAuthLoaded(true)
        }
    }, [])

    const handlePromptOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isGoogleAuthLoaded) {
            google.accounts.id.prompt()
        }
    }

    return (
        <Wrapper>
            <Button height="45px" background="transparent" onClick={handlePromptOpen}>
                <span>Google</span>
                <GoogleOutlined style={{ fontSize: '24px', color: 'red' }} />
            </Button>
        </Wrapper>
    )
}

export { GoogleAuth };