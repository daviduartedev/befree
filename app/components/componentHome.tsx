import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/componentHome.styles";
import { useRouter } from "expo-router";

type componentHomeProps = {
  disabled?: boolean;
};

export default function ComponentHome({
  disabled = false,
}: componentHomeProps) {
  const router = useRouter();

  return (
    <>
      <View>
        <Text style={styles.title}>
          FREE{"\n"}
          <Text style={styles.titleHighlight}>LEX</Text>
        </Text>

        <Text style={styles.subtitle}>
          Transforme tempo livre em oportunidades
        </Text>
      </View>

      <View style={styles.sectionSpacing}>
        <Pressable
          onPress={() => router.push("/(screens)/ChooseRole")}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
          disabled={disabled}
        >
          <Text style={styles.primaryButtonText}>
            Encontrar Oportunidades →
          </Text>
        </Pressable>
      </View>

      <View style={styles.sectionSpacing}>
        <Pressable
          onPress={() => router.push("/(screens)/Login")}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
          disabled={disabled}
        >
          <Text style={styles.secondaryButtonText}>
            Já possui uma conta? Entrar
          </Text>
        </Pressable>
      </View>
    </>
  );
}
