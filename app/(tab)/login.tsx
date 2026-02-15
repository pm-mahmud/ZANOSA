import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inner}
      >
        <View style={styles.logoSection}>
          <View style={styles.logoCircle}>
            <Ionicons name="apps" size={32} color="white" />
          </View>
          <Text style={styles.brandName}>Zanosa</Text>
        </View>

        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome back</Text>
          <Text style={styles.welcomeSubtitle}>
            Sign in to stay connected
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Email or Username</Text>
          <TextInput
            style={styles.input}
            placeholder="yourname@example.com"
            placeholderTextColor="#A0AABF"
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              placeholderTextColor="#A0AABF"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Ionicons
                name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                size={22}
                color="#7D8699"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome5 name="google" size={18} color="#318CE7" />
            <Text style={styles.socialBtnText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome5 name="apple" size={20} color="black" />
            <Text style={styles.socialBtnText}>Apple</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.footer}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  inner: { flex: 1, paddingHorizontal: 25, justifyContent: "center" },
  logoSection: { alignItems: "center", marginBottom: 20 },
  logoCircle: {
    backgroundColor: "#318CE7",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  brandName: { fontSize: 22, fontWeight: "800" },
  welcomeSection: { alignItems: "center", marginBottom: 30 },
  welcomeTitle: { fontSize: 28, fontWeight: "800", marginBottom: 5 },
  welcomeSubtitle: { fontSize: 15, color: "#7D8699" },
  form: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 8, marginTop: 15 },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#E8EDF2",
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8EDF2",
    borderRadius: 30,
    height: 55,
    paddingRight: 20,
  },
  passwordInput: { flex: 1, paddingHorizontal: 20 },
  forgotBtn: { alignSelf: "flex-end", marginTop: 10 },
  forgotText: { color: "#318CE7", fontWeight: "600", fontSize: 13 },
  loginBtn: {
    backgroundColor: "#318CE7",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  loginBtnText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  dividerRow: { flexDirection: "row", alignItems: "center", marginVertical: 30 },
  line: { flex: 1, height: 1, backgroundColor: "#E8EDF2" },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#A0AABF",
    fontWeight: "600",
  },
  socialRow: { flexDirection: "row", justifyContent: "space-between" },
  socialBtn: {
    flexDirection: "row",
    width: "48%",
    height: 55,
    borderWidth: 1,
    borderColor: "#E8EDF2",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  socialBtnText: { marginLeft: 10, fontWeight: "600" },
  footer: { marginTop: 40, alignSelf: "center" },
  footerText: { color: "#7D8699" },
  signUpLink: { color: "#318CE7", fontWeight: "700" },
});
