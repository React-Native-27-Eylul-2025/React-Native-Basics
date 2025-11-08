import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width // ekran genişliği
const IMAGE_WIDTH = SCREEN_WIDTH / 3

export default function User(){
    return (
      <View style={styles.container}>
        {/* Üst Kutu - Resim ve Kişilik Tipinin olduğu bölüm */}
        <View style={styles.topContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg",
            }}
          />
          <View style={styles.topTextContainer}>
            <Text style={styles.title1}>INFJ</Text>
            <Text style={styles.desc1}>27 - Sep 15</Text>
          </View>
        </View>

        {/* Alttaki Kutu - Ad soyad ve açıklama yazılarının olduğu bölüm */}
        <View style={styles.bottomContainer}>
          <Text style={styles.title2}>Bedirhan Giden</Text>
          <Text style={styles.desc2}>Member Since - July 15, 2016</Text>
          <Text style={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    );
}



const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    backgroundColor: "#757474ff",
    margin: 16,
    padding: 16,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  topTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  bottomContainer: {
    backgroundColor: "#424242ff",
    borderRadius: 16,
    marginTop: 16,
    padding: 16,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: IMAGE_WIDTH / 2,
  },
  title1: {
    fontSize: 48,
    fontWeight: "700",
    color: "#97d9f3ff",
  },
  desc1: {
    fontSize: 16,
    color: "#ffffffff",
  },
  title2: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
  desc2: {
    marginBottom: 20,
    color: "#c6c6c6ff",
    fontSize: 16,
  },
  paragraph: {
    color: "white",
  },
});