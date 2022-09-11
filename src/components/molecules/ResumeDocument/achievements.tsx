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
  heading: {
    marginTop: 3,
    marginLeft: 3,
    fontSize: font.sizeNormal,
    fontWeight: font.weightBold,
  },
  itemDescription: {
    marginTop: 3,
    marginLeft: 3,
    fontSize: font.sizeSmall,
    fontWeight: font.weightSemiBold,
  },
});

const skills = [
  {
    heading: "Full scholarship",
    description:
      "Received merit based full scholarship for the Bachelor's in Electronics & Communication Engineering from IOE (Institute of Engineering), Thapathali Campus, Tribhuvan University.",
  },
  {
    heading: "Winner in automatic bot battle",
    description:
      "Secured first position on 'Yantra Automatic Akhada' in Yantra 6.0 Robotics Competition at Army Fitness and Training Center, Lagankhel held from 17th & 18th December, 2017.",
  },
  {
    heading: "Semester topper",
    description:
      "Secured first position in first year first part exam of Electronics & Communication department in IOE, Thapathali Campus with a percentage of 79.",
  },
  {
    heading: "District topper",
    description:
      "Secured first position in whole district(Sindhupalchok) in SLC(School leaving Certificate) Exam with a percentage of 89.625",
  },
];

const Achievements = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>ACHIEVEMENTS</Text>
      <HrLine width={36} height={1} color="black" />
      {skills.map((item) => {
        return (
          <View style={styles.itemWrapper} key={item.heading}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Achievements;
