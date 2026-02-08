import { View, Text, ScrollView } from "react-native";
import React from "react";

const Message = () => {
  const renderChatItem = () => (
    <View
      style={{
        alignItems: "flex-start",
        height: 80,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20,
        borderColor: "#ddd",
        borderWidth: 1,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500" }}>John Doe</Text>
      <Text style={{ marginLeft: 10, color: "gray" }}>Hey! How are you?</Text>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Message Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Messages</Text>
      </View>

      {/* Chat List  */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ fontSize: 18, color: "gray" }}>
          No messages yet. Start a conversation!
        </Text>

        {renderChatItem()}
        {renderChatItem()}
        {renderChatItem()}
        {renderChatItem()}
        {renderChatItem()}
        {renderChatItem()}
        {renderChatItem()}
        {renderChatItem()}
      </ScrollView>
    </View>
  );
};

export default Message;
