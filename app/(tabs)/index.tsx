import Calculator from "@/components/Calculator";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calculator />
    </SafeAreaView>
  );
}
