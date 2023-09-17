import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";

const SideDrawer = () => {
  return (
    <View style={styles.container}>
      <Text styles={styles.switchContainer}>Dark mode</Text>
      <View>
        <Switch />
      </View>
    </View>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignContent: "space-between",
  },
  switchContainer: {
    fontSize: 18,
    flex: 1,
    borderColor: "yellow",
    width: "100%",
  },
});
