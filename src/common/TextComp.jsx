import { StyleSheet, Text } from "react-native";

function TextComp(props) {
  const style = [styles.text];
  if (props.h1) {
    style.push(styles.h1);
  }
  return <Text style={style}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  h1: {
    fontSize: 25,
    margin: 10,
  },
});

export default TextComp;
