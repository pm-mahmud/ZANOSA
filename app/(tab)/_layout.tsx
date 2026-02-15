import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#06127d", // Active icon color Zanosa themer sathe mil rekhe
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
        }}
      />

      {/* nicher code gula tab bar theke profile, login, signup remove kore debe */}
      <Tabs.Screen
        name="login"
        options={{
          href: null, // eita use korle icon niche ashbe na
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
