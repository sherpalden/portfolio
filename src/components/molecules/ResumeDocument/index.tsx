import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ResumeTitle from "./title";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  wrapper: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  left: {
    backgroundColor: "rgb(0, 0, 0)",
    width: "30%",
  },
  middle: {
    backgroundColor: "rgb(240, 240, 240)",
    height: "100vh",
    width: 5,
  },
  right: {
    backgroundColor: "rgb(255, 255, 255)",
    width: "66%",
  },
});

const ResumeDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.wrapper}>
          <View style={styles.left}>
            <Text>Left</Text>
          </View>
          <View style={styles.middle}></View>
          <View style={styles.right}>
            <ResumeTitle />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumeDocument;
