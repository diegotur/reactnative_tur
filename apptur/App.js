import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Pressable,
  onHandlerDelete,
  Dimensions,
  SafeAreaView
} from "react-native";

import ModalItem from "./components/Modal";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    setItems((oldArray) => [...oldArray, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const removeItem = (id) => {      
    setModalVisible(!modalVisible);
    setItems((oldArray) => oldArray.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}
    >
    <View style={styles.screen}>
      <View style={styles.header}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregue un item a su lista"
          style={styles.input}
          onChangeText={onChangeText}
          value={itemText}
          />
        <Pressable style={styles.addButton} onPress={(addItem)}>
            <Text style={styles.addButtonText}>AGREGAR</Text>
          </Pressable>  
      </View>
      </View>
      <FlatList style={styles.flatList}
        data={items}
        renderItem={(itemData) => (
          <Pressable style={styles.contentList} onPress={()=>{
            selectItem(itemData.item)
          }}>
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        />
      <ModalItem
      visible={modalVisible}
      onDelete={onHandlerDelete.bind(this, itemSelected.id)}
      Item= {selectedItem}
      />

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
  },
  screen: {
    marginTop: 40,
    padding: 30,
    height: Dimensions.get("window").height,

  },
  header:{
    backgroundColor: "#E0A83F",
    width: Dimensions.get("window").width,
    marginTop: -30,
    marginLeft: -30,
    height: 100,
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
  },
  inputContainer: {
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
  flatList: {
    marginTop: 15,
    
  },
  itemContainer: {
    marginTop: 45,
    flex: 1,
  },
  item: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#E3BA6D",
  },
  contentList: {
    padding: 5,
    borderRadius: 15,
    marginBottom: 8,
    backgroundColor: "white",
  },
  addButton: {
    textColor: "white",
    borderRadius: 5,
    borderColor: "black",
  },
  addButtonText:{
    textColor: "black",
    alignItems: "center",
    fontSize: 17,
  },
  addButtonText2:{
    color: "white",
    alignItems: "center",
    fontSize: 22,
  },
  modalContainer: {
    height: 150,
    marginTop: 300,
    width: Dimensions.get("window").width,
    alignSelf:'center',
    backgroundColor: 'black',
  },
  modalTitle: {
    padding: 10,
  },
  modalText:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
  },
  modalContent: {
    padding: 10,
    marginBottom: 10,
    width:'100%',
    alignItems: "center",
  },
  modalContentText:{
    color: "white",
    fontSize: 16,
  },
  modalActions: {
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor: "grey",
    width: "80%",
    marginLeft: 40,
  }
});