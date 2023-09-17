import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Todo({ todoList, setTodoList }) {
  const [text, setText] = useState("");
  const onEndEditing = () => {
    setText("");
    const newList = todoList.slice();
    const date = new Date();
    newList.push({ id: date.getTime(), text, date, completed: false });
    setTodoList(newList);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="Add Item"
        value={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={Keyboard.dismiss}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={onEndEditing}>
        <View style={styles.icon}>
          <Icon name="plus" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    borderWidth: 1,
    height: 50,
    marginHorizontal: 15,
    borderRadius: 20,
    flex: 1,
    padding: 10,
    color: "#424242",
    fontSize: 20,
  },
  iconContainer: {
    padding: 10,
    position: "absolute",
    right: 20,
  },
  icon: {
    borderRadius: 50,
    borderWidth: 1,
    width: 35,
    alignItems: "center",
    backgroundColor: "lightblue",
  },
});

export default Todo;
