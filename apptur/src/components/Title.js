import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.firstText}>ELEMENTOS DE LA LISTA</Text>
      <Text style={styles.secondText}>Mantener</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 0,
        paddingTop: -10,
        width: "100%",
        
    },
    firstText:{
        borderBottomWidth: 1,
        width: "80%",
        fontSize: 22,
        marginLeft: 20,
        paddingLeft: 18,
    },
    secondText:{
        width: "20%",
        fontSize: 12,
        paddingLeft: 16,
        paddingTop: 7,

    },
})