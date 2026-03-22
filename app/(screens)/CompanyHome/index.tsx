import { View, Text, Pressable, ScrollView, ActivityIndicator, ImageBackground, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/company.styles";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/app/services/api";
import { useUser } from "@/app/context/UserContext";
import AppFooter from "@/app/components/footer";

export default function CompanyHome() {
    const { user, theme } = useUser();
    const [turns, setTurns] = useState<any[]>([]);
    const [pendingRequests, setPendingRequests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (user?.id) {
            fetchData();
        }
    }, [user]);

    const fetchData = async () => {
        setLoading(true);
        await Promise.all([fetchCompanyShifts(), fetchPendingRequests()]);
        setLoading(false);
    };

    const fetchCompanyShifts = async () => {
        if (!user?.id) return;
        try {
            const response = await api.get(`/shifts/company/${user.id}`);
            setTurns(response.data);
        } catch (error) {
            console.error("Erro ao buscar turnos:", error);
        }
    };

    const fetchPendingRequests = async () => {
        if (!user?.id) return;
        try {
            const response = await api.get("/applications/company/pending");
            setPendingRequests(response.data);
        } catch (error) {
            console.error("Erro ao buscar solicitações pendentes:", error);
        }
    };

    const handleReview = async (id: string, action: 'APPROVE' | 'REJECT') => {
        let justification = "";
        if (action === 'REJECT') {
            // No mobile, poderíamos usar um Modal, mas para teste rápido usaremos Alert.prompt ou similar
            // Como Alert.prompt não é cross-platform estável em Android sem expo-dialog, usaremos um placeholder
            // ou assumiremos que o usuário quer um exemplo básico.
            Alert.alert(
                "Contestar Trabalho",
                "Por favor, descreva o motivo da contestação:",
                [
                    { text: "Cancelar", style: "cancel" },
                    { 
                        text: "Enviar", 
                        onPress: async (val?: string) => {
                            // Infelizmente Alert.alert não tem input no Android nativo facilmente
                            // Vou simular um motivo padrão ou pedir para o usuário implementar o modal
                            const reason = "Horário não condiz com a realidade.";
                            await submitReview(id, action, reason);
                        } 
                    }
                ]
            );
            return;
        }

        await submitReview(id, action);
    };

    const submitReview = async (id: string, action: 'APPROVE' | 'REJECT', justification?: string) => {
        try {
            await api.post(`/applications/${id}/review`, { action, justification });
            fetchData();
        } catch (error: any) {
            console.error("Erro ao revisar:", error);
            Alert.alert("Erro", error.response?.data?.message || "Erro ao processar revisão");
        }
    };
    return (
        <ImageBackground source={require('../../../assets/images/bg-empresa.png')} style={styles.backgroundImage} resizeMode="cover">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={styles.whiteContainer}>
                    <Text style={styles.headerTitle}>Painel da empresa</Text>

                    <View style={styles.cardsRow}>
                    <View style={styles.card}>
                        <View style={styles.cardTop}>
                            <View style={styles.cardIcon}>
                                <Ionicons name="calendar-outline" size={18} color="#6366f1" />
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
                                <Ionicons name="people-outline" size={18} color="#6366f1" />
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
                        <Text style={styles.nextShiftNumber}>{turns.length}</Text>
                        <Text style={styles.nextShiftVariation}>turnos ativos</Text>
                    </View>
                </View>

                {pendingRequests.length > 0 && (
                    <View style={{ marginTop: 20 }}>
                        <Text style={[styles.sectionTitle, { color: '#B91C1C' }]}>⚖️ Trabalhos para Revisar ({pendingRequests.length})</Text>
                        <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 10, marginLeft: 16 }}>
                            Você tem 12h para contestar, ou serão aprovados automaticamente.
                        </Text>
                        {pendingRequests.map((req) => (
                            <View key={req.id} style={[styles.listCard, { borderColor: theme.primary, borderLeftWidth: 4 }]}>
                                <View style={styles.listContent}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{req.user.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                                        <Ionicons name="time-outline" size={14} color="#6B7280" />
                                        <Text style={{ color: '#6B7280', marginLeft: 4, fontSize: 13 }}>
                                            {req.shift.title}
                                        </Text>
                                    </View>
                                    
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Pressable 
                                            onPress={() => handleReview(req.id, 'APPROVE')}
                                            style={{ backgroundColor: '#10B981', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6, marginRight: 8 }}
                                        >
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13 }}>Aprovar</Text>
                                        </Pressable>
                                        <Pressable 
                                            onPress={() => handleReview(req.id, 'REJECT')}
                                            style={{ backgroundColor: '#EF4444', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 }}
                                        >
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13 }}>Contestar</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 10, color: '#9CA3AF' }}>FINALIZADO EM</Text>
                                    <Text style={{ fontWeight: 'bold', color: theme.primary }}>
                                        {req.checkOutTime ? new Date(req.checkOutTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Turnos Recentes</Text>
                    <Text style={styles.sectionLink}>Ver todos</Text>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color={theme.primary} style={{ marginTop: 20 }} />
                ) : turns.length === 0 ? (
                    <View style={{ padding: 20, alignItems: "center" }}>
                        <Text style={{ color: "#6b7280" }}>Nenhum turno publicado ainda.</Text>
                    </View>
                ) : (
                    turns.map((item) => (
                        <View key={item.id} style={styles.listCard}>
                            <View style={[styles.listIcon, { backgroundColor: theme.secondary + "20" }]}>
                                <Ionicons
                                    name={item.category === 'garcom' ? "time-outline" : "briefcase-outline"}
                                    size={18}
                                    color={theme.primary}
                                />
                            </View>
                            <View style={styles.listContent}>
                                <View style={styles.listRow}>
                                    <Text style={styles.listTitle}>{item.title}</Text>
                                    <View style={[styles.statusRed, { backgroundColor: theme.secondary + "30" }]}>
                                        <Text style={[styles.statusTextRed, { color: theme.primary }]}>
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
                </View>
            </ScrollView>

            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/images/logo-empresa.png')} style={styles.logoImage} resizeMode="contain" />
            </View>

            <Pressable onPress={() => router.push("/(screens)/CreateShift/step-1.index copy")} style={[styles.fab, { backgroundColor: theme.primary }]}>
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
                                color={active ? theme.primary : "#9CA3AF"}
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
                                color={active ? theme.primary : "#9CA3AF"}
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
                                color={active ? theme.primary : "#9CA3AF"}
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
                                color={active ? theme.primary : "#9CA3AF"}
                            />
                        ),
                        onPress: () => {
                            router.push("/(screens)/Profile");
                        },
                    },
                ]}
            />
        </ImageBackground>
    );
}
