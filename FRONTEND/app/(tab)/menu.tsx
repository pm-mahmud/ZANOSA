import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

// @ts-ignore
const MenuItem = ({ icon, label, color = "#292323", onPress }) => (
  <Pressable style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={22} color={color} />
    <Text style={[styles.menuText, { color }]}>{label}</Text>
  </Pressable>
);

const Menu = () => {

  // পেমেন্ট ফাংশন
  const handlePayment = async () => {
    try {
      // ১. আপনার পিসির আসল IPv4 Address এখানে দিন (CMD তে ipconfig লিখে পাবেন)
      const serverIP = "192.168.0.105"; 
      
      const response = await fetch(`http://${serverIP}:3000/payment/init`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 500 }), // টাকার পরিমাণ এখানে দিন
      });
      
      const data = await response.json();

      if (data.url) {
        // ২. এটি আপনাকে পেমেন্ট গেটওয়েতে নিয়ে যাবে
        router.push({
          pathname: "/payment", 
          params: { url: data.url }
        });
      } else {
        Alert.alert("Error", "পেমেন্ট লিংক তৈরি করা যায়নি।");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "সার্ভার কানেক্ট হচ্ছে না! পিসি ও মোবাইল একই Wi-Fi এ আছে তো?");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>

      <MenuItem icon="person-outline" label="Profile" onPress={() => router.push("/stack/profile")} />
      
      {/* নতুন পেমেন্ট বাটন */}
      <MenuItem 
        icon="wallet-outline" 
        label="Add Money" 
        color="#06127d" 
        onPress={handlePayment} 
      />

      <MenuItem icon="settings-outline" label="Settings" onPress={() => {}} />
      <MenuItem icon="information-circle-outline" label="About" onPress={() => {}} />
      <MenuItem icon="call-outline" label="Contact" onPress={() => {}} />
      <MenuItem icon="alert-circle-outline" label="Report a Problem" onPress={() => {}} />
      
      <MenuItem
        icon="log-out-outline"
        label="Logout"
        color="red"
        onPress={() => router.push("/stack/login")}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
});