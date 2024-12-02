import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constatnts/colors";

const Card = ({ children }) => {
  return <View style={styles.inputCntainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputCntainer: {
    marginTop: deviceWidth < 380 ? 24 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // this is for andriod only
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
