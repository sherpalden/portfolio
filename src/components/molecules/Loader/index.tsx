import { Space, Spin } from "antd";
import React from "react";
import styled from "styled-components";

const CustomModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: "#00000047";
    padding: 20px;
    z-index: 99998;
`;

const CustomSpin = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent !important;
    zIndex: 99999;
`;

const Loader = (props: any) => {
    return (
        <CustomModal>
            <CustomSpin>
                <Space
                    size="middle"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Spin size="large" />
                </Space>
            </CustomSpin>
        </CustomModal>
    );
};

export { Loader };
