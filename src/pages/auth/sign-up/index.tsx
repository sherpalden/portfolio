import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url("/star.gif");
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`
    .form-title {
        font-size: 24px;
        font-weight: bold;
        color: white;
    }
`;
const SignUp = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <div className="form-title">
                    Sign Up With ...
                </div>
            </FormWrapper>
        </Wrapper>
    )
}

export default SignUp;