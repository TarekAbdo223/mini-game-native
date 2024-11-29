import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constatnts/colors";

const Instructions = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default Instructions;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
