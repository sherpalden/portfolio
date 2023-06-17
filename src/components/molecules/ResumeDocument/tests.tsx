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
  testTitle: {
    marginLeft: 3,
    fontSize: font.sizeNormal,
    fontWeight: font.weightBold,
  },
  itemText: {
    marginLeft: 3,
    fontSize: font.sizeSmall,
    fontWeight: font.weightSemiBold,
  },
});

const tests = [
  {
    name: "GRE (312)",
    description: "Overall score: 312 (Quant: 163 & Verbal: 149), AWA: 4.0",
  },
  {
    name: "IELTS (7)",
    description: "Overall score: 7 (Speaking: 6, Reading: 7, Writing: 7, Listening: 8)",
  },
];

const Tests = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{"TESTS"}</Text>
      <HrLine width={36} height={1} color="black" />
      {tests.map((test) => {
        return (
          <View style={styles.itemWrapper} key={test.name}>
            <Text style={styles.testTitle}>{test.name}</Text>
            <Text style={styles.itemText}>{test.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Tests;
