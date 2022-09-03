import { Page, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import Contacts from "./contacts";
import Educations from "./education";
import Skills from "./skills";
import ResumeTitle from "./title";
import WorkExperiences from "./workExperience";

Font.register({
  family: "Railway",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaooCP.ttf",
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoooCP.ttf",
      fontStyle: "normal",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVsEpYCP.ttf",
      fontStyle: "normal",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pYCP.ttf",
      fontStyle: "normal",
      fontWeight: 700,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 15,
    fontFamily: "Railway",
  },
  wrapper: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  left: {
    width: "30%",
  },
  middle: {
    marginLeft: 9,
    marginRight: 9,
    backgroundColor: "rgb(240, 240, 240)",
    height: "100vh",
    width: 5,
  },
  right: {
    width: "66%",
  },
});

const ResumeDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.wrapper}>
          <View style={styles.left}>
            <Contacts />
            <Skills />
          </View>
          <View style={styles.middle}></View>
          <View style={styles.right}>
            <ResumeTitle />
            <Educations />
            <WorkExperiences />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumeDocument;
