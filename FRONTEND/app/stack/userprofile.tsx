import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router"; // router ইম্পোর্ট করা হয়েছে
import { Ionicons } from "@expo/vector-icons"; // আইকন ব্যবহারের জন্য

const Userprofile = () => {
  const [following, setFollowing] = useState(false);

  return (
    <ScrollView style={styles.container}>
      
      {/* --- Back Button --- */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />
 
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Name & Bio */}
      <View style={styles.bioSection}>
        <Text style={styles.name}>Pavel Mahmud Raj</Text>
        <Text style={styles.bio}>
          📸 Photographer 🌍 Traveler 🎨 Creative Mind
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.followButton,
            following && { backgroundColor: "#ddd" },
          ]}
          onPress={() => setFollowing(!following)}
        >
          <Text style={{ fontWeight: "600", color: following ? "black" : "white" }}>
            {following ? "Following" : "Follow"}
          </Text>
        </TouchableOpacity>

        <View style={styles.messageButton}>
          <Link href={"/stack/inbox"}>
            <Text style={{ fontWeight: "600" }}>Message</Text>
          </Link>
        </View>
      </View>

      {/* Posts Grid */}
      <View style={styles.grid}>
        {[...Array(12)].map((_, index) => (
          <View key={index} style={styles.gridItem} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Userprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10, // ব্যাক বাটনের জন্য স্পেস অ্যাডজাস্ট করা হয়েছে
    paddingHorizontal: 10,
    backgroundColor: "#fff", // একটু ফ্রেশ লুকের জন্য সাদা করা হয়েছে
  },

  // ব্যাক বাটনের স্টাইল
  backButton: {
    marginBottom: 10,
    marginTop: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "700",
  },

  statLabel: {
    fontSize: 14,
    color: "gray",
  },

  bioSection: {
    marginTop: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  bio: {
    marginTop: 5,
    fontSize: 14,
    color: "#444",
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },

  followButton: {
    flex: 1,
    backgroundColor: "#1DA1F2",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
  },

  messageButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },

  gridItem: {
    width: "33.33%",
    aspectRatio: 1,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#fff",
  },
});