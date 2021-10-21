import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme";

export interface ISelect {
  width?: string;
  fullWidth?: boolean;
  height?: string;
  className?: string;
  admin?: boolean;
  borderradius?: string;
  bordercolor?: string;
  indent?: string;
  placeholdercolor?: string;
  disableboxshadow?: boolean;
  onBlur?: any;
  clear?: boolean;
  defaultValue?: string | string[] | number | number[];
  options?: any[];
  value?: any;
  onChange?: any;
  suffix?: string;
  dark?: boolean;
  onFocus?: any;
  placeholder?: string;
  error?: any;
  name?: any;
  bgColor?: string;
  required?: boolean;
  label?: string;
  loading?: boolean;
  open?: boolean;
  hide?: boolean;
  native?: boolean;
  shadow?: string;
  max_width?: string;
}

const WrapperDiv = styled.div<{ $hide?: boolean }>`
  display: ${({ $hide }) => ($hide ? "none" : "flex")};
  flex-direction: column;
`;

const Error = styled.div`
  color: ${theme.alert};
`;

const NativeSelectWrapper = styled.div`
  position: relative;
  & > span {
    pointer-events: none;
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -6px;
  }
`;

const NativeSelect = styled.select<ISelect>`
  border-radius: ${({ borderradius }: ISelect) => borderradius || "2px"};
  height: ${({ height }: ISelect) => height || "60px"};
  border: ${({ bordercolor }: ISelect) =>
    `1px solid ${bordercolor || theme.borderColorBase}`};
  background: ${theme.base};
  width: ${({ width, fullWidth }: ISelect) =>
    fullWidth ? "100%" : width || "auto"};
  text-indent: ${({ indent }: ISelect) => indent || "6px"};
  ::placeholder {
    color: ${({ placeholdercolor }) =>
    (placeholdercolor && placeholdercolor) || theme.placeholder};
    text-indent: ${({ indent }: ISelect) => indent || "6px"};
    vertical-align: middle;
  }
  position: relative;
  box-shadow: ${({ disableboxshadow }) =>
    disableboxshadow ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.1)"};
  & :focus {
    outline: none !important;
    border-color: none !important;
    box-shadow: none;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  margin-bottom: 2px;
`;
const Label = styled.div`
  ${theme.typography.label};
  margin-right: 10px;
  margin-bottom: 6px;
`;

const SelectComponent = (props: ISelect) => {
  const {
    options,
    clear,
    suffix,
    loading,
    admin,
    label,
    required,
    hide,
    native,
    onChange,
    name,
    dark,
    value,
    ...rest
  } = props;

  return (
    <WrapperDiv $hide={hide}>
      {label && (
        <LabelContainer>
          <Label>{label}</Label>
        </LabelContainer>
      )}
      <NativeSelectWrapper>
        <NativeSelect
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          name={name}
          {...rest}
        >
          {options &&
            options.map((option: any, index: number) =>
              typeof option == "object" ? (
                <option
                  key={index}
                  value={option.value}
                  selected={option.value === value}
                >
                  {option.name}
                </option>
              ) : (
                <option
                  key={index}
                  value={option}
                  selected={option === value}
                >
                  {option}
                </option>
              )
            )}
        </NativeSelect>
      </NativeSelectWrapper>
      {props.error && <Error>{props.error}</Error>}
    </WrapperDiv >
  );
};

export { SelectComponent };
