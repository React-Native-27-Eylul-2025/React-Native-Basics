import { StyleSheet, View } from "react-native"

export const FlexKavrami = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>

            <View style={styles.box2}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        flex: 1,
        backgroundColor: "blue"
    },
    box2: {
        flex: 1,
        backgroundColor: "red"
    },
})