import CustomerRoute from "../../components/hoc/withCustomerRoute";
import styled from "styled-components";
import { PDFViewer } from "@react-pdf/renderer";
import ResumeDocument from "../../components/molecules/ResumeDocument";
import { Button } from "antd";
import { useState } from "react";

const Wrapper = styled.div`
  background: #000000;
  width: 100%;
  height: auto;
  padding: 50px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Resume = () => {
  const [openPdf, setOpenPdf] = useState(false);
  return (
    <Wrapper>
      <Button onClick={() => setOpenPdf(!openPdf)}>Download my resume</Button>
      {openPdf && (
        <PDFViewer width="100%" height="1000">
          <ResumeDocument />
        </PDFViewer>
      )}
    </Wrapper>
  );
};

export default CustomerRoute(Resume);
