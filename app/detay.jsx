import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DetailScreen() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bu Detay Sayfasıdır</Text>
      <Button title="Geri Dön" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: { 
    fontSize: 20, 
    marginBottom: 20 
  },
});
