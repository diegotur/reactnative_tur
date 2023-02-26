import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Item = ({ itemData, openModal }) => {
  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() => {
        openModal(itemData.item);
      }}
    >
      <Text style={styles.item}>{itemData.item.value}</Text>
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
    itemContainer: {
      marginTop: 45,
      flex: 1,
  
      },
      item: {
        padding: 10,
        textAlign: "center",
        backgroundColor: "#E3BA6D",
      
      },
});