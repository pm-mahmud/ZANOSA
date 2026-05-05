import React from 'react';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView, TouchableOpacity, View, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentScreen() {
  const { url } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#eee' }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <WebView 
        source={{ uri: url as string }} 
        style={{ flex: 1 }}
        onNavigationStateChange={(navState) => {
           if (navState.url.includes("success")) {
             alert("Payment Successful! ✅");
             router.replace("/(tab)/menu");
           }
        }}
      />
    </SafeAreaView>
  );
}