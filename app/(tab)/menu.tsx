import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // 1. useRouter import
import React from "react";
import { Pressable, Text, View } from "react-native";

// Reusable Menu Item
// @ts-ignore
const MenuItem = (
  { icon, label, color = "#292323", onPress }, // 2. onPress props add kora hoise
) => (
  <Pressable
    onPress={onPress} // 3. ekhane onPress set kora hoise
    style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 15,
      borderRadius: 12,
      marginBottom: 12,
      elevation: 2,
    }}
  >
    <Ionicons name={icon} size={22} color={color} />
    <Text
      style={{
        marginLeft: 15,
        fontSize: 16,
        fontWeight: "500",
        color,
      }}
    >
      {label}
    </Text>
    {/* right side arrow  */}
    <Ionicons
      name="chevron-forward"
      size={18}
      color="#ccc"
      style={{ marginLeft: "auto" }}
    />
  </Pressable>
);

// Main Menu Component
const Menu = () => {
  const router = useRouter(); // 4. router declare kora hoise

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Header */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#000",
        }}
      >
        Menu
      </Text>

      {/* Menu Items */}
      {/* 5.profile jawar jonno onPress add kora hoise */}
      <MenuItem
        icon="person-outline"
        label="Profile"
        onPress={() => router.push("/profile")}
      />

      <MenuItem icon="settings-outline" label="Settings" />
      <MenuItem icon="information-circle-outline" label="About" />
      <MenuItem icon="call-outline" label="Contact" />
      <MenuItem icon="alert-circle-outline" label="Report a Problem" />

      {/* 6. logout korar jonno onPress add kora hoise */}
      <MenuItem
        icon="log-out-outline"
        label="Logout"
        color="red"
        onPress={() => router.replace("/login")}
      />
    </View>
  );
};

export default Menu;
