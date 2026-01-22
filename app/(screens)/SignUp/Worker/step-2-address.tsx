import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
import styles from "../../../../styles/signUp.step2.styles";
import { useSignUp } from "@/app/context/SignUpContext";

export default function Step2Address() {
  const router = useRouter();
  const { data, updateData } = useSignUp();

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
          <Text style={styles.stepLink}>PASSO 2 DE 5</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        <Text style={styles.title}>Onde você mora?</Text>
        <Text style={styles.subtitle}>
          Informe sua localização para encontrarmos turnos de trabalho próximos a você.
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>CEP</Text>
          <View style={styles.cepContainer}>
            <TextInput
              placeholder="00000-000"
              placeholderTextColor="#9CA3AF"
              style={styles.cepInput}
              keyboardType="numeric"
              value={data.zipCode}
              onChangeText={(text) => updateData({ zipCode: text })}
            />
            <Pressable style={styles.cepButton}>
              <Ionicons name="search" size={18} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Logradouro</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Rua, Avenida, Travessa"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              value={data.street}
              onChangeText={(text) => updateData({ street: text })}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.field, styles.half]}>
            <Text style={styles.label}>Número</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="123"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                keyboardType="numeric"
                value={data.number}
                onChangeText={(text) => updateData({ number: text })}
              />
            </View>
          </View>

          <View style={[styles.field, styles.half]}>
            <Text style={styles.label}>Complemento</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Ex: Apto 42"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={data.complement}
                onChangeText={(text) => updateData({ complement: text })}
              />
            </View>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Cidade</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="São Paulo"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              value={data.city}
              onChangeText={(text) => updateData({ city: text })}
            />
          </View>
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>Voltar</Text>
          </Pressable>

          <Pressable
            style={styles.nextButton}
            onPress={() => router.push("/(screens)/SignUp/Worker/step-3-skills")}
          >
            <Text style={styles.nextText}>Próximo</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
