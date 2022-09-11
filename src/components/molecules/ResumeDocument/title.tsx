import { Text, View, StyleSheet } from "@react-pdf/renderer";
import HrLine from "./hrline";
import { font } from "./theme";

// Create styles
const styles = StyleSheet.create({
  title: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(50,50,50)",
  },
  name: {
    fontSize: font.sizeH1,
    fontWeight: font.weightBold,
    color: "white",
    marginBottom: 5,
  },
  position: {
    marginTop: 6,
    fontSize: font.sizeNormal,
    color: "white",
  },
});

const ResumeTitle = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.name}>PALDEN SHERPA</Text>
      <HrLine width={36} height={1} color="white" />
      <Text style={styles.position}>
        {"Software Engineer - Computer Science & Engineering"}
      </Text>
    </View>
  );
};

export default ResumeTitle;
