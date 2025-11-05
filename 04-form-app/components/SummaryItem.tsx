import { StyleSheet, Text, View } from "react-native";

type SummaryItemProps = {
  label: string;
  value: string;
};

export default function SummaryItem({ label, value }: SummaryItemProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E2E8F0",
  },
  label: {
    fontSize: 14,
    color: "#4A5568",
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: "#1A202C",
    flex: 1,
    textAlign: "right",
  },
});
