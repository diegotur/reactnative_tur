import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Item = ({ itemData, openModal }) => {
  
  return (
    <View 
    style={styles.itemView}
    
    >

    <Pressable
      style={styles.itemContainer}
      onPress={() => {
        openModal(itemData.item);
      }}
      >
      <Text style={styles.item}>{itemData.item.value}</Text>
      
    </Pressable>
    <Pressable
      style={styles.checkBox}>
      <Text style={styles.item}>HECHO
      </Text>

      </Pressable>
        </View>
  );
};

export default Item;

const styles = StyleSheet.create({
    itemContainer: {
      marginTop: 45,
      flex: 1,
      justifyContent: "space-around",
      width: "70%",
    },
    checkBox:{
      width: "30%",
    },
    itemView:{
      justifyContent: "space-around",
      flexWrap: "nowrap",
      },
      item: {
        padding: 10,
        textAlign: "center",
        backgroundColor: "#E3BA6D",
      
      },
});