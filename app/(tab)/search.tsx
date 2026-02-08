import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Header */}
      <View
        style={{
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Search
        </Text>
      </View>

      {/* Search Box */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 10,
          paddingHorizontal: 12,
          borderWidth: 1,
          borderColor: "#ddd",
          height: 45,
          marginBottom: 15,
        }}
      >
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search Your Friend..."
          placeholderTextColor="#999"
          style={{
            marginLeft: 8,
            fontSize: 16,
            flex: 1,
          }}
        />
      </View>

      {/* results */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* search results here */}
      </ScrollView>
    </View>
  );
};

export default Search;
