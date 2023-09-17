import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Header({ open, setOpen = () => {} }) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Icon name="bars" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Icon name="circle" size={20} style={styles.circleIcon} />
        <Text style={styles.headerText}>CHORES</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menu: {
    alignSelf: "center",
  },
  headerContainer: {
    paddingRight: 20,
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    fontSize: 20,
  },
  circleIcon: {
    color: "gold",
  },
});

export default Header;
