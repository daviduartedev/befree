import { View, Text, Pressable, ScrollView, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/company.styles";
import AppHeader from "@/app/components/header";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/app/services/api";
import { useUser } from "@/app/context/UserContext";
import AppFooter from "@/app/components/footer";

export default function CompanyHome() {
    const { user } = useUser();
    const [turns, setTurns] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.id) {
            fetchCompanyShifts();
        }
    }, [user]);

    const fetchCompanyShifts = async () => {
        if (!user?.id) {
            console.log("fetchCompanyShifts: No user.id found");
            return;
        }
        try {
            console.log("Buscando turnos para a empresa:", user.id);
            const response = await api.get(`/shifts/company/${user.id}`);
            console.log("Turnos encontrados:", response.data.length);
            setTurns(response.data);
        } catch (error) {
            console.error("Erro ao buscar turnos da empresa:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <View style={styles.container}>
            <AppHeader title="Painel da Empresa" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardsRow}>
                    <View style={styles.card}>
                        <View style={styles.cardTop}>
                            <View style={styles.cardIcon}>
                                <Ionicons name="calendar-outline" size={18} color="#2563EB" />
                            </View>
                            <View style={styles.badgeGreen}>
                                <Text style={styles.badgeTextGreen}>+2%</Text>
                            </View>
                        </View>
                        <Text style={styles.cardLabel}>Turnos Abertos</Text>
                        <Text style={styles.cardValue}>
                            {loading ? "..." : turns?.length || 0}
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardTop}>
                            <View style={styles.cardIcon}>
                                <Ionicons name="people-outline" size={18} color="#2563EB" />
                            </View>
                            <View style={styles.badgeGreen}>
                                <Text style={styles.badgeTextGreen}>+15%</Text>
                            </View>
                        </View>
                        <Text style={styles.cardLabel}>Candidatos</Text>
                        <Text style={styles.cardValue}>45</Text>
                    </View>
                </View>

                <View style={styles.nextShift}>
                    <View>
                        <Text style={styles.nextShiftLabel}>AGENDADOS</Text>
                        <Text style={styles.nextShiftTitle}>Próximos Turnos</Text>
                    </View>

                    <View style={styles.nextShiftRight}>
                        <Text style={styles.nextShiftNumber}>08</Text>
                        <Text style={styles.nextShiftVariation}>-5% vs. ontem</Text>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Turnos Recentes</Text>
                    <Text style={styles.sectionLink}>Ver todos</Text>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#2563EB" style={{ marginTop: 20 }} />
                ) : turns.length === 0 ? (
                    <View style={{ padding: 20, alignItems: "center" }}>
                        <Text style={{ color: "#6b7280" }}>Nenhum turno publicado ainda.</Text>
                    </View>
                ) : (
                    turns.map((item) => (
                        <View key={item.id} style={styles.listCard}>
                            <View style={[styles.listIcon, { backgroundColor: "#EEF2FF" }]}>
                                <Ionicons
                                    name={item.category === 'garcom' ? "time-outline" : "briefcase-outline"}
                                    size={18}
                                    color="#2563EB"
                                />
                            </View>
                            <View style={styles.listContent}>
                                <View style={styles.listRow}>
                                    <Text style={styles.listTitle}>{item.title}</Text>
                                    <View style={styles.statusBlue}>
                                        <Text style={styles.statusTextBlue}>
                                            {item.status || "ATIVO"}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.listSub}>
                                    {new Date(item.date).toLocaleDateString('pt-BR')} • {item.startTime} - {item.endTime}
                                </Text>
                            </View>
                            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
                        </View>
                    ))
                )}
            </ScrollView>

            <Pressable onPress={() => router.push("/(screens)/CreateShift/step-1.index copy")} style={styles.fab}>
                <Ionicons name="add" size={26} color="#fff" />
            </Pressable>
            <AppFooter
                activeKey="explore"
                items={[
                    {
                        key: "explore",
                        label: "Home",
                        icon: (active) => (
                            <Ionicons
                                name="home-outline"
                                size={20}
                                color={active ? "#2563EB" : "#9CA3AF"}
                            />
                        ),
                        onPress: () => {
                            router.push("/(screens)/CompanyHome");
                        },

                    },
                    {
                        key: "turns",
                        label: "Turnos",
                        icon: (active) => (
                            <Ionicons
                                name="list-outline"
                                size={20}
                                color={active ? "#2563EB" : "#9CA3AF"}
                            />
                        ),
                        onPress: () => { },
                    },
                    {
                        key: "alerts",
                        label: "Alertas",
                        icon: (active) => (
                            <Ionicons
                                name="notifications-outline"
                                size={20}
                                color={active ? "#2563EB" : "#9CA3AF"}
                            />
                        ),
                        onPress: () => { },
                    },
                    {
                        key: "profile",
                        label: "Perfil",
                        icon: (active) => (
                            <Ionicons
                                name="person-outline"
                                size={20}
                                color={active ? "#2563EB" : "#9CA3AF"}
                            />
                        ),
                        onPress: () => {
                            router.push("/(screens)/Profile");
                        },
                    },
                ]}
            />
        </View>
    );
}
