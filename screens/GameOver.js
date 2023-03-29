import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../componenets/Title";
import PrimaryButton from "../componenets/PrimaryButton";
import color from "../componenets/constants/color";

export default function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your needed <Text style={styles.highlight}>{roundsNumber}</Text> round
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame} child="New game" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: color.accent500,
    overflow: "hidden",
    margin: 35,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: color.primary500,
  },
});
