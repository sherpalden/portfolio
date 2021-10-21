import styled from "styled-components";
import { GithubOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Button } from "../../../atoms/Button";

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

export interface GithubAuthProps {
    type: "login" | "signup";
}



const GithubAuth: React.FC<GithubAuthProps> = (props) => {
    const [auth2, setAuth2] = useState({})

    useEffect(() => {
        window?.gapi?.load('auth2', () => {
            const auth2 = window?.gapi?.auth2.init({
                client_id: "352936315579-n8j9c0qe63m677g9fjt178821n0v4a0f.apps.Githubusercontent.com",
            })
            setAuth2(auth2)
        })
    }, [])

    const HandleAuth = async (key: string) => {
        if (key === "signup") {
            const authResult = await auth2?.grantOfflineAccess();
            console.log(authResult)
        }
    }
    return (
        <Wrapper>
            <Button height="45px" background="transparent" onClick={() => HandleAuth(props.type)}>
                <span>Github</span>
                <GithubOutlined style={{ fontSize: '24px', color: 'green' }} />
            </Button>
        </Wrapper>
    )
}

export { GithubAuth };