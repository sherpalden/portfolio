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
    heading: "Programming Languages",
    description: "Go, Javascript, Typescript, Python, C++, HTML, & CSS",
  },
  {
    heading: "Frameworks",
    description: "Fx, Gin, NodeJS, NestJS, ReactJS & NextJS",
  },
  {
    heading: "Databases",
    description: "MySQL, PostgreSQL, MongoDB, & Firestore",
  },
  {
    heading: "Cloud Platform",
    description: "GCP & AWS",
  },
  {
    heading: "Others",
    description: "Git, Docker, NATS, gRPC, Microservices, CircleCI, Firebase, Sentry, JIRA, UIUX, Figma",
  },
];

const Skills = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>SKILLS</Text>
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

export default Skills;
