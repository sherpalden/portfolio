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
  heading: {
    textDecoration: "none",
    color: "black",
    marginLeft: 3,
    fontSize: font.sizeNormal,
    fontWeight: font.weightBold,
  },
  description: {
    marginTop: 3,
    marginLeft: 3,
    fontSize: font.sizeSmall,
    fontWeight: font.weightSemiBold,
  },
});

const cert = {
  degree: "Google Cloud Fundamentals: Core Infrastructure",
  description: "A certificate issued by coursera.",
  link: "https://www.coursera.org/account/accomplishments/certificate/753LPBH363BP",
};

const Certifications = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{"CERTIFICATIONS"}</Text>
      <HrLine width={36} height={1} color="black" />
      <View style={styles.itemWrapper}>
        <Link style={styles.heading} src={cert.link}>
          {cert.degree}
        </Link>
        <Text style={styles.description}>{cert.description}</Text>
      </View>
    </View>
  );
};

export default Certifications;
