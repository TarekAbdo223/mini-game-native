import { StyleSheet, Text } from "react-native";
import Colors from "../../constatnts/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    padding: 24,
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: 8,
  },
});
