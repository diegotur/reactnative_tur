import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Buttons = ({
    styleButtonType,
    styleButtonTextType,
    onPress,
    title
}) => {
    return (
        <Pressable
            style={[styles.button, styleButtonType]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, styleButtonTextType]}>{title}</Text>
        </Pressable>
    );
};

export default Buttons;

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        borderColor: "black",
    },
    buttonText: {
        color: "white",
        alignItems: "center",
        fontSize: 17,
    },
    
});