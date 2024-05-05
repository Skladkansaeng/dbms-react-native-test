import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

function LeaderBoard({ navigation }: any) {
  const [leaderBoard, setLeaderBoard] = useState<any>([]);
  const getLeaderBoard = async () => {
    const _leaderBoard = (await AsyncStorage.getItem("leaderBoard")) ?? "[]";
    setLeaderBoard(JSON.parse(_leaderBoard));
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getLeaderBoard();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getLeaderBoard();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={[
          {
            name: <Text style={{ fontWeight: "bold" }}>Name</Text>,
            score: <Text style={{ fontWeight: "bold" }}>Score</Text>
          },
          ...(leaderBoard as Array<{ name: string; score: number }>)
            .sort((a, b) => b.score - a.score)
            .splice(0, 10)
        ]}
        keyExtractor={(item, idx) => `${item.name}${idx}`}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            {/* <Text style={styles.rank}>{index + 1}</Text> */}
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  rank: {
    fontSize: 16,
    marginRight: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginRight: 10
  },
  score: {
    fontSize: 16
  }
});

export default LeaderBoard;
