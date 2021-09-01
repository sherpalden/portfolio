import styled from "styled-components";
import { Button } from "../../../components/atoms";
import { FacebookOutlined, GoogleOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url("/star.gif");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    max-width: 900px;
    margin: auto;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
`

const FormWrapper = styled.div`
    margin: 50px 100px 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-title {
        font-size: 24px;
        font-weight: bold;
        color: white;
    }
    .button-list {
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
        margin-top: 18px;
        display: flex;
        gap: 18px;
        flex-direction: column;
    }
`;

const Login = () => {
    return (
        <Wrapper>
            <Container>
                <FormWrapper>
                    <div className="form-title">
                        Login Up With
                    </div>
                    <div className="button-list">
                        <Button height="45px" background="transparent">
                            <span>Google</span>
                            <GoogleOutlined style={{ fontSize: '24px', color: 'red' }} />
                        </Button>
                        <Button height="45px" background="transparent">
                            <span>Facebook</span>
                            <FacebookOutlined style={{ fontSize: '24px', color: '#08c' }} />
                        </Button>
                        <Button height="45px" background="transparent">
                            <span>Linkedin</span>
                            <LinkedinOutlined style={{ fontSize: '24px', color: 'yellow' }} />
                        </Button>
                        <Button height="45px" background="transparent">
                            <span>Github</span>
                            <GithubOutlined style={{ fontSize: '24px', color: 'green' }} />
                        </Button>
                    </div>
                </FormWrapper>
            </Container>
        </Wrapper>
    )
}

export default Login;