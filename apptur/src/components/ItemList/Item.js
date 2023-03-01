import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Item = ({ itemData, openModal }) => {

  const [checked, setChecked] = React.useState(false);

  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() => {
        openModal(itemData.item);
      }}
    >
      <Text style={styles.item}>{itemData.item.value}</Text>
      <Pressable
        //style={styles.checkBox} 
        style={() => [
          {
            backgroundColor: checked

              ? "green"
              : "red"
          },
          {
            width: "7%",
            height: "65%",
            borderRadius: 50,
            borderWidth: 3,
            marginTop: 6.5,
          }]}
        onPress={() => { setChecked((prevChecked) => !prevChecked) }}>
      </Pressable>

    </Pressable>

  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 45,
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
    flexDirection: "row",
  },
  checkBox: {
    width: "7%",
    height: "65%",
    borderRadius: 50,
    borderWidth: 3,
    marginTop: 6.5,
  },

  item: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#E3BA6D",
    width: "80%",
  },
});