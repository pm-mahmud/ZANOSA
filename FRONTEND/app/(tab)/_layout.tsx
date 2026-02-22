import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: "Messages",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
        }}
      />

      {/* এই অংশটি পেমেন্ট বাটনটিকে নিচ থেকে সরিয়ে দেবে */}
      <Tabs.Screen
        name="payment"
        options={{
          href: null, // এটিই ম্যাজিক যা ট্যাব বার থেকে বাটনটি হাইড করবে
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default RootLayout;