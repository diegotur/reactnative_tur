import { StyleSheet, Text, Dimensions, View, Modal as RNmodal } from "react-native";
import React from "react";
import Buttons from "./Button";

const Modal = ({
    modalVisible,
    selectedItem,
    onCancelModal,
    onDeleteModal,
}) => {
    return (
        <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalMainView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>ELIMINAR ITEM</Text>
                    <Text style={styles.modalText}>
                        ¿Está seguro que desea eliminar el item{" "}
                        <Text >{selectedItem?.value}</Text>?
                    </Text>
                    <View style={styles.modalActions}>
                        <Buttons
                            title="Cancelar"
                            onPress={onCancelModal}
                        />
                        <Buttons
                            title="Eliminar"
                            onPress={() => {
                                onDeleteModal(selectedItem.id);
                            }}
                        />
                    </View>
                </View>
            </View>
        </RNmodal>
    );
};

export default Modal;

const styles = StyleSheet.create({
    modalMainView: {
        height: 150,
        marginTop: 300,
        width: "90%",
        alignSelf: 'center',
        backgroundColor: 'black',

    },
    modalView: {
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: "center",
    },
    modalTitle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: "white",
    },
    modalText: {
        color: "yellow",
        fontSize: 16,
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
        marginTop: 28,
},
});