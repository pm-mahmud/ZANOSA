import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const handlePost = () => alert("Post button clicked");
  const handleLike = () => alert("You liked this!");
  const handleComment = () => alert("Comment clicked!");

  // Helper function to render a single post
  const renderPost = () => (
    <View
      style={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 20,
        overflow: "hidden",
      }}
    >
      {/* Header: profile pic + name */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Zefry Epstin</Text>
      </View>

      {/* Post Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        }}
        style={{
          width: "100%",
          height: 200,
        }}
      />

      {/* Caption */}
      <View style={{ padding: 10, height: 100 }}>
        <Text>@Caption for the post</Text>
      </View>

      {/* Like & Comment */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 10,
          // borderTopWidth: 1,
          // borderTopColor: "gray",
        }}
      >
        {/* Like */}

        <Pressable
          onPress={handleLike}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="heart-outline" size={24} color="red" />
          <Text style={{ marginLeft: 5 }}>Like</Text>
        </Pressable>

        {/* comment */}

        <Pressable
          onPress={handleComment}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="chatbubble-outline" size={24} color="blue" />
          <Text style={{ marginLeft: 5 }}>Comment</Text>
        </Pressable>
      </View>
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
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Zanosa</Text>
        <Pressable
          onPress={handlePost}
          style={{
            height: 40,
            width: 80,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5868f5",
          }}
        >
          <Text style={{ fontWeight: "600", color: "white", fontSize: 17 }}>
            Post
          </Text>
        </Pressable>
      </View>

      {/* Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderPost()}
        {renderPost()}
        {renderPost()}
        {renderPost()}
        {renderPost()}
        {renderPost()}
      </ScrollView>
    </View>
  );
};

export default Home;
