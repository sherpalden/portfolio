import { Text, View, StyleSheet, Svg, Image } from "@react-pdf/renderer";
import HrLine from "./hrline";
import { font } from "./theme";

// Create styles
const styles = StyleSheet.create({
  wrapper: {
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 6,
    fontSize: font.sizeSmall,
    fontWeight: font.weightMedium,
  },
});

const getIconWidth = (icon: string) => {
  switch (icon) {
    case "linkedin":
      return 9;
    case "github":
      return 9;
    case "email":
      return 8;
    case "phone":
      return 8;
    default:
      return 9;
  }
};

const contactList = [
  {
    name: "linkedin",
    link: "https://linkedin.com/in/palden",
    src: "/icons/linkedin.png",
    type: "link",
  },
  {
    name: "github",
    link: "https://github.com/sherpalden",
    src: "/icons/github.png",
    type: "link",
  },
  {
    name: "email",
    link: "sherpalden369@gmail.com",
    src: "/icons/gmail.png",
    type: "text",
  },
  {
    name: "phone",
    link: "+977 9843953083",
    src: "/icons/phone.png",
    type: "text",
  },
];

const Contacts = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>CONTACTS</Text>
      <HrLine width={36} height={1} color="black" />
      {contactList.map((item) => {
        return (
          <View style={styles.itemWrapper} key={item.name}>
            <Image src={item.src} style={{ width: getIconWidth(item.name) }} />
            <Text style={styles.itemText}>{item.link}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Contacts;
