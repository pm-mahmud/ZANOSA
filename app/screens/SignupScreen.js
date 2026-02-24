import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>Zanosa</Text>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join our community today</Text>

        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.switchText}>
          Already have an account?
          <Text
            style={styles.switchLink}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}Log In
          </Text>
        </Text>
      </View>
    </View>
  );
}
