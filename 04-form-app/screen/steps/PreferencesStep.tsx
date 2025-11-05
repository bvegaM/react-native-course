import { StyleSheet, Switch, Text, View } from "react-native";
import FieldLabel from "../../components/FieldLabel";
import StyledTextInput from "../../components/StyledTextInput";
import { type FormData, type FormFieldUpdater } from "../../models/formData";

type PreferencesStepProps = {
  data: FormData;
  updateField: FormFieldUpdater;
};

export default function PreferencesStep({ data, updateField }: PreferencesStepProps) {
  return (
    <View>
      <FieldLabel label="Subscribe to updates" />
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>
          {data.subscribe ? "You are subscribed" : "You are not subscribed"}
        </Text>
        <Switch value={data.subscribe} onValueChange={(value) => updateField("subscribe", value)} />
      </View>

      <FieldLabel label="Anything else we should know?" />
      <StyledTextInput
        value={data.notes}
        onChangeText={(text) => updateField("notes", text)}
        placeholder="Share a short note..."
        multiline
        numberOfLines={4}
        style={styles.textArea}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switchRow: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchLabel: {
    fontSize: 16,
    color: "#2D3748",
    flex: 1,
    marginRight: 12,
  },
  textArea: {
    minHeight: 120,
  },
});
