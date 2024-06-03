import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = () => {
    return (
        <View style={styles.boxTitulo}>
            <Text style={styles.titulo}>My Finance</Text>
            <Text style={styles.subTitulo}>Aplicativo para registro de contas</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    boxTitulo: {
        alignItems: "center",
    },
    titulo: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold"
    },
    subTitulo: {
        color: "#fda42d",
        fontSize: 14,
    }
});

export default Title;