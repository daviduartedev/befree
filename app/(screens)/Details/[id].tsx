import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../../../styles/id.styles";
import { turns } from "../Home/mock";
import { useState } from "react";
import ConfirmApplication from "@/app/components/bottomSheet";
import RequirementsCard from "@/app/components/RequirementsCard";


export default function Details() {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const [showConfirm, setShowConfirm] = useState(false);

    const item = turns.find((turn) => turn.id === id);

    if (!item) {
        return null;
    }

    return (
        <View style={styles.container}>
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
                    <Image source={{ uri: item.image }} style={styles.image} />

                    <View style={styles.imageOverlay}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>DISPONÍVEL</Text>
                        </View>

                        <Text style={styles.title}>{item.title}</Text>

                        <View style={styles.dateRow}>
                            <Ionicons name="calendar-outline" size={14} color="#E5E7EB" />
                            <Text style={styles.dateText}>
                                Sábado, 26 de Outubro
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoRow}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoLabel}>VALOR LÍQUIDO</Text>
                        <Text style={styles.infoValuePrimary}>R$ 180,00</Text>
                        <Text style={styles.infoSubPositive}>+ Taxa de Serviço</Text>
                    </View>

                    <View style={styles.infoCard}>
                        <Text style={styles.infoLabel}>DURAÇÃO</Text>
                        <Text style={styles.infoValue}>06 Horas</Text>
                        <Text style={styles.infoSub}>18:00 às 00:00</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Localização</Text>

                    <View style={styles.locationRow}>
                        <Ionicons name="location-outline" size={16} color="#2563EB" />
                        <Text style={styles.locationText}>
                            Rua Augusta, 1234 - Consolação, São Paulo
                        </Text>
                    </View>

                    <MapView
                        style={{ height: 160, marginTop: 10 }}
                        initialRegion={{
                            latitude: -23.561684,
                            longitude: -46.656139,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: -23.561684,
                                longitude: -46.656139,
                            }}
                        />
                    </MapView>

                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Descrição das Tarefas</Text>

                    <Pressable
                        style={styles.primaryButton}
                        onPress={() => setShowConfirm(true)}
                    >
                        <Text style={styles.primaryButtonText}>
                            Candidatar-se ao Turno →
                        </Text>
                    </Pressable>
                    <View style={styles.taskItem}>
                        <Ionicons name="checkmark-circle" size={16} color="#2563EB" />
                        <Text style={styles.taskText}>
                            Organização e limpeza da praça de atendimento durante o turno.
                        </Text>
                    </View>
                </View>
                <View style={styles.section}>


                    <RequirementsCard />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sobre a Empresa</Text>

                    <View style={styles.companyRow}>
                        <View>
                            <Text style={styles.companyName}>
                                L’Entrecôte Paris
                            </Text>
                            <Text style={styles.companyRating}>
                                ⭐ 4.9 (128 avaliações)
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
                        onConfirm={() => {
                            setShowConfirm(false);
                        }}
                    />
                )}

            </ScrollView>
        </View>
    );
}
