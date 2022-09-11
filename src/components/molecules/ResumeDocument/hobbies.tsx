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
    marginTop: 3,
    color: "black",
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
    heading: "Listening & singing songs",
    youtube: "https://www.youtube.com/channel/UC36XDla7ixFhhpvvN9cXDbw",
    description:
      "I love to listen all kinds of music. Music has always been best part of my life and will ever be.",
  },
];

const Hobbies = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>HOBBIES</Text>
      <HrLine width={36} height={1} color="black" />
      {skills.map((item) => {
        return (
          <View style={styles.itemWrapper} key={item.heading}>
            <Link style={styles.heading} src={item.youtube}>
              {item.heading}
            </Link>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Hobbies;
