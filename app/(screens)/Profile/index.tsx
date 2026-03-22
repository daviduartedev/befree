import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../../../styles/profile.styles";
import { useRouter } from "expo-router";
import AppFooter from "../../components/footer";
import api from "@/app/services/api";

import { useUser } from "@/app/context/UserContext";
import { removeToken } from "@/app/authStorage";

export default function Profile() {
    const router = useRouter();
    const { user, theme } = useUser();
    const [reviewsData, setReviewsData] = useState<{ reviews: any[], average: number, total: number }>({ reviews: [], average: 0, total: 0 });
    const [loadingReviews, setLoadingReviews] = useState(true);

    useEffect(() => {
        if (user?.id) {
            fetchReviews();
        }
    }, [user?.id]);

    const fetchReviews = async () => {
        try {
            const response = await api.get(`/reviews/user/${user?.id}`);
            setReviewsData(response.data);
        } catch (error) {
            console.error("Erro ao buscar avaliações:", error);
        } finally {
            setLoadingReviews(false);
        }
    };

    const logout = async () => {
        await removeToken();
        router.replace("/(screens)/Login");
    };
    if (!user) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ fontFamily: 'SF Pro Text' }}>Carregando perfil...</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Ionicons name="settings-outline" size={20} color="#111827" />
                <Text style={styles.headerTitle}>Meu Perfil</Text>
                <Ionicons name="share-social-outline" size={20} color="#111827" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileCard}>
                    <View style={styles.avatarWrapper}>
                        <View style={[styles.avatar, { borderColor: theme.primary }]} />
                        {/* TODO: Use user.photoUrl if available */}
                        <View style={[styles.checkBadge, { backgroundColor: theme.primary }]}>
                            <Ionicons name="checkmark" size={12} color="#FFF" />
                        </View>
                    </View>

                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.subtitle}>
                        {/* Fallback to default if city is missing */}
                        {user.skills && user.skills.length > 0 ? user.skills[0] : (user.role === 'COMPANY' ? "Empresa" : "Profissional")} • {user.city || "Localização não definida"}
                    </Text>
                    <Text style={styles.memberSince}>
                        Membro desde {new Date(user.createdAt || Date.now()).toLocaleDateString()}
                    </Text>
                </View>

                {/* Rating Card */}
                <View style={styles.ratingCard}>
                    <View>
                        <Text style={styles.ratingValue}>{reviewsData.average > 0 ? reviewsData.average : "0.0"}</Text>
                        <View style={styles.starsRow}>
                             {[1, 2, 3, 4, 5].map((s) => (
                                <Ionicons 
                                    key={s} 
                                    name={s <= Math.round(reviewsData.average) ? "star" : "star-outline"} 
                                    size={14} 
                                    color="#F59E0B" 
                                />
                            ))}
                        </View>
                        <Text style={styles.reviews}>{reviewsData.total} avaliações</Text>
                    </View>

                    <View style={styles.ratingBars}>
                        {[5, 4, 3, 2, 1].map((label) => {
                            const count = reviewsData.reviews.filter(r => r.rating === label).length;
                            const percent = reviewsData.total > 0 ? Math.round((count / reviewsData.total) * 100) : 0;
                            return (
                                <View key={label} style={styles.ratingRow}>
                                    <Text style={styles.ratingLabel}>{label}</Text>
                                    <View style={styles.ratingTrack}>
                                        <View style={[styles.ratingFill, { width: `${percent}%`, backgroundColor: theme.primary }]} />
                                    </View>
                                    <Text style={styles.ratingPercent}>{percent}%</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{user.role === 'COMPANY' ? "Investimento" : "Ganhos da Semana"}</Text>
                        <Text style={[styles.link, { color: theme.primary }]}>Ver Extrato</Text>
                    </View>

                    <Text style={styles.earningsLabel}>{user.role === 'COMPANY' ? "Total Investido" : "Faturamento Estimado"}</Text>
                    <View style={styles.earningsRow}>
                        <Text style={styles.earningsValue}>{user.role === 'COMPANY' ? "R$ 4.850,00" : "R$ 1.250,00"}</Text>
                        <Text style={styles.earningsGrowth}>↗ 15%</Text>
                    </View>

                    <View style={styles.chart}>
                        <View style={[styles.chartBarLight, { backgroundColor: theme.primary + "20" }]} />
                        <View style={[styles.chartBar, { backgroundColor: theme.primary }]} />
                        <View style={[styles.chartBarLight, { backgroundColor: theme.primary + "20" }]} />
                        <View style={[styles.chartBarActive, { backgroundColor: theme.primary }]} />
                        <View style={[styles.chartBarLight, { backgroundColor: theme.primary + "20" }]} />
                        <View style={[styles.chartBarSmall, { backgroundColor: theme.primary + "20" }]} />
                        <View style={[styles.chartBarLight, { backgroundColor: theme.primary + "20" }]} />
                    </View>

                    <View style={styles.chartLabels}>
                        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map(
                            (day) => (
                                <Text key={day} style={styles.chartLabel}>
                                    {day}
                                </Text>
                            )
                        )}
                    </View>
                </View>

                {user.role === 'WORKER' && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Habilidades Validadas</Text>

                        <View style={styles.skillsRow}>
                            {user.skills && user.skills.length > 0 ? (
                                user.skills.map((skill) => (
                                    <View key={skill} style={[styles.skillBadge, { backgroundColor: theme.primary + "15" }]}>
                                        <Ionicons
                                            name="checkmark-circle"
                                            size={14}
                                            color={theme.primary}
                                        />
                                        <Text style={[styles.skillText, { color: theme.primary }]}>{skill}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={{ color: '#6B7280' }}>Nenhuma habilidade cadastrada.</Text>
                            )}
                        </View>
                    </View>
                )}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Selos de Conquista</Text>

                    <View style={styles.badgesRow}>
                        <View style={styles.badgeItemActive}>
                            <Ionicons name="trophy" size={20} color="#F59E0B" />
                            <Text style={styles.badgeText}>Top 1% Mensal</Text>
                        </View>

                        <View style={styles.badgeItemActive}>
                            <Ionicons name="time" size={20} color={theme.primary} />
                            <Text style={styles.badgeText}>Sempre Pontual</Text>
                        </View>

                        <View style={styles.badgeItemActive}>
                            <Ionicons name="thumbs-up" size={20} color="#7C3AED" />
                            <Text style={styles.badgeText}>Favorito</Text>
                        </View>

                        <View style={styles.badgeItemLocked}>
                            <Ionicons name="lock-closed" size={20} color="#9CA3AF" />
                            <Text style={styles.badgeTextDisabled}>
                                Veterano
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 20 }}>
                    <Pressable
                        onPress={logout}
                        style={{ backgroundColor: theme.primary, padding: 12, borderRadius: 8 }}
                    >
                        <Text style={{ color: "#fff", alignSelf: "center", fontWeight: '600' }}>Sair da Conta</Text>
                    </Pressable>
                </View>
            </ScrollView>

            <AppFooter
                activeKey="profile"
                items={[
                    {
                        key: "explore",
                        label: user.role === "COMPANY" ? "Home" : "Explorar",
                        icon: (active) => (
                            <Ionicons
                                name={user.role === "COMPANY" ? "home-outline" : "search-outline"}
                                size={20}
                                color={active ? theme.primary : "#9CA3AF"}
                            />
                        ),
                        onPress: () => {
                            if (user.role === "COMPANY") {
                                router.push("/(screens)/CompanyHome");
                            } else {
                                router.push("/(screens)/Home");
                            }
                        },

                    },
                    {
                        key: "turns",
                        label: user.role === "COMPANY" ? "Turnos" : "Meus Turnos",
                        icon: (active) => (
                            <Ionicons
                                name={user.role === "COMPANY" ? "list-outline" : "calendar-outline"}
                                size={20}
                                color={active ? theme.primary : "#9CA3AF"}
                            />
                        ),
                        onPress: () => {
                             if (user.role === "WORKER") {
                                router.push("/(screens)/Worker/MyApplications");
                            }
                        },
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
        </View>
    );
}
