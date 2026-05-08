import { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          // User is logged in, go to main app
          router.replace("/(tab)");
        } else {
          // User is not logged in, go to login
          router.replace("/stack/login");
        }
      } catch (error) {
        console.log("Error checking auth:", error);
        router.replace("/stack/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}