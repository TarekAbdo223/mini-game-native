import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instructions from "../components/ui/Instructions";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundry = 1;
let maxBoundry = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  console.log(userNumber);
  const initialGuess = generateRandomBetween(1, 100, {
    userNumber,
  });
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    console.log(typeof currentGuess, typeof userNumber, "useEffect");

    if (currentGuess === +userNumber) {
      onGameOver();
      console.log("equal");
    }
  }, [currentGuess, onGameOver, userNumber]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie You know that this is wrong...", "wrong", [
        {
          text: "Got it!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      // i mean if the direction is higher or lower
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    console.log(minBoundry, maxBoundry);

    const newRndNumber = generateRandomBetween(minBoundry, maxBoundry, {
      currentGuess,
    });
    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instructions>Higher or Lower?</Instructions>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            +
          </PrimaryButton>
        </View>
        {/* + - */}
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    // backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    marginTop: 24,
  },
});
