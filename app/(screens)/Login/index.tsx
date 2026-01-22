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
  ActivityIndicator
} from "react-native";
import styles from "../../../styles/login.styles";
import api from "@/app/services/api";

import { useUser } from "@/app/context/UserContext";

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
      console.log("Login Success:", response.data);

      setUser(response.data.user); // Save user to global context

      router.push("/(screens)/Home");
    } catch (error: any) {
      console.error("Login Error:", error);
      Alert.alert("Erro", "Falha ao entrar. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.htitle}>befree</Text>

        <Text style={styles.title}>Bem-vindo de volta</Text>
        <Text style={styles.subtitle}>
          Acesse sua conta para gerenciar turnos
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>E-mail ou CPF</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={18} color="#9CA3AF" />
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
            <Ionicons name="lock-closed-outline" size={18} color="#9CA3AF" />
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
                size={18}
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
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </Pressable>
        <Pressable onPress={() => router.push("/(screens)/ChooseRole")}>
          <Text style={styles.footer}>
            Ainda não tem uma conta?{" "}
            <Text style={styles.link}>Cadastre-se</Text>
          </Text>
        </Pressable>

      </ScrollView>
    </>
  );
}
