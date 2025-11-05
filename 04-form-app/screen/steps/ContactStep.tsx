import { View } from "react-native";
import FieldLabel from "../../components/FieldLabel";
import StyledTextInput from "../../components/StyledTextInput";
import { type FormData, type FormFieldUpdater } from "../../models/formData";

type ContactStepProps = {
  data: FormData;
  updateField: FormFieldUpdater;
};

export default function ContactStep({ data, updateField }: ContactStepProps) {
  return (
    <View>
      <FieldLabel label="Phone number" required />
      <StyledTextInput
        value={data.phone}
        onChangeText={(text) => updateField("phone", text)}
        placeholder="+1 555 123 4567"
        keyboardType="phone-pad"
      />

      <FieldLabel label="Company" />
      <StyledTextInput
        value={data.company}
        onChangeText={(text) => updateField("company", text)}
        placeholder="Acme Inc."
      />

      <FieldLabel label="City" required />
      <StyledTextInput
        value={data.city}
        onChangeText={(text) => updateField("city", text)}
        placeholder="San Francisco"
      />
    </View>
  );
}
