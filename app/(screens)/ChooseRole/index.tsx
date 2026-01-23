import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { styles } from "../../../styles/chooserole.styles";
import { router } from "expo-router";
import AppHeader from "@/app/components/header";

export default function ChooseRole() {
    const [role, setRole] = useState<"WORKER" | "COMPANY" | null>("WORKER");

    const handleContinue = () => {
        if (role === "WORKER") {
            router.push("/(screens)/SignUp/Worker/step-1-personal");
            return;
        }

        if (role === "COMPANY") {
            router.push("/(screens)/SignUp/Company/step-1-name");
            return;
        }
    };


    return (
        <View style={styles.container}>
            <AppHeader leftAction={{
                icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                onPress: () => router.back(),
            }} />

            <Text style={styles.title}>
                Como você deseja usar o{"\n"}freelex?
            </Text>

            <Text style={styles.subtitle}>
                Selecione uma opção abaixo para personalizar sua experiência.
            </Text>

            <View style={styles.cards}>
                <Pressable
                    style={[
                        styles.card,
                        role === "WORKER" && styles.cardActive,
                    ]}
                    onPress={() => setRole("WORKER")}
                >
                    <View style={styles.cardIconActive}>
                        <Ionicons name="person" size={22} color="#2563EB" />
                    </View>

                    <Text style={styles.cardTitle}>Sou Profissional</Text>
                    <Text style={styles.cardDescription}>
                        Trabalhe por turnos, ganhe dinheiro extra e tenha total flexibilidade.
                    </Text>

                    {role === "WORKER" && (
                        <Ionicons
                            name="checkmark-circle"
                            size={18}
                            color="#2563EB"
                            style={styles.checkIcon}
                        />
                    )}
                </Pressable>

                <Pressable
                    style={[
                        styles.card,
                        role === "COMPANY" && styles.cardActive,
                    ]}
                    onPress={() => setRole("COMPANY")}
                >
                    <View style={styles.cardIcon}>
                        <Ionicons name="business" size={22} color="#9CA3AF" />
                    </View>

                    <Text style={styles.cardTitle}>Sou Empresa</Text>
                    <Text style={styles.cardDescription}>
                        Contrate talentos qualificados, preencha turnos críticos e reduza custos.
                    </Text>
                </Pressable>
            </View>

            <Pressable
                style={[
                    styles.primaryButton,
                    !role && styles.primaryButtonDisabled,
                ]}
                disabled={!role}
                onPress={handleContinue}
            >
                <Text style={styles.primaryButtonText}>
                    Continuar
                </Text>
            </Pressable>
        </View>
    );
}
