import React from 'react';
import {Modal, View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';


const ModalItem  = (props) =>{
    const {visible, onDelete, Item} = props;

    if (!visible) return null;
    
    return(
<Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    >
        <View style={styles.modalContainer}>
        <View style={styles.modalTitle}>
            <Text style={styles.modalText}>ELIMINAR ITEM</Text>
        </View>
        <View style={styles.modalContent}>
            <Text style={styles.modalContentText}>¿Está seguro que desea eliminar el item {selectedItem?.value}?</Text>
            </View>
            <View style={styles.modalActions}>
            <Pressable style={styles.addButton} onPress={()=>{
                setModalVisible(false)
                setSelectedItem(null);
            }}>
            <Text style={styles.addButtonText2}>CANCELAR</Text>
            </Pressable>
            <Pressable style={styles.addButton} onPress={(onDelete)}>
            <Text style={styles.addButtonText2}>ELIMINAR</Text>
            </Pressable>
        </View>
    </View>
</Modal>
);
};
const styles = StyleSheet.create({

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

export default ModalItem;