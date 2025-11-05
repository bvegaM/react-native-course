import { ScrollView, StyleSheet, Text, View } from "react-native";
import FormButton from "../components/FormButton";
import StepProgress from "../components/StepProgress";
import { useFormWizard } from "../state/useFormWizard";
import ContactStep from "./steps/ContactStep";
import PreferencesStep from "./steps/PreferencesStep";
import ProfileStep from "./steps/ProfileStep";
import SummaryStep from "./steps/SummaryStep";

export default function FormWizardScreen() {
  const {
    steps,
    activeStep,
    formData,
    errorMessage,
    isFinalStep,
    fullName,
    stepDescription,
    updateField,
    goNext,
    goBack,
    reset,
  } = useFormWizard();

  const renderStep = () => {
    if (isFinalStep) {
      return <SummaryStep data={formData} fullName={fullName} />;
    }

    switch (activeStep) {
      case 0:
        return <ProfileStep data={formData} updateField={updateField} />;
      case 1:
        return <ContactStep data={formData} updateField={updateField} />;
      case 2:
        return <PreferencesStep data={formData} updateField={updateField} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Onboarding</Text>
        <Text style={styles.subtitle}>{steps[activeStep]}</Text>
        <Text style={styles.description}>{stepDescription}</Text>
        <StepProgress steps={steps} activeStep={activeStep} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>{renderStep()}</View>

        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

        <View style={styles.buttonRow}>
          <FormButton
            label="Back"
            onPress={goBack}
            disabled={activeStep === 0}
            variant="secondary"
          />
          {!isFinalStep ? (
            <FormButton label="Next" onPress={goNext} />
          ) : (
            <FormButton label="Start Over" onPress={reset} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D7DBE0",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#1A202C",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "500",
    color: "#2D3748",
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: "#4A5568",
  },
  scrollContent: {
    padding: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#1A202C",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  errorText: {
    marginTop: 16,
    color: "#E53E3E",
    textAlign: "center",
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
});
