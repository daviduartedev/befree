import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../../../styles/companySignup.styles";
import { router } from "expo-router";
import { useState } from "react";
import { useSignUp } from "@/app/context/SignUpContext";
import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";

export default function CompanyStep2() {
    const [location, setLocation] = useState("");
    const { data, updateData } = useSignUp();

    const onContinue = () => {
        updateData({ companyLocation: location });
        router.push("/(screens)/SignUp/Company/step-3-account");
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
                Onde sua empresa está localizada?
            </Text>

            <Text style={styles.subtitle}>
                Informe a cidade principal de atuação.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Cidade / Estado"
                value={location}
                onChangeText={setLocation}
            />

            <Pressable
                style={[
                    styles.primaryButton,
                    !location && styles.primaryButtonDisabled,
                ]}
                disabled={!location}
                onPress={onContinue}
            >
                <Text style={styles.primaryButtonText}>
                    Continuar
                </Text>
            </Pressable>
        </View>
    );
}
