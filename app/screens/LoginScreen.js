import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>Zanosa</Text>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to stay connected</Text>

        <TextInput placeholder="Email or Username" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />

        <Text style={styles.forgot}>Forgot password?</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.switchText}>
          Don't have an account?
          <Text
            style={styles.switchLink}
            onPress={() => navigation.navigate("Signup")}
          >
            {" "}Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}
