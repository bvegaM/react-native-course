import { StyleSheet, Text, View } from "react-native";

type StepProgressProps = {
  steps: readonly string[];
  activeStep: number;
};

export default function StepProgress({ steps, activeStep }: StepProgressProps) {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const reached = index <= activeStep;

        return (
          <View key={step} style={styles.item}>
            <View style={[styles.circle, reached && styles.circleActive]}>
              <Text style={styles.index}>{index + 1}</Text>
            </View>
            <Text style={[styles.label, reached && styles.labelActive]}>{step}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  item: {
    alignItems: "center",
    flex: 1,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#CBD5E0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  circleActive: {
    borderColor: "#3182CE",
    backgroundColor: "#EBF8FF",
  },
  index: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2D3748",
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    color: "#718096",
    textAlign: "center",
  },
  labelActive: {
    color: "#2B6CB0",
    fontWeight: "500",
  },
});
