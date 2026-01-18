import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { turns } from "../Home/mock";

export default function Details() {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();

    const item = turns.find((turn) => turn.id === id);

    if (!item) {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <AppHeader
                title="Detalhes do Turno"
                leftAction={{
                    icon: (
                        <Ionicons
                            name="arrow-back"
                            size={20}
                            color="#111827"
                        />
                    ),
                    onPress: () => router.back(),
                }}
                rightActions={[
                    {
                        icon: (
                            <Ionicons
                                name="share-social"
                                size={20}
                                color="#111827"
                            />
                        ),
                        onPress: () => {},
                    },
                ]}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ margin: 16, borderRadius: 16, overflow: "hidden" }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: "100%", height: 220 }}
                    />

                    <View
                        style={{
                            position: "absolute",
                            left: 12,
                            top: 12,
                            backgroundColor: "#2563EB",
                            paddingHorizontal: 10,
                            paddingVertical: 4,
                            borderRadius: 6,
                        }}
                    >
                        <Text style={{ color: "#FFF", fontSize: 12 }}>
                            DISPONÍVEL
                        </Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: "#111827" }}>
                        {item.title}
                    </Text>

                    <Text style={{ color: "#6B7280", marginTop: 4 }}>
                        Sábado, 26 de Outubro
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        margin: 16,
                        padding: 16,
                        backgroundColor: "#F9FAFB",
                        borderRadius: 12,
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 12, color: "#6B7280" }}>
                            VALOR LÍQUIDO
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                color: "#2563EB",
                                marginTop: 4,
                            }}
                        >
                            R$ 180,00
                        </Text>
                        <Text style={{ fontSize: 12, color: "#10B981" }}>
                            + Taxa de Serviço
                        </Text>
                    </View>

                    <View style={{ alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 12, color: "#6B7280" }}>
                            DURAÇÃO
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                color: "#111827",
                                marginTop: 4,
                            }}
                        >
                            06 Horas
                        </Text>
                        <Text style={{ fontSize: 12, color: "#6B7280" }}>
                            18:00 às 00:00
                        </Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Localização
                    </Text>

                    <View style={{ flexDirection: "row", marginTop: 8 }}>
                        <Ionicons
                            name="location-outline"
                            size={16}
                            color="#2563EB"
                        />
                        <Text style={{ marginLeft: 6, color: "#374151" }}>
                            Rua Augusta, 1234 - Consolação, São Paulo
                        </Text>
                    </View>

                    <View
                        style={{
                            height: 160,
                            backgroundColor: "#E5E7EB",
                            borderRadius: 12,
                            marginTop: 12,
                        }}
                    />
                </View>

                <View style={{ padding: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Descrição das Tarefas
                    </Text>

                    <Pressable
                        style={{
                            backgroundColor: "#2563EB",
                            borderRadius: 10,
                            paddingVertical: 14,
                            alignItems: "center",
                            marginTop: 16,
                        }}
                    >
                        <Text style={{ color: "#FFF", fontWeight: "600" }}>
                            Candidatar-se ao Turno →
                        </Text>
                    </Pressable>

                    <View style={{ marginTop: 16 }}>
                        <View style={{ flexDirection: "row", marginBottom: 8 }}>
                            <Ionicons
                                name="checkmark-circle"
                                size={16}
                                color="#2563EB"
                            />
                            <Text style={{ marginLeft: 8, color: "#374151" }}>
                                Organização e limpeza da praça de atendimento durante o turno.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Requisitos
                    </Text>

                    <View
                        style={{
                            backgroundColor: "#F9FAFB",
                            borderRadius: 12,
                            padding: 12,
                            marginTop: 12,
                        }}
                    >
                        <Text style={{ fontWeight: "500" }}>Uniforme</Text>
                        <Text style={{ color: "#6B7280", marginTop: 4 }}>
                            Camisa preta social, calça preta e sapato fechado.
                        </Text>
                    </View>

                    <View
                        style={{
                            backgroundColor: "#F9FAFB",
                            borderRadius: 12,
                            padding: 12,
                            marginTop: 12,
                        }}
                    >
                        <Text style={{ fontWeight: "500" }}>Experiência</Text>
                        <Text style={{ color: "#6B7280", marginTop: 4 }}>
                            Mínimo de 1 ano comprovado em restaurantes.
                        </Text>
                    </View>
                </View>

                <View style={{ padding: 16, marginBottom: 24 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Sobre a Empresa
                    </Text>

                    <View
                        style={{
                            backgroundColor: "#F9FAFB",
                            borderRadius: 12,
                            padding: 12,
                            marginTop: 12,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <View>
                            <Text style={{ fontWeight: "600" }}>
                                L’Entrecôte Paris
                            </Text>
                            <Text style={{ color: "#6B7280", marginTop: 4 }}>
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
            </ScrollView>
        </View>
    );
}
