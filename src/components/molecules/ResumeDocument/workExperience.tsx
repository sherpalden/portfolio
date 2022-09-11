import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
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
  jobTitle: {
    marginTop: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  itemTextLink: {
    textDecoration: "underline",
    color: "black",
    marginTop: 3,
    marginLeft: 3,
    fontSize: font.sizeNormal,
    fontWeight: font.weightMedium,
  },
  itemDescription: {
    marginTop: 3,
    marginLeft: 3,
    fontSize: font.sizeSmall,
    fontWeight: font.weightSemiBold,
  },
});

const experiences = [
  {
    position: "Software engineer/Team lead (full time)",
    institute: {
      name: "Readytowork Co. Ltd.",
      website: "https://readytowork.jp/",
    },
    from: "Mar 2021",
    to: "Present",
    description:
      "My responsibilities are: designing database, developing and implementing business logics,\
 implementing CICD, provisioning cloud infrastructure, planning sprint (task division),\
 organizing daily meetings, daily reporting and communication with the project manager and the team, etc.\
 \nThe tech stacks are: Go, NextJS, MySQL, GCP, Docker, Circleci, Firebase, Sentry, & JIRA.\
 \nWorked in health management, human resource management, & note keeping applications.",
  },
  {
    position: "Software engineer (part time)",
    institute: {
      name: "The aquarium world, Kathmandu, Nepal",
      website: "#",
    },
    from: "Jun 2021",
    to: "Dec 2021",
    description:
      "My responsibilities were: designing database, developing and implementing business logics, implementing CICD, cloud infrastructure provisioning, etc.\
  \nThe tech stacks used were: NodeJS, PostgreSQL, docker, AWS, Gitlab.\
  \nWorked in ecommerce application.",
  },
  {
    position: "NodeJS Developer (full time)",
    institute: {
      name: "Web Bank Nepal, Kathmandu, Nepal",
      website: "https://www.webbanknepal.com/#gsc.tab=0",
    },
    from: "Aug 2020",
    to: "Jan 2021",
    description:
      "My responsibilities were: designing database, developing and implementing business logics, implementing CICD, cloud infrastructure provisioning, etc.\
  \nThe tech stacks used were: NodeJS, MongoDB, socket.io, Redis, swagger, Gitlab.\
  \nWorked in social media application.",
  },
  {
    position: "Embedded System Intern (part time)",
    institute: {
      name: "Futurelab Nepal, lalitpur, Nepal",
      website: "#",
    },
    from: "Jan 2019",
    to: "Jun 2019",
    description:
      "My responsibilities were programming and interfacing STM32 series ARM based micro-controllers. Worked in pitch detection of audio signal.",
  },
  {
    position: "Active member (part time)",
    institute: {
      name: "Robotics and Automation Center, IOE Thapathali Campus, Kathmandu",
      website: "#",
    },
    from: "2016",
    to: "2018",
    description:
      "My responsibilities were programming and interfacing AVR micro-controllers & PCB design and fabrication.",
  },
];

const WorkExperiences = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>WORK EXPERIENCE</Text>
      <HrLine width={36} height={1} color="black" />
      {experiences.map((item) => {
        return (
          <View style={styles.itemWrapper} key={item.from}>
            <View style={styles.jobTitle}>
              <Text style={styles.itemText}>{item.position}</Text>
              <Text style={styles.date}>{`${item.from} - ${item.to}`}</Text>
            </View>
            <Link style={styles.itemTextLink} src={item.institute.website}>
              {item.institute.name}
            </Link>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default WorkExperiences;
