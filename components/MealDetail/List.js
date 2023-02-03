import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#e2b497",
    borderRadius: 6,
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
