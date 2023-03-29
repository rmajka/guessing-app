import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import Colors from "./componenets/constants/color";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function pickedNumber(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function startNewGame() {
    setUserNumber(null);
    gameOverHandler(true);
    setGuessRounds(0);
  }

  let screen = <StartGame pickedNumber={pickedNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.AppContainer}
    >
      <ImageBackground
        source={require("../starting-project/assets/images/dices.jpg")}
        resizeMode="cover"
        style={styles.AppContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.AppContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
