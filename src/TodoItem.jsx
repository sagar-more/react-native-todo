import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import Checkbox from "./common/Checkbox";

function TodoItem({ id, dueDate, text, isCompleted, changeStatus }) {
  const [date, setDate] = useState(moment(dueDate) || moment());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (e, date) => {
    setShowDatePicker(false);
    setDate(moment(date));
    changeStatus(id, isCompleted, date);
  };

  onStatusChange = (status) => {
    changeStatus(id, status, date);
  };

  let dateText =
    date.format("DD-MM-YYYY") === moment().format("DD-MM-YYYY")
      ? "Due Today"
      : date.format("DD-MM-YYYY");

  return (
    <View style={styles.container}>
      <Checkbox isChecked={isCompleted} text={text} onChange={onStatusChange} />

      <View style={styles.dateContainer}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => setShowDatePicker(true)}
        >
          <Icon name="calendar" size={20} />
          <Text style={styles.dateText}>{dateText}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            onChange={onChange}
            mode="date"
            value={date.toDate()}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  dateContainer: {
    flexDirection: "row",
    width: "40%",
  },
  dateText: {
    marginHorizontal: 10,
  },
});

export default TodoItem;
