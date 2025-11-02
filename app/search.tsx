import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

const SPACING = 6;

export default function Search(){

    const categories = [
        "New Releases",
        "Charts",
        "Amplify: Emotional Health",
        "Hip-Hop",
        "Mood",
        "Pop",
        "Workout",
        "Country",
        "Türküler",
        "Sagopa Kajmer: Özel"
    ];
    
    return (
        <FlatList
            style={{backgroundColor: "black"}}
            data={categories}
            renderItem={({item}) => {
                return (
                    <View style={styles.renderItemConteiner}>
                        <Text style={styles.renderItemText}>{item}</Text>
                    </View>
                )
            }}
            numColumns={2}
            ListFooterComponent={() => (
                <View style={{height: 60}}></View>
            )}
        />
    )
}


const styles = StyleSheet.create({
  renderItemConteiner: {
    backgroundColor: "#ab4a43",
    margin: SPACING,
    aspectRatio: 4 / 3,
    width: (Dimensions.get("screen").width - SPACING * 4) / 2,
    borderRadius: 8,
    padding: 14,
  },
  renderItemText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  }
});