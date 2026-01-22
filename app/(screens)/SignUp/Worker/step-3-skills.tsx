import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View
} from "react-native";
import styles from "../../../../styles/signUp.skills.styles";
import { useSignUp } from "@/app/context/SignUpContext";

const skillsList = [
  "Garçom",
  "Garçonete",
  "Barman",
  "Bartender",
  "Chef",
  "Cozinheiro",
  "Auxiliar de Cozinha",
  "Limpeza",
  "Recepcionista",
  "Caixa"
];

export default function Step3Skills() {
  const router = useRouter();
  const { data, updateData } = useSignUp();
  const [selected, setSelected] = useState<string[]>(data.skills || []);

  useEffect(() => {
    updateData({ skills: selected });
  }, [selected]);

  function toggleSkill(skill: string) {
    if (selected.includes(skill)) {
      setSelected(selected.filter((item) => item !== skill));
      return;
    }
    setSelected([...selected, skill]);
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AppHeader
        title="Cadastro Profissional"
        leftAction={{
          icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
          onPress: () => router.back(),
        }}
      />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.progressWrapper}>
          <Text style={styles.stepText}>Progresso do Cadastro</Text>
          <Text style={styles.stepLink}>PASSO 3 DE 5</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        <Text style={styles.title}>Quais são suas especialidades?</Text>
        <Text style={styles.subtitle}>
          Selecione as funções que você pode exercer nos turnos.
        </Text>

        <View style={styles.skillsContainer}>
          {skillsList.map((skill) => {
            const active = selected.includes(skill);

            return (
              <Pressable
                key={skill}
                style={[
                  styles.skillChip,
                  active && styles.skillChipActive,
                ]}
                onPress={() => toggleSkill(skill)}
              >
                <Text
                  style={[
                    styles.skillText,
                    active && styles.skillTextActive,
                  ]}
                >
                  {skill}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>Voltar</Text>
          </Pressable>

          <Pressable
            style={styles.nextButton}
            onPress={() => router.push("/(screens)/SignUp/Worker/step-4-documents")}
          >
            <Text style={styles.nextText}>Próximo</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
