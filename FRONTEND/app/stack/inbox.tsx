import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { io, Socket } from "socket.io-client";
import { router } from "expo-router"; // ১. রাউটার ইম্পোর্ট
import { Ionicons } from "@expo/vector-icons"; // ২. আইকন ইম্পোর্ট

// Replace with your PC IP for testing on phone
const SOCKET_SERVER_URL = "http://192.168.1.183:3000";

interface Message {
  id: string;
  text: string;
  timestamp: string;
}

const Inbox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);
    socketRef.current.on("all_messages", (msgs: Message[]) => {
      setMessages(msgs);
    });
    socketRef.current.on("message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const msg: Message = {
      id: socketRef.current?.id || "",
      text: input,
      timestamp: new Date().toLocaleTimeString(),
    };
    socketRef.current?.emit("message", msg);
    setInput("");
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={5}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          
          {/* --- ৩. আপডেট করা Header যেখানে ব্যাক বাটন আছে --- */}
          <View style={styles.header}>
            <Pressable 
              onPress={() => router.back()} 
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="#3e3d3d" />
            </Pressable>
            <Text style={styles.headerText}>Pavel Mahmud Raj</Text>
            <View style={{ width: 24 }} /> {/* নাম মাঝখানে রাখার জন্য */}
          </View>

          {/* Messages */}
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((msg, index) => {
              const isMe = msg.id === socketRef.current?.id;
              return (
                <View
                  key={index}
                  style={[
                    styles.messageBubble,
                    isMe ? styles.myMessage : styles.theirMessage,
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      !isMe && styles.theirMessageText,
                    ]}
                  >
                    {msg.text}
                  </Text>
                </View>
              );
            })}
          </ScrollView>

          {/* Input Box */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type a message..."
              placeholderTextColor="#999"
              value={input}
              onChangeText={setInput}
            />
            <Pressable style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "#d4d9ea",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row", // ৪. আইকন ও টেক্সট পাশাপাশি রাখার জন্য
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    padding: 5,
  },
  headerText: {
    fontSize: 20, // ৫. একটু ছোট করা হয়েছে যাতে ফিট হয়
    fontWeight: "bold",
    color: "#3e3d3d",
    textAlign: "center",
  },
  messageBubble: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    maxWidth: "80%",
  },
  myMessage: {
    backgroundColor: "#5868f5",
    alignSelf: "flex-end",
  },
  theirMessage: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    alignSelf: "flex-start",
  },
  theirMessageText: {
    color: "#333",
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e7dfdf",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#5868f5",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});