import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  Alert
} from "react-native";
import styles from "../../../../styles/signUp.step4.styles";
import { useSignUp } from "@/app/context/SignUpContext";

export default function Step4Documents() {
  const router = useRouter();
  const { data, updateData } = useSignUp();

  // Mock upload implementation
  const handleUpload = (type: 'doc' | 'photo') => {
    // In a real app, use expo-image-picker here
    const mockUrl = type === 'doc'
      ? 'https://example.com/doc.pdf'
      : 'https://github.com/shadcn.png';

    if (type === 'doc') {
      updateData({ documentUrl: mockUrl });
      Alert.alert("Sucesso", "Documento enviado!");
    } else {
      updateData({ photoUrl: mockUrl });
      Alert.alert("Sucesso", "Foto enviada!");
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AppHeader
        title="Cadastro"
        leftAction={{
          icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
          onPress: () => router.back(),
        }}
      />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.progressWrapper}>
          <Text style={styles.stepText}>Passo 4 de 5</Text>
          <Text style={styles.stepPercent}>80%</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        <Text style={styles.title}>Documentos e Foto</Text>
        <Text style={styles.subtitle}>
          Precisamos validar sua identidade antes de liberar turnos.
        </Text>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="document-text-outline" size={20} color="#2563EB" />
            <Text style={styles.cardTitle}>Upload de RG / CNH</Text>
          </View>

          <Pressable style={styles.uploadButton} onPress={() => handleUpload('doc')}>
            <Ionicons name={data.documentUrl ? "checkmark-circle" : "cloud-upload-outline"} size={18} color="#2563EB" />
            <Text style={styles.uploadText}>{data.documentUrl ? "Documento Enviado" : "Selecionar arquivo"}</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="camera-outline" size={20} color="#2563EB" />
            <Text style={styles.cardTitle}>Foto de Perfil</Text>
          </View>

          <View style={styles.photoRow}>
            <View style={styles.photoPlaceholder}>
              <Image
                source={{ uri: data.photoUrl || "https://via.placeholder.com/80" }}
                style={styles.photo}
              />
            </View>

            <Pressable style={styles.photoButton} onPress={() => handleUpload('photo')}>
              <Ionicons name="camera" size={18} color="#FFFFFF" />
              <Text style={styles.photoButtonText}>Abrir câmera</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.tipBox}>
          <Ionicons name="bulb-outline" size={18} color="#2563EB" />
          <Text style={styles.tipText}>
            Fotos nítidas aumentam suas chances de aprovação.
          </Text>
        </View>

        <Pressable
          style={styles.nextButton}
          onPress={() => router.push("/(screens)/SignUp/Worker/step-5-finish")}
        >
          <Text style={styles.nextText}>Continuar para o último passo</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/(screens)/SignUp/Worker/step-5-finish")}>
          <Text style={styles.skipText}>Pular e completar depois</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}
