import { StyleSheet, Text, View } from "react-native";
import SummaryItem from "../../components/SummaryItem";
import { type FormData } from "../../models/formData";

type SummaryStepProps = {
  data: FormData;
  fullName: string;
};

export default function SummaryStep({ data, fullName }: SummaryStepProps) {
  return (
    <View>
      <Text style={styles.title}>Summary</Text>
      <SummaryItem label="Name" value={fullName || "—"} />
      <SummaryItem label="Email" value={data.email} />
      <SummaryItem label="Phone" value={data.phone} />
      <SummaryItem label="Company" value={data.company || "—"} />
      <SummaryItem label="City" value={data.city} />
      <SummaryItem label="Subscribed" value={data.subscribe ? "Yes" : "No"} />
      <SummaryItem label="Notes" value={data.notes || "—"} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3748",
    marginBottom: 12,
  },
});
