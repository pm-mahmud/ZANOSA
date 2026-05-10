import { View, Button, Alert } from "react-native";

export default function PremiumScreen() {

  const handlePayment = async () => {
    Alert.alert("Payment Button Working");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Button
        title="BUY PREMIUM"
        onPress={handlePayment}
      />
    </View>
  );
}