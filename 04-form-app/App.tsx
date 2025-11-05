import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import FormWizardScreen from "./screen/FormWizardScreen";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F8", marginTop: 40 }}>
      <StatusBar style="dark" />
      <FormWizardScreen />
    </View>
  );
}
