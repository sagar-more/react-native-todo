import { StyleSheet, Text, View } from "react-native";

function HorizontalBar() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 3,
    backgroundColor: "grey",
    marginVertical: 20,
  },
});

export default HorizontalBar;
