import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{}}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen
        name="search"
        options={{
          // header: () => {
          //   return (
          //     <View style={{ backgroundColor: "black", paddingTop: 90 }}>
          //       <Text style={{color: "white", fontSize: 32, fontWeight: "700",textAlign: "center"}}>Search</Text>
          //       <TextInput style={{backgroundColor: "white", marginHorizontal: 8, marginVertical: 24, padding: 16, borderRadius: 4}} placeholder="Artist, song or playlist" />
          //     </View>
          //   );
          // },
          title: "Search",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Artist, song or playlist",
          }
        }}
      />
      <Stack.Screen name="user" />
    </Stack>
  );
}
