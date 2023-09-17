import { StyleSheet, View } from "react-native";
import TodoItem from "./TodoItem";

function ItemList({ todoList, isCompleted = false, changeStatus = () => {} }) {
  const filteredList = todoList.filter(
    ({ completed }) => completed === isCompleted
  );

  return (
    <View>
      {filteredList.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          dueDate={item.date}
          isCompleted={item.completed}
          changeStatus={changeStatus}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

export default ItemList;
