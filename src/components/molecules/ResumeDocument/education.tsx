import { Text, View, StyleSheet } from "@react-pdf/renderer";
import HrLine from "./hrline";
import { font } from "./theme";

// Create styles
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: font.sizeH2,
    fontWeight: font.weightBold,
    marginBottom: 3,
  },
  itemWrapper: {
    marginTop: 6,
  },
  date: {
    padding: 3,
    width: 90,
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    fontSize: font.sizeSmall,
    fontWeight: font.weightMedium,
  },
  itemText: {
    marginTop: 3,
    marginLeft: 3,
    fontSize: font.sizeNormal,
    fontWeight: font.weightSemiBold,
  },
});

const education = {
  degree: "Bachelors In Electronics & Communication Engineering.",
  institute: "IOE Thapathali Campus, Tribhuvan University, Nepal.",
  from: "Oct 2015",
  to: "Oct 2019",
};

const Educations = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>EDUCATION</Text>
      <HrLine width={36} height={1} color="black" />
      <View style={styles.itemWrapper}>
        <View style={styles.date}>
          <Text>{`${education.from} - ${education.to}`}</Text>
        </View>
        <Text style={styles.itemText}>{education.degree}</Text>
        <Text style={styles.itemText}>{education.institute}</Text>
      </View>
    </View>
  );
};

export default Educations;
