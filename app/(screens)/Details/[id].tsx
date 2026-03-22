import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View, ActivityIndicator, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../../../styles/id.styles";
import { useEffect, useState } from "react";
import ConfirmApplication from "@/app/components/bottomSheet";
import RequirementsCard from "@/app/components/RequirementsCard";
import api from "@/app/services/api";
import { getCurrentLocation } from "@/app/services/locationService";

import { useUser } from "@/app/context/UserContext";

export default function Details() {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const { theme } = useUser();
    const [showConfirm, setShowConfirm] = useState(false);
    const [item, setItem] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [companyReviews, setCompanyReviews] = useState<{ average: number, total: number }>({ average: 0, total: 0 });
    const [myApplication, setMyApplication] = useState<any>(null);
    const [checkingIn, setCheckingIn] = useState(false);

    useEffect(() => {
        if (id) {
            fetchShift();
            fetchMyApplication();
        }
    }, [id]);

    const fetchShift = async () => {
        try {
            const response = await api.get(`/shifts/${id}`);
            setItem(response.data);
            if (response.data.company?.userId) {
                fetchCompanyReviews(response.data.company.userId);
            }
        } catch (error) {
            console.error("Erro ao buscar detalhes do turno:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMyApplication = async () => {
        try {
            const response = await api.get('/applications/me');
            const app = response.data.find((a: any) => a.shiftId === id);
            setMyApplication(app);
        } catch (error) {
            console.error("Erro ao buscar minha candidatura:", error);
        }
    };

    const fetchCompanyReviews = async (companyUserId: string) => {
        try {
            const response = await api.get(`/reviews/user/${companyUserId}`);
            setCompanyReviews({
                average: response.data.average,
                total: response.data.total
            });
        } catch (error) {
            console.error("Erro ao buscar avaliações da empresa:", error);
        }
    };

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: "center", backgroundColor: theme.background }]}>
                <ActivityIndicator size="large" color={theme.primary} />
            </View>
        );
    }

    if (!item) {
        return (
            <View style={[styles.container, { justifyContent: "center", alignItems: "center", backgroundColor: theme.background }]}>
                <Text>Turno não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <AppHeader
                title="Detalhes do Turno"
                leftAction={{
                    icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                    onPress: () => router.back(),
                }}
                rightActions={[
                    {
                        icon: <Ionicons name="share-social" size={20} color="#111827" />,
                        onPress: () => { },
                    },
                ]}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageCard}>
                    <Image
                        source={{ uri: item.imageUrl || "https://images.unsplash.com/photo-1516788875874-c5912cae7b43" }}
                        style={styles.image}
                    />

                    <View style={styles.imageOverlay}>
                        <View style={[styles.badge, { backgroundColor: theme.primary }]}>
                            <Text style={styles.badgeText}>DISPONÍVEL</Text>
                        </View>

                        <Text style={styles.title}>{item.title}</Text>

                        <View style={styles.dateRow}>
                            <Ionicons name="calendar-outline" size={14} color="#E5E7EB" />
                            <Text style={styles.dateText}>
                                {new Date(item.date).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoRow}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoLabel}>VALOR LÍQUIDO</Text>
                        <Text style={[styles.infoValuePrimary, { color: theme.primary }]}>{`R$ ${item.value},00`}</Text>
                        <Text style={styles.infoSubPositive}>+ Taxa de Serviço</Text>
                    </View>

                    <View style={styles.infoCard}>
                        <Text style={styles.infoLabel}>DURAÇÃO</Text>
                        <Text style={styles.infoValue}>04 Horas</Text>
                        <Text style={styles.infoSub}>{`${item.startTime} às ${item.endTime}`}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Localização</Text>

                    <View style={styles.locationRow}>
                        <Ionicons name="location-outline" size={16} color={theme.primary} />
                        <Text style={styles.locationText}>
                            {item.address || "Endereço não informado"}
                        </Text>
                    </View>

                    <MapView
                        style={{ height: 160, marginTop: 10 }}
                        initialRegion={{
                            latitude: item.latitude || -23.561684,
                            longitude: item.longitude || -46.656139,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: item.latitude || -23.561684,
                                longitude: item.longitude || -46.656139,
                            }}
                        />
                    </MapView>

                </View>

                <View style={styles.section}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
                        <Text style={styles.sectionTitle}>Descrição das Tarefas</Text>
                        {myApplication && myApplication.status !== 'CANCELLED' && (
                            <Pressable
                                onPress={() => {
                                    const isLate = myApplication.status === 'APPROVED' && (() => {
                                        const shiftDate = new Date(item.date);
                                        const hours = (shiftDate.getTime() - new Date().getTime()) / (1000 * 60 * 60);
                                        return hours < 24;
                                    })();

                                    Alert.alert(
                                        "Confirmar Cancelamento",
                                        isLate
                                            ? "⚠️ ATENÇÃO: Cancelar um turno aprovado com menos de 24h resultará em um BLOQUEIO de 24h na plataforma. Deseja continuar?"
                                            : "Tem certeza que deseja cancelar sua candidatura?",
                                        [
                                            { text: "Sair", style: "cancel" },
                                            {
                                                text: "Sim, Cancelar",
                                                style: "destructive",
                                                onPress: async () => {
                                                    try {
                                                        await api.post(`/applications/${myApplication.id}/cancel`);
                                                        Alert.alert("Cancelado", "Sua candidatura foi cancelada.");
                                                        fetchMyApplication();
                                                    } catch (error: any) {
                                                        Alert.alert("Erro", error.response?.data?.message || "Erro ao cancelar");
                                                    }
                                                }
                                            }
                                        ]
                                    );
                                }}
                            >
                                <Text style={{ color: '#EF4444', fontWeight: 'bold' }}>Cancelar ✕</Text>
                            </Pressable>
                        )}
                    </View>

                    {!myApplication && (
                        <Pressable
                            style={[styles.primaryButton, { backgroundColor: theme.primary }]}
                            onPress={async () => {
                                try {
                                    await api.post('/applications', { shiftId: id });
                                    Alert.alert("Sucesso", "Candidatura enviada!");
                                    fetchMyApplication();
                                } catch (error: any) {
                                    Alert.alert("Erro", error.response?.data?.message || "Não foi possível se candidatar");
                                }
                            }}
                        >
                            <Text style={styles.primaryButtonText}>
                                Candidatar-se ao Turno →
                            </Text>
                        </Pressable>
                    )}

                    {myApplication?.status === 'CANCELLED' && (
                        <View style={{ backgroundColor: '#FEE2E2', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="close-circle" size={24} color="#EF4444" />
                            <Text style={{ marginTop: 5, color: '#991B1B', fontWeight: '600' }}>Candidatura Cancelada</Text>
                        </View>
                    )}

                    {myApplication?.status === 'APPROVED' && (
                        <Pressable
                            style={[styles.primaryButton, { backgroundColor: '#10B981' }]}
                            onPress={async () => {
                                setCheckingIn(true);
                                try {
                                    const coords = await getCurrentLocation().catch(() => null);
                                    await api.post(`/applications/${myApplication.id}/check-in`, coords || {});
                                    Alert.alert("Sucesso", "Trabalho iniciado! Bom expediente. 🚀");
                                    fetchMyApplication();
                                } catch (error: any) {
                                    Alert.alert("Erro", error.response?.data?.message || "Erro ao iniciar trabalho");
                                } finally {
                                    setCheckingIn(false);
                                }
                            }}
                            disabled={checkingIn}
                        >
                            <Text style={styles.primaryButtonText}>
                                {checkingIn ? "Iniciando..." : "Iniciar Trabalho 🟢"}
                            </Text>
                        </Pressable>
                    )}

                    {myApplication?.status === 'IN_PROGRESS' && (
                        <Pressable
                            style={[styles.primaryButton, { backgroundColor: '#EF4444' }]}
                            onPress={async () => {
                                try {
                                    await api.post(`/applications/${myApplication.id}/check-out`);
                                    Alert.alert("Finalizado", "Trabalho concluído! Agora a empresa tem 12h para revisar.");
                                    fetchMyApplication();
                                } catch (error: any) {
                                    Alert.alert("Erro", error.response?.data?.message || "Erro ao finalizar trabalho");
                                }
                            }}
                        >
                            <Text style={styles.primaryButtonText}>
                                Finalizar Trabalho 🛑
                            </Text>
                        </Pressable>
                    )}

                    {myApplication?.status === 'PENDING_REVIEW' && (
                        <View style={{ backgroundColor: '#DBEAFE', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="time-outline" size={24} color="#2563EB" />
                            <Text style={{ marginTop: 8, color: '#1E40AF', fontWeight: '700', textAlign: 'center' }}>
                                Trabalho em Revisão ⏳
                            </Text>
                            <Text style={{ color: '#1E40AF', textAlign: 'center', fontSize: 13, marginTop: 4 }}>
                                A empresa está revisando seu turno.{"\n"}Aprovação automática em até 12h.
                            </Text>
                        </View>
                    )}

                    {myApplication?.status === 'REJECTED' && (
                        <View style={{ backgroundColor: '#FEE2E2', padding: 15, borderRadius: 8, alignItems: 'center' }}>
                            <Ionicons name="alert-circle-outline" size={24} color="#B91C1C" />
                            <Text style={{ marginTop: 5, color: '#991B1B', fontWeight: '700' }}>Trabalho Contestado</Text>
                            <Text style={{ color: '#991B1B', textAlign: 'center', fontSize: 13, marginTop: 4 }}>
                                Motivo: {myApplication.rejectionJustification || "Não informado"}
                            </Text>
                        </View>
                    )}

                    {myApplication?.status === 'COMPLETED' && (
                        <View style={{ backgroundColor: '#D1FAE5', padding: 15, borderRadius: 8, alignItems: 'center' }}>
                            <Ionicons name="checkmark-done-circle" size={24} color="#059669" />
                            <Text style={{ marginTop: 5, color: '#065F46', fontWeight: '700' }}>Trabalho Concluído ✅</Text>
                            <Text style={{ fontSize: 12, color: '#065F46', marginTop: 2 }}>Pagamento confirmado e processado.</Text>
                        </View>
                    )}

                    <View style={styles.taskItem}>
                        <Ionicons name="checkmark-circle" size={16} color={theme.primary} />
                        <Text style={styles.taskText}>
                            {item.description || "Nenhuma descrição detalhada fornecida."}
                        </Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <RequirementsCard requirements={item.requirements} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sobre a Empresa</Text>

                    <View style={styles.companyRow}>
                        <View>
                            <Text style={styles.companyName}>
                                {item.company?.name || "Empresa Parceira"}
                            </Text>
                            <Text style={styles.companyRating}>
                                ⭐ {companyReviews.average > 0 ? companyReviews.average : "0.0"} ({companyReviews.total} avaliações)
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color="#9CA3AF"
                        />
                    </View>
                </View>
                {showConfirm && (
                    <ConfirmApplication
                        onCancel={() => setShowConfirm(false)}
                        onConfirm={async () => {
                            try {
                                await api.post('/applications', { shiftId: item.id });
                                Alert.alert("Sucesso", "Sua candidatura foi enviada com sucesso!");
                                setShowConfirm(false);
                            } catch (error: any) {
                                const message = error.response?.data?.message || "Não foi possível enviar sua candidatura.";
                                Alert.alert("Erro", message);
                                setShowConfirm(false);
                            }
                        }}
                    />
                )}

            </ScrollView>
        </View>
    );
}
