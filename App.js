import "react-native-gesture-handler";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Header from "./src/Header";
import Todo from "./src/Todo";
import TextComp from "./src/common/TextComp";
import HorizontalBar from "./src/common/HorizontalBar";
import { useState } from "react";
import ItemList from "./src/ItemList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideDrawer from "./src/SideDrawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const changeStatus = (id, status, date) => {
    const list = todoList.slice();
    const index = list.findIndex((item) => item.id === id);
    list[index].completed = status;
    list[index].date = date;
    setTodoList(list);
  };

  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <SideDrawer {...props} />}>
          <Drawer.Screen
            name="home"
            options={{ title: "" }}
            children={() => (
              
            )}
          ></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer> */}
      <View>
        <Header open={openDrawer} setOpen={setOpenDrawer} />
        <Todo todoList={todoList} setTodoList={setTodoList} />
        <HorizontalBar />
        <TextComp h1>TO DO</TextComp>
        <ItemList todoList={todoList} changeStatus={changeStatus} />
        <HorizontalBar />
        <TextComp h1>COMPLETED</TextComp>
        <ItemList
          todoList={todoList}
          isCompleted={true}
          changeStatus={changeStatus}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
