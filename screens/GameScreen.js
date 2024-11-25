import { StyleSheet, Text, View } from "react-native";

const GameScreen = () => {
  // this shows when the client pick a number
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 14,
    // backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
