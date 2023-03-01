import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Buttons from "./Button";

const NewItemHeader = ({
  onChangeText,
  itemText,
  addItemToState,
}) => {
  return (
    <View style={styles.addItemInputContainer}>
      <TextInput
        placeholder="Agregue un item a la lista"
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
      />
      <Buttons styleButtonTextType={styles.addButton}
      title="AGREGAR" onPress={addItemToState} />
    </View>
  );
};

export default NewItemHeader;

const styles = StyleSheet.create({
  addItemInputContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
    marginLeft: 20,
  },
  input: {
    width: 300,
    marginRight: 10,
    paddingLeft: 5,
    backgroundColor: "white",
  },
  addButton:{
    color: "black",
  }
});