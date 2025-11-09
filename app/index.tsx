import { Link, useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Ödevi</Text>

      {/* useState kullanımı */}
      <Text style={styles.text}>Sayaç: {count}</Text>
      <Button title="Arttır" onPress={() => setCount(count + 1)} />

      {/* TouchableOpacity örneği */}
      <TouchableOpacity
        style={styles.touchButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.touchText}>Modalı Aç</Text>
      </TouchableOpacity>

      {/* Modal örneği */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text>Bu bir Modal bileşenidir!</Text>
            <Button title="Kapat" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Link/Navigasyon örneği */}
      <Button
        title="Detay Sayfasına Git"
        onPress={() => navigation.navigate("detay")}
      />
      <Link href={"/detay"}>
        <Text>Detaya git</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginVertical: 10 },
  touchButton: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  touchText: { color: "#fff", fontWeight: "600" },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
