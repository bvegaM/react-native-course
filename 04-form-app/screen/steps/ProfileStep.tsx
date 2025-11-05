import { View } from "react-native";
import FieldLabel from "../../components/FieldLabel";
import StyledTextInput from "../../components/StyledTextInput";
import { type FormData, type FormFieldUpdater } from "../../models/formData";

type ProfileStepProps = {
  data: FormData;
  updateField: FormFieldUpdater;
};

export default function ProfileStep({ data, updateField }: ProfileStepProps) {
  return (
    <View>
      <FieldLabel label="First name" required />
      <StyledTextInput
        value={data.firstName}
        onChangeText={(text) => updateField("firstName", text)}
        placeholder="Jane"
        autoCapitalize="words"
      />

      <FieldLabel label="Last name" />
      <StyledTextInput
        value={data.lastName}
        onChangeText={(text) => updateField("lastName", text)}
        placeholder="Doe"
        autoCapitalize="words"
      />

      <FieldLabel label="Email" required />
      <StyledTextInput
        value={data.email}
        onChangeText={(text) => updateField("email", text)}
        placeholder="jane.doe@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
}
