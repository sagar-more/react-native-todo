import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Checkbox({ isChecked, text, onChange }) {
  const [checked, setChecked] = useState(isChecked);

  const containerStyle = checked
    ? StyleSheet.compose(styles.checkboxImageContainer, styles.checked)
    : styles.checkboxImageContainer;
  const checkedItem = checked ? [styles.checkedText] : [];

  return (
    <View style={{ width: "70%" }}>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: "flex-start" }}
        onPress={() => {
          setChecked(!checked);
          onChange(!checked);
        }}
      >
        <View style={containerStyle}>
          <Image style={styles.image} source={require("../assets/check.png")} />
        </View>
        <View style={{ paddingLeft: 5 }}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={checkedItem}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxImageContainer: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "lightgreen",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "lightgreen",
  },
  image: {
    width: 15,
    height: 15,
  },
  checkedText: {
    textDecorationLine: "line-through",
  },
});

export default Checkbox;
