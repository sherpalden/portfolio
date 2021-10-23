import React, { useCallback } from "react";
import { Input } from "antd";
import styled from "styled-components";
import { theme } from "../../../theme";
import { CharacterCounter } from "../../../utils/counter";
export interface TextFieldProps {
  placeholder?: string;
  type?: string;
  onChange?: any;
  className?: any;
  value?: any;
  disabled?: boolean;
  prefix?: React.ReactNode;
  rows?: number;
  fullWidth?: boolean;
  width?: string;
  height?: string;
  showCounting?: boolean;
  maxLength?: number;
  bordercolor?: string;
  bgcolor?: string;
  color?: string;
  error?: any;
  name?: string;
  borderradius?: string;
  placeholdercolor?: string;
  label?: string;
  addonBefore?: string;
  disableboxshadow?: string;
  required?: boolean;
  indent?: string;
  ref?: any;
  autoComplete?: string;
  onKeyUp?: (val: any) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const InputStyled = styled(Input)`
  border-radius: ${({ borderradius }: TextFieldProps) => borderradius || "2px"};
  height: ${({ height }: TextFieldProps) => height || "60px"};
  border: ${({ bordercolor }: TextFieldProps) =>
    `1px solid ${bordercolor || theme.borderColorBase}`};
  background: ${theme.base};
  width: ${({ width, fullWidth }: TextFieldProps) =>
    fullWidth ? "100%" : width || "auto"};
  text-indent: ${({ indent }: TextFieldProps) => indent || "6px"};
  ::placeholder {
    color: ${({ placeholdercolor }) =>
      (placeholdercolor && placeholdercolor) || theme.placeholder};
    text-indent: ${({ indent }: TextFieldProps) => indent || "6px"};
    vertical-align: middle;
  }
  position: relative;
  box-shadow: ${({ disableboxshadow }) =>
    disableboxshadow === "true" ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.1)"};
  & :focus {
    outline: none !important;
    border-color: none !important;
    box-shadow: none;
  }
`;

const ErrorStyled = styled.span`
  font-size: 12px;
  color: ${theme.alert};
  margin-top: 2px;
  margin-left: 2px;
`;

const CountingStyled = styled.div<{ isRed: boolean }>`
  font-size: 12px;
  color: ${({ isRed }) => isRed && theme.alert};
`;

const ErrorCounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
`;

const TextFieldWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width, fullWidth }: TextFieldProps) =>
    fullWidth ? "100%" : width || "auto"};
`;

const LabelContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  ${theme.typography.label};
  margin-right: 10px;
  font-weight: 500;
`;

const RequiredLabel = styled.div`
  ${theme.typography.PackDesc};
  line-height: 20px;
  color: #f5222d;
  min-width: 40px;
  display: flex;
  justify-content: center;
  height: 22px;
  background: #fff1f0;
  border: 1px solid #ffa39e;
  border-radius: 2px;
`;

const TextField: React.FC<TextFieldProps> = React.forwardRef((props, ref) => {
  const {
    showCounting,
    value,
    maxLength,
    type,
    rows,
    className,
    label,
    required,
    prefix,
    ...rest
  } = props;
  const { TextArea } = Input;
  const countingUI = useCallback(() => {
    return (
      showCounting &&
      maxLength && (
        <CountingStyled isRed={value?.length >= maxLength}>
          {`${
            value ? CharacterCounter(value) : 0
          }/${maxLength.toLocaleString()}`}
        </CountingStyled>
      )
    );
  }, [value, maxLength]);

  const textFieldUI = () => {
    switch (type) {
      case "password":
        return (
          <TextFieldWrapperStyled className={className} width={props.width}>
            {label && (
              <LabelContainer>
                <Label>{label}</Label>
                {required && <RequiredLabel>必須</RequiredLabel>}
              </LabelContainer>
            )}
            <InputStyled {...rest} type="password" />
            <ErrorCounterWrapper>
              {countingUI()}
              {props.error ? <ErrorStyled>{props.error}</ErrorStyled> : <div />}
            </ErrorCounterWrapper>
          </TextFieldWrapperStyled>
        );
      case "textarea":
        return (
          <TextFieldWrapperStyled className={className} width={props.width}>
            {label && (
              <LabelContainer>
                <Label>{label}</Label>
                {required && <RequiredLabel>必須</RequiredLabel>}
              </LabelContainer>
            )}
            <InputStyled
              as={TextArea}
              value={value}
              autoSize={{ minRows: rows }}
              placeholder={props.placeholder}
              maxLength={maxLength}
              {...rest}
            />
            <ErrorCounterWrapper>
              {props.error ? <ErrorStyled>{props.error}</ErrorStyled> : <div />}
              {countingUI()}
            </ErrorCounterWrapper>
          </TextFieldWrapperStyled>
        );
      case "number":
        return (
          <TextFieldWrapperStyled className={className} width={props.width}>
            {label && (
              <LabelContainer>
                <Label>{label}</Label>
                {required && <RequiredLabel>必須</RequiredLabel>}
              </LabelContainer>
            )}
            <InputStyled
              prefix={prefix}
              value={value}
              maxLength={maxLength}
              {...rest}
            />
            <ErrorCounterWrapper>
              {props.error ? <ErrorStyled>{props.error}</ErrorStyled> : <div />}
              {countingUI()}
            </ErrorCounterWrapper>
          </TextFieldWrapperStyled>
        );

      default:
        return (
          <TextFieldWrapperStyled className={className} width={props.width}>
            {label && (
              <LabelContainer>
                <Label>{label}</Label>
                {required && <RequiredLabel>必須</RequiredLabel>}
              </LabelContainer>
            )}
            <InputStyled
              ref={ref}
              prefix={prefix}
              value={value}
              maxLength={maxLength}
              {...rest}
            />
            <ErrorCounterWrapper>
              {props.error ? <ErrorStyled>{props.error}</ErrorStyled> : <div />}
              {countingUI()}
            </ErrorCounterWrapper>
          </TextFieldWrapperStyled>
        );
    }
  };
  return textFieldUI();
});

export { TextField };
