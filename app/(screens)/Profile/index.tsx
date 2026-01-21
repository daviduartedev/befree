import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../../../styles/profile.styles";
import { useRouter } from "expo-router";
import AppFooter from "../../components/footer";

import { useUser } from "@/app/context/UserContext";

export default function Profile() {
    const router = useRouter();
    const { user } = useUser();

    if (!user) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Carregando perfil...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="settings-outline" size={20} color="#111827" />
                <Text style={styles.headerTitle}>Meu Perfil</Text>
                <Ionicons name="share-social-outline" size={20} color="#111827" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileCard}>
                    <View style={styles.avatarWrapper}>
                        <View style={styles.avatar} />
                        {/* TODO: Use user.photoUrl if available */}
                        <View style={styles.checkBadge}>
                            <Ionicons name="checkmark" size={12} color="#FFF" />
                        </View>
                    </View>

                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.subtitle}>
                        {/* Fallback to default if city is missing */}
                        {user.skills && user.skills.length > 0 ? user.skills[0] : "Profissional"} • {user.city || "Localização não definida"}
                    </Text>
                    <Text style={styles.memberSince}>
                        Membro desde {new Date(user.createdAt || Date.now()).toLocaleDateString()}
                    </Text>
                </View>

                {/* ... existing rating card ... */}

                <View style={styles.ratingCard}>
                    <View>
                        <Text style={styles.ratingValue}>4.9</Text>
                        <View style={styles.starsRow}>
                            {/* ... unchanged ... */}
                        </View>
                        <Text style={styles.reviews}>124 avaliações</Text>
                    </View>

                    <View style={styles.ratingBars}>
                        <View style={styles.ratingRow}>
                            <Text style={styles.ratingLabel}>5</Text>
                            <View style={styles.ratingTrack}>
                                <View style={[styles.ratingFill, { width: "90%" }]} />
                            </View>
                            <Text style={styles.ratingPercent}>90%</Text>
                        </View>

                        <View style={styles.ratingRow}>
                            <Text style={styles.ratingLabel}>4</Text>
                            <View style={styles.ratingTrack}>
                                <View style={[styles.ratingFill, { width: "7%" }]} />
                            </View>
                            <Text style={styles.ratingPercent}>7%</Text>
                        </View>

                        <View style={styles.ratingRow}>
                            <Text style={styles.ratingLabel}>3</Text>
                            <View style={styles.ratingTrack}>
                                <View style={[styles.ratingFill, { width: "3%" }]} />
                            </View>
                            <Text style={styles.ratingPercent}>3%</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Ganhos da Semana</Text>
                        <Text style={styles.link}>Ver Extrato</Text>
                    </View>

                    <Text style={styles.earningsLabel}>Faturamento Estimado</Text>
                    <View style={styles.earningsRow}>
                        <Text style={styles.earningsValue}>R$ 1.250,00</Text>
                        <Text style={styles.earningsGrowth}>↗ 15%</Text>
                    </View>

                    <View style={styles.chart}>
                        <View style={styles.chartBarLight} />
                        <View style={styles.chartBar} />
                        <View style={styles.chartBarLight} />
                        <View style={styles.chartBarActive} />
                        <View style={styles.chartBarLight} />
                        <View style={styles.chartBarSmall} />
                        <View style={styles.chartBarLight} />
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

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Habilidades Validadas</Text>

                    <View style={styles.skillsRow}>
                        {user.skills && user.skills.length > 0 ? (
                            user.skills.map((skill) => (
                                <View key={skill} style={styles.skillBadge}>
                                    <Ionicons
                                        name="checkmark-circle"
                                        size={14}
                                        color="#2563EB"
                                    />
                                    <Text style={styles.skillText}>{skill}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={{ color: '#6B7280' }}>Nenhuma habilidade cadastrada.</Text>
                        )}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Selas de Conquista</Text>

                    <View style={styles.badgesRow}>
                        <View style={styles.badgeItemActive}>
                            <Ionicons name="trophy" size={20} color="#F59E0B" />
                            <Text style={styles.badgeText}>Top 1% Mensal</Text>
                        </View>

                        <View style={styles.badgeItemActive}>
                            <Ionicons name="time" size={20} color="#2563EB" />
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
            </ScrollView>

            <AppFooter
                activeKey="profile"
                items={[
                    {
                        key: "explore",
                        label: "Explorar",
                        icon: (active) => (
                            <Ionicons
                                name="search"
                                size={20}
                                color={active ? "#2563EB" : "#9CA3AF"}
                            />
                        ),
                        onPress: () => {
                            router.push("/(screens)/Home");
                        },

                    },
                    {
                        key: "turns",
                        label: "Meus Turnos",
                        icon: (active) => (
                            <Ionicons
                                name="calendar-outline"
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
                        onPress: () => { },
                    },
                ]}
            />
        </View>
    );
}
