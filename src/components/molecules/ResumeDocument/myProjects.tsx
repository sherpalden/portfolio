import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import HrLine from "./hrline";
import { font } from "./theme";

// Create styles
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 108,
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
  projectTitle: {
    color: "black",
    marginLeft: 3,
    fontSize: font.sizeNormal,
    fontWeight: font.weightBold,
  },
  itemText: {
    marginTop: 3,
    marginLeft: 3,
    fontSize: font.sizeSmall,
    fontWeight: font.weightSemiBold,
  },
});

const myProjects = [
  {
    name: "GraphQL Skeleton in Go",
    website: "",
    codeRepo: "https://github.com/sherpalden/go-graphql-api",
    description: "A skeleton for developing GraphQL APIs in Go using gqlgen",
  },
  {
    name: "Social media application",
    website: "",
    codeRepo: "https://github.com/sherpalden/social-media-application",
    description:
      "A social media application with major features: chat (direct & group messaging), news feeds, campaigns, connections among users, media (image and video) storage and streaming.",
  },
  {
    name: "E-commerce application",
    website: "",
    codeRepo: "https://github.com/sherpalden/ecom-api",
    description: "A complete backend solution for ecommerce application. ",
  },
  {
    name: "Accounting Software",
    website: "",
    codeRepo: "https://github.com/sherpalden/Accounting-Software",
    description:
      "Manages stocks, generates accounting reports: journal, ledger, trial balance and profit & loss statement. Target customers: small businesses.",
  },
  {
    name: "Pitch detection of monophonic audio signal using autocorrelation function",
    website: "",
    codeRepo:
      "https://drive.google.com/drive/u/0/folders/1yoW3vxpxDOgh3gk412woCJ5AaGrWs2d2",
    description:
      "An undergraduate final year project required for the award of the Degree of Bachelor of Engineering in Electronics and Communication Engineering.",
  },
];

const MyProjects = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{"MY PROJECTS"}</Text>
      <HrLine width={36} height={1} color="black" />
      {myProjects.map((project) => {
        return (
          <View style={styles.itemWrapper} key={project.name}>
            <Link
              style={styles.projectTitle}
              src={project.website || project.codeRepo}
            >
              {project.name}
            </Link>
            <Text style={styles.itemText}>{project.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MyProjects;