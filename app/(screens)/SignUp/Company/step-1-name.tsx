import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../../../styles/companySignup.styles";
import { router } from "expo-router";
import { useState } from "react";
import { useSignUp } from "@/app/context/SignUpContext";
import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";

export default function CompanyStep1() {
    const [name, setName] = useState("");
    const { data, updateData } = useSignUp();

    const onContinue = () => {
        updateData({ companyName: name });
        router.push("/(screens)/SignUp/Company/step-2-location");
    };

    return (
        <View style={styles.container}>
            <AppHeader
                leftAction={{
                    icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                    onPress: () => router.back(),
                }}
                title="Cadastro" />
            <Text style={styles.title}>
                Qual o nome da sua empresa?
            </Text>

            <Text style={styles.subtitle}>
                Esse nome será exibido para os profissionais.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome da empresa"
                value={name}
                onChangeText={setName}
            />

            <Pressable
                style={[
                    styles.primaryButton,
                    !name && styles.primaryButtonDisabled,
                ]}
                disabled={!name}
                onPress={onContinue}
            >
                <Text style={styles.primaryButtonText}>
                    Continuar
                </Text>
            </Pressable>
        </View>
    );
}
