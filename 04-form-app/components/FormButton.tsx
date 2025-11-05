import { Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from "react-native";

type ButtonVariant = "primary" | "secondary";

type FormButtonProps = {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function FormButton({
  label,
  onPress,
  variant = "primary",
  disabled = false,
  style,
}: FormButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variant === "primary" ? styles.primary : styles.secondary,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
  },
  primary: {
    backgroundColor: "#2B6CB0",
  },
  secondary: {
    backgroundColor: "#A0AEC0",
  },
  disabled: {
    backgroundColor: "#E2E8F0",
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  labelDisabled: {
    color: "#A0AEC0",
  },
});
