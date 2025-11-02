import { Link } from "expo-router";
import { useState } from "react";
import { Button, Dimensions, Image, Text, View } from "react-native";

export default function Home(){
    const [state, setState] = useState(0)

    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
            style={{width: Dimensions.get("screen").width, aspectRatio: 2000/1335, objectFit: "cover"}}
            source={{uri: "https://finduslost.com/wp-content/uploads/2020/03/Winter-Hallstatt-Austria-FindUsLost-1060390.jpg"}}
        />
        <Text style={{ fontSize: 24, fontWeight: "700" }}>{state}</Text>
        <View style={{flexDirection: "row"}}>
          <Button title="Arttır" onPress={() => setState(state + 1)} />
          <Button title="Azalt" onPress={() => setState(state - 1)} />
        </View>
        <Button title="Sıfırla" onPress={() => setState(0)} />
            <Link href={"/search"} style={{backgroundColor: "pink", padding: 8, borderRadius: 6}}>
                <Text style={{color: "green", fontSize: 18}}>Search Ekranına Git</Text>
            </Link>
      </View>
    );
}

// https://finduslost.com/wp-content/uploads/2020/03/Winter-Hallstatt-Austria-FindUsLost-1060390.jpg