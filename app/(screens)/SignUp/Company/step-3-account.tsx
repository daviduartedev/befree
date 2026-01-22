import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../../../styles/companySignup.styles";
import { useState } from "react";
import { useSignUp } from "@/app/context/SignUpContext";
import api from "@/app/services/api";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AppHeader from "@/app/components/header";

export default function CompanyStep3() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data, updateData, resetData } = useSignUp();

    const canContinue = email.length > 0 && password.length >= 6;

    const onSubmit = async () => {
        if (!canContinue) return;

        updateData({ email, password });

        await api.post("/auth/register", {
            role: "COMPANY",

            name: data.companyName,
            email,
            password,

            companyName: data.companyName,
            companyLocation: data.companyLocation,
        });
        resetData();
        router.replace("/(screens)/Login");
    };

    return (
        <View style={styles.container}>
            <AppHeader
                title="Cadastro"
                leftAction={{
                    icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                    onPress: () => router.back(),
                }}
            />
            <Text style={styles.title}>
                Crie sua conta
            </Text>

            <Text style={styles.subtitle}>
                Use um email válido para acessar o painel da empresa.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Pressable
                style={[
                    styles.primaryButton,
                    !canContinue && styles.primaryButtonDisabled,
                ]}
                disabled={!canContinue}
                onPress={onSubmit}
            >
                <Text style={styles.primaryButtonText}>
                    Criar Conta
                </Text>
            </Pressable>
        </View>
    );
}
