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
          title: "Search",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Artist, song or playlist",
          }
        }}
      />
      <Stack.Screen name="detay" options={{
          headerStyle: { backgroundColor: '#4a90e2' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
      }} />
      <Stack.Screen name="user" />
    </Stack>
  );
}
