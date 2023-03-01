import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { ListItem, NewItemHeader, Modal } from "./src/components";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    text.length > 0  &&
    setItemText(text);
  };



  const addItemToState = () => {
    if (itemText.length > 0){
      setItems (newArr = [...items, { id: Date.now(), value: itemText }]);
      setItemText("");
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArray) => oldArray.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
      <NewItemHeader
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToState={addItemToState}
        />
        </View>
      <ListItem items={items} openModal={openModal} />
      <Modal
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    padding: 30,
    height: Dimensions.get("window").height,
  },
  header: {
    backgroundColor: "#E0A83F",
    width: Dimensions.get("window").width,
    marginTop: -30,
    marginLeft: -30,
    height: 100,
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
  },

});