import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "../../../styles/myApplications.styles";
import AppHeader from "../../components/header";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import api from "../../services/api";
import { useUser } from "@/app/context/UserContext";

export default function MyApplications() {
    const router = useRouter();
    const { theme } = useUser();
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await api.get("/applications/me");
            setApplications(response.data);
        } catch (error) {
            console.error("Erro ao buscar candidaturas:", error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "APPROVED": return styles.status_APPROVED;
            case "REJECTED": return styles.status_REJECTED;
            default: return styles.status_PENDING;
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "APPROVED": return "APROVADO";
            case "REJECTED": return "RECUSADO";
            default: return "PENDENTE";
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <AppHeader
                title="Minhas Candidaturas"
                leftAction={{
                    icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                    onPress: () => router.back(),
                }}
            />

            {loading ? (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color={theme.primary} />
                </View>
            ) : (
                <FlatList
                    data={applications}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    ListEmptyComponent={
                        <View style={{ alignItems: "center", marginTop: 50 }}>
                            <Text style={{ color: "#6B7280" }}>Você ainda não se candidatou a nenhum turno.</Text>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => router.push({
                                pathname: "/(screens)/Details/[id]",
                                params: { id: item.shift.id }
                            })}
                        >
                            <Image
                                source={{ uri: item.shift.imageUrl || "https://images.unsplash.com/photo-1516788875874-c5912cae7b43" }}
                                style={styles.image}
                            />
                            <View style={styles.content}>
                                <Text style={styles.title}>{item.shift.title}</Text>
                                <Text style={styles.company}>{item.shift.company?.name || "Empresa"}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                    <Ionicons name="location-outline" size={12} color="#6B7280" />
                                    <Text style={{ fontSize: 12, color: '#6B7280', marginLeft: 2 }}>
                                        {item.shift.address || "Localização"}
                                    </Text>
                                </View>

                                <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
                                    <Text style={[styles.statusText, { color: getStatusStyle(item.status).color }]}>
                                        {getStatusLabel(item.status)}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.dateInfo}>
                                <Text style={styles.date}>
                                    {new Date(item.shift.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}
                                </Text>
                                <Text style={[styles.value, { color: theme.primary }]}>R$ {item.shift.value}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
