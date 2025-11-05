import { StyleSheet, Text, type StyleProp, type TextStyle } from "react-native";

type FieldLabelProps = {
  label: string;
  required?: boolean;
  style?: StyleProp<TextStyle>;
};

export default function FieldLabel({ label, required, style }: FieldLabelProps) {
  return (
    <Text style={[styles.label, style]}>
      {label}
      {required && <Text style={styles.required}> *</Text>}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "500",
    color: "#2D3748",
  },
  required: {
    color: "#E53E3E",
  },
});
