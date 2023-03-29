import { StyleSheet, View, Dimensions } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: deviceWidth < 360 ? 18 : 36,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 9,
    elevation: 40,
    height: 180,
    width: 340,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.7,
  },
});
