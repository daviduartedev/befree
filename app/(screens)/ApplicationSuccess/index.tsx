import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../../styles/applicationSuccess.styles";

export default function ApplicationSuccess() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Pressable style={styles.close} onPress={() => router.back()}>
                <Ionicons name="close" size={22} color="#111827" />
            </Pressable>

            <View style={styles.circleWrapper}>
                <View style={styles.dashedCircle} />
                <View style={styles.mainCircle}>
                    <Ionicons name="checkmark" size={28} color="#FFFFFF" />
                </View>
            </View>

            <Text style={styles.title}>
                Tudo pronto!{"\n"}Sua candidatura foi enviada
            </Text>

            <Text style={styles.subtitle}>
                A empresa analisará seu perfil e você será notificado assim que houver uma resposta.
            </Text>

            <View style={styles.card}>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardLabel}>RESUMO DO TURNO</Text>
                    <Text style={styles.cardTitle}>Supermercado Silva</Text>

                    <View style={styles.cardRow}>
                        <Ionicons name="calendar-outline" size={14} color="#6B7280" />
                        <Text style={styles.cardText}>15 de Outubro, 2023</Text>
                    </View>

                    <View style={styles.cardRow}>
                        <Ionicons name="time-outline" size={14} color="#6B7280" />
                        <Text style={styles.cardText}>
                            08:00 - 17:00 (Intervalo 1h)
                        </Text>
                    </View>
                </View>

                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" }}
                    style={styles.cardImage}
                />
            </View>

            <Pressable style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Ver Minha Agenda</Text>
            </Pressable>

            <Pressable
                style={styles.secondaryButton}
                onPress={() => router.push("/(screens)/Home")}
            >
                <Text style={styles.secondaryButtonText}>Voltar para a Busca</Text>
            </Pressable>
        </View>
    );
}
