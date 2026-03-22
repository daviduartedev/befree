import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  Alert,
  ActivityIndicator,
  Image
} from "react-native";
import styles from "../../../styles/login.styles";
import api from "@/app/services/api";

import { useUser } from "@/app/context/UserContext";
import { saveToken } from "@/app/authStorage";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();

  async function handleLogin() {
    try {
      setLoading(true);
      const response = await api.post('/auth/login', { email, password });
      await saveToken(response.data.access_token);

      setUser(response.data.user);

      const role = response.data.user.role;

      if (role === "COMPANY") {
        router.replace("/(screens)/CompanyHome");
      } else {
        router.replace("/(screens)/Home");
      }
    } catch (error: any) {
      console.error("Login Error:", error);
      Alert.alert("Erro", "Falha ao entrar. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Top Pattern */}
      <View style={styles.topPatternContainer}>
        <Image
          source={require("../../../assets/images/bg2.jpg")}
          style={styles.patternImage}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Pattern */}
      <View style={styles.bottomPatternContainer}>
        <Image
          source={require("../../../assets/images/bg2.jpg")}
          style={styles.patternImage}
          resizeMode="cover"
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Bem-vindo de volta</Text>
          <Text style={styles.subtitle}>
            Acesse sua conta para gerenciar turnos
          </Text>

          <View style={styles.field}>
            <Text style={styles.label}>E-mail ou CPF</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              <TextInput
                placeholder="Digite seu e-mail ou CPF"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              <TextInput
                placeholder="Digite sua senha"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#9CA3AF"
                />
              </Pressable>
            </View>
          </View>

          <Pressable>
            <Text style={styles.forgot}>Esqueci minha senha</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleLogin} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#f23030" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </Pressable>

          <Pressable onPress={() => router.push("/(screens)/ChooseRole")}>
            <Text style={styles.footerText}>
              Ainda não tem uma conta?{" "}
              <Text style={styles.link}>Cadastre-se</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
