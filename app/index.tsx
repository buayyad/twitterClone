import { StyleSheet, Text, View } from "react-native";
//
export default function Index() {
  return (
    <View style={styles.feedContainer}>
      <View style={styles.tweetCard}>
        <View style={styles.avatar}></View>
        <View style={styles.tweetContent}>
          <View style={styles.tweetHeader}>
            <Text style={styles.username}>Abdullah</Text>
            <Text style={styles.handle}>@abayyad</Text>
            <Text style={styles.timestamp}>1hr</Text>
          </View>
          <Text style={styles.tweetText}>It's called Twitter not X!</Text>
          <View style={styles.tweetActions}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 8,
  },
  tweetCard: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e6ecf0",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: "#000000",
  },
  tweetContent: {
    flex: 1,
  },
  tweetHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  username: {
    fontWeight: "bold",
    color: "#14171a",
    marginRight: 6,
    fontSize: 16,
  },
  handle: {
    color: "#657786",
    fontSize: 14,
    marginRight: 6,
  },
  timestamp: {
    color: "#657786",
    fontSize: 12,
  },
  tweetText: {
    color: "#14171a",
    fontSize: 16,
    lineHeight: 22,
  },
  // 1. App Header / Top Bar
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e6ecf0",
    backgroundColor: "#fff",
  },
  navButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: "#1DA1F2",
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14171a",
  },

  // 2. Tweet action row (likes, retweets, bookmarks)
  tweetActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#e6ecf0",
    backgroundColor: "#fff",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
    tintColor: "#657786",
  },
  actionText: {
    fontSize: 14,
    color: "#657786",
  },
});
