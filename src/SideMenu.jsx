import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Drawer } from "react-native-drawer-layout";

export default function SideMenu({ open, setOpen }) {
  return (
    <View style={styles.container}>
      <Drawer
        drawerType="front"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => {
          return <Text>Drawer content</Text>;
        }}
      ></Drawer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    left: -400,
    backgroundColor: "red",
    transform: "",
  },
});
