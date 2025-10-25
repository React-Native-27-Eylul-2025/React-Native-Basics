import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export const FirstApp = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ölürüm Türkiyem!</Text>
            <TouchableOpacity style={{paddingBlock: 6, paddingInline: 16, backgroundColor: "#007aff", alignItems: "center", alignSelf: "center"}}>
                <Text style={{color: "white", fontSize: 16, fontWeight: "600"}}>Başla</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 36,
        fontWeight: "700",
        textAlign: "center"
    }
})


// export: dışa aktarmak demek
// import: içe aktarmak demek