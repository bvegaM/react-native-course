import { StyleSheet, TextInput, type TextInputProps } from "react-native";

export default function StyledTextInput({ style, multiline, ...props }: TextInputProps) {
  return (
    <TextInput
      {...props}
      multiline={multiline}
      style={[styles.input, multiline && styles.multiline, style]}
      placeholderTextColor="#8E8E8E"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#F7FAFC",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#CBD5E0",
    fontSize: 16,
    color: "#1A202C",
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
