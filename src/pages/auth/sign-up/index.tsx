import styled from "styled-components";
import { Button } from "../../../components/atoms";
import { FacebookOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { FacebookAuth, GithubAuth, GoogleAuth, LinkedinAuth } from "../../../components/molecules";

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
        margin-top: 18px;
        display: flex;
        gap: 18px;
        flex-direction: column;
    }
`;

const HandleSignUp = (key: string) => {
    console.log(key)
}

const SignUp = () => {
    return (
        <Wrapper>
            <Container>
                <FormWrapper>
                    <div className="form-title">
                        Sign Up With
                    </div>
                    <div className="button-list">
                        <GoogleAuth type="signup" />
                        <FacebookAuth type="signup" />
                        <LinkedinAuth type="signup" />
                        <GithubAuth type="signup" />
                    </div>
                </FormWrapper>
            </Container>
        </Wrapper>
    )
}

export default SignUp;