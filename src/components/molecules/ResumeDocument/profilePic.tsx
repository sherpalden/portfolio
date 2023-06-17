import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  profilePicWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: 9,
    marginLeft: "auto",
    marginRight: "auto",
  },
  profilePic: {},
});

const ProfilePic = () => {
  return (
    <View style={styles.profilePicWrapper}>
      <Image style={styles.profilePic} src="/profile-pic.png" />
    </View>
  );
};

export default ProfilePic;
