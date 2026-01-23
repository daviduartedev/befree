import { View, Text, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/company.styles";
import AppHeader from "@/app/components/header";
import { router, useNavigation } from "expo-router";

export default function CompanyHome() {
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
                        <Text style={styles.cardValue}>12</Text>
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

                <View style={styles.listCard}>
                    <View style={[styles.listIcon, { backgroundColor: "#EEF2FF" }]}>
                        <Ionicons name="time-outline" size={18} color="#2563EB" />
                    </View>
                    <View style={styles.listContent}>
                        <View style={styles.listRow}>
                            <Text style={styles.listTitle}>Repositor de Estoque</Text>
                            <View style={styles.statusBlue}>
                                <Text style={styles.statusTextBlue}>ATIVO</Text>
                            </View>
                        </View>
                        <Text style={styles.listSub}>Hoje, 14:00 - 22:00</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
                </View>

                <View style={styles.listCard}>
                    <View style={[styles.listIcon, { backgroundColor: "#FFF7ED" }]}>
                        <Ionicons name="person-outline" size={18} color="#F97316" />
                    </View>
                    <View style={styles.listContent}>
                        <View style={styles.listRow}>
                            <Text style={styles.listTitle}>Operador de Caixa</Text>
                            <View style={styles.statusOrange}>
                                <Text style={styles.statusTextOrange}>PREENCHIDO</Text>
                            </View>
                        </View>
                        <Text style={styles.listSub}>Amanhã, 08:00 - 16:00</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
                </View>

                <View style={styles.listCard}>
                    <View style={[styles.listIcon, { backgroundColor: "#ECFDF5" }]}>
                        <Ionicons name="checkmark-outline" size={18} color="#10B981" />
                    </View>
                    <View style={styles.listContent}>
                        <View style={styles.listRow}>
                            <Text style={styles.listTitle}>Ajudante Geral</Text>
                            <View style={styles.statusGreen}>
                                <Text style={styles.statusTextGreen}>CONCLUÍDO</Text>
                            </View>
                        </View>
                        <Text style={styles.listSub}>Ontem, 09:00 - 18:00</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
                </View>

                <View style={styles.listCard}>
                    <View style={[styles.listIcon, { backgroundColor: "#EEF2FF" }]}>
                        <Ionicons name="car-outline" size={18} color="#2563EB" />
                    </View>
                    <View style={styles.listContent}>
                        <View style={styles.listRow}>
                            <Text style={styles.listTitle}>Motorista de Entrega</Text>
                            <View style={styles.statusBlue}>
                                <Text style={styles.statusTextBlue}>ATIVO</Text>
                            </View>
                        </View>
                        <Text style={styles.listSub}>24 Out, 10:00 - 19:00</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
                </View>
            </ScrollView>

            <Pressable onPress={() => router.push("/(screens)/CreateShift/step-1.index copy")} style={styles.fab}>
                <Ionicons name="add" size={26} color="#fff" />
            </Pressable>
        </View>
    );
}
