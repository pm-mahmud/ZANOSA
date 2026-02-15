import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Home = () => {
  const handlePost = () => alert("Post button clicked");
  const handleLike = () => alert("You liked this!");
  const handleComment = () => alert("Comment clicked!");

  // Story data
  const stories = [
    {
      id: "1",
      name: "Your Story",
      image:
        "https://www.hindustantimes.com/ht-img/img/2025/12/05/400x225/Aneet_1764921997915_1764922011377.jpg",
      isUser: true,
    },
    {
      id: "2",
      name: "Pm_Mahmud",
      image:
        "https://w0.peakpx.com/wallpaper/451/925/HD-wallpaper-bad-boy-boy-in-dark-thumbnail.jpg",
    },
    {
      id: "3",
      name: "Jadab Lala",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQts2MT-9b7kuf7VYn5TY0nkcuu5ty9uMUIAA&s",
    },
    {
      id: "4",
      name: "Tabassum",
      image:
        "https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg",
    },
    {
      id: "5",
      name: "Tamanna Ahmed",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
  ];

  const renderPost = (index: number) => (
    <View key={index} style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
          }}
          style={styles.postAvatar}
        />
        <Text style={styles.postAuthor}>Pavel Mahmud Raj</Text>
      </View>
      <Image
        source={{
          uri: "https://images5.alphacoders.com/802/thumb-1920-802029.jpg",
        }}
        style={styles.postImage}
      />
      <View style={styles.postCaption}>
        <Text style={{ fontSize: 15, color: "#333" }}>
          @Amake Kew Valobashe Na..
        </Text>
      </View>
      <View style={styles.postActions}>
        <Pressable onPress={handleLike} style={styles.actionButton}>
          <Ionicons name="heart-outline" size={24} color="red" />
          <Text style={{ marginLeft: 5, fontWeight: "500" }}>Like</Text>
        </Pressable>
        <Pressable onPress={handleComment} style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#06127d" />
          <Text style={{ marginLeft: 5, fontWeight: "500" }}>Comment</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    // SafeAreaView and paddingTop status bar er problem solve korbe
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.logo}>Zanosa</Text>
          <View style={styles.headerRight}>
            <Pressable onPress={handlePost} style={styles.postTopBtn}>
              <Ionicons name="add" size={18} color="white" />
              <Text style={styles.postBtnText}>Post</Text>
            </Pressable>
            <Pressable style={{ marginLeft: 15 }}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={28}
                color="black"
              />
              <View style={styles.notifBadge} />
            </Pressable>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Story Section */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.storyContainer}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {stories.map((story) => (
              <View key={story.id} style={styles.storyItem}>
                <View
                  style={[
                    styles.storyCircle,
                    !story.isUser && styles.activeStoryBorder,
                  ]}
                >
                  <Image
                    source={{ uri: story.image }}
                    style={styles.storyImg}
                  />
                  {story.isUser && (
                    <View style={styles.addStoryBtn}>
                      <Ionicons name="add" size={12} color="white" />
                    </View>
                  )}
                </View>
                <Text style={styles.storyText} numberOfLines={1}>
                  {story.name}
                </Text>
              </View>
            ))}
          </ScrollView>

          {/* Posts Section */}
          <View style={{ paddingHorizontal: 12 }}>
            {[1, 2, 3].map((_, i) => renderPost(i))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    // Android er jonno status barer niche space create kora
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  mainContainer: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 34,
    fontWeight: "900",
    color: "#06127d",
    letterSpacing: -1,
  },
  headerRight: { flexDirection: "row", alignItems: "center" },
  postTopBtn: {
    flexDirection: "row",
    height: 36,
    paddingHorizontal: 15,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06127d",
  },
  postBtnText: {
    fontWeight: "700",
    color: "white",
    fontSize: 15,
    marginLeft: 4,
  },
  notifBadge: {
    position: "absolute",
    right: -2,
    top: -2,
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
  },
  storyContainer: { paddingLeft: 15, marginBottom: 15, marginTop: 5 },
  storyItem: { alignItems: "center", marginRight: 15, width: 70 },
  storyCircle: { position: "relative", padding: 3 },
  activeStoryBorder: {
    borderWidth: 2.5,
    borderColor: "#318CE7",
    borderRadius: 35,
  },
  storyImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eee",
  },
  addStoryBtn: {
    position: "absolute",
    bottom: 2,
    right: 2,
    backgroundColor: "#318CE7",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  storyText: { fontSize: 11, marginTop: 5, color: "#333", fontWeight: "600" },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#efefef",
    marginBottom: 20,
    overflow: "hidden",
    // Halka shadow jaate card gula beshe thake
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  postHeader: { flexDirection: "row", alignItems: "center", padding: 12 },
  postAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
    backgroundColor: "#f0f0f0",
  },
  postAuthor: { fontSize: 15, fontWeight: "700", color: "#222" },
  postImage: { width: "100%", height: 300, resizeMode: "cover" },
  postCaption: { padding: 12 },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#f0f0f0",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Home;
