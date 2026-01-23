import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    Text,
    View,
    ActivityIndicator,
} from "react-native";
import { styles } from "../../../styles/home.styles";
import AppFooter from "../../components/footer";
import AppHeader from "../../components/header";
import { categories } from "./mock";
import api from "@/app/services/api";

import { useUser } from "@/app/context/UserContext";

export default function Home() {
    const router = useRouter();
    const { user } = useUser();
    const [activeCategory, setActiveCategory] = useState("all");
    const [turns, setTurns] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchShifts();
    }, []);

    const fetchShifts = async () => {
        try {
            const response = await api.get("/shifts");
            setTurns(response.data);
        } catch (error) {
            console.error("Erro ao buscar turnos:", error);
        } finally {
            setLoading(false);
        }
    };

    const data =
        activeCategory === "all"
            ? turns
            : turns.filter((item) => item.category === activeCategory);

    return (
        <View style={styles.container}>
            <AppHeader
                title="Explorar Turnos"
                leftAction={{
                    icon: <Ionicons name="search" size={20} color="#111827" />,
                    onPress: () => { },
                }}
                rightActions={[
                    {
                        icon: (
                            <Ionicons
                                name="options-outline"
                                size={20}
                                color="#111827"
                            />
                        ),
                        onPress: () => { },
                    },
                ]}
            />

            <View style={styles.categories}>
                {categories.map((item) => {
                    const active = item.id === activeCategory;
                    return (
                        <Pressable
                            key={item.id}
                            onPress={() => setActiveCategory(item.id)}
                            style={[
                                styles.category,
                                active && styles.categoryActive,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    active && styles.categoryTextActive,
                                ]}
                            >
                                {item.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    !loading ? (
                        <View style={{ padding: 20, alignItems: "center" }}>
                            <Text style={{ color: "#6b7280" }}>Nenhum turno encontrado.</Text>
                        </View>
                    ) : (
                        <ActivityIndicator size="large" color="#2563EB" style={{ marginTop: 20 }} />
                    )
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            source={{ uri: item.imageUrl || "https://images.unsplash.com/photo-1516788875874-c5912cae7b43" }}
                            style={styles.image}
                        />

                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                {item.category.toUpperCase()}
                            </Text>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.row}>
                                <View style={styles.info}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.subtitle}>{item.place || "Empresa Local"}</Text>
                                </View>

                                <View style={styles.priceBox}>
                                    <Text style={styles.price}>{`R$ ${item.value}/h`}</Text>
                                    <Text style={styles.total}>{`TOTAL R$ ${item.value * 4}`}</Text>
                                </View>
                            </View>

                            <Text style={styles.meta}>
                                {item.location || "São Paulo, SP"} • {item.distance || "Para você"}
                            </Text>
                            <Text style={styles.meta}>
                                {new Date(item.date).toLocaleDateString('pt-BR')} • {item.startTime} - {item.endTime}
                            </Text>

                            <Pressable
                                onPress={() => router.push({
                                    pathname: "/(screens)/Details/[id]",
                                    params: { id: item.id },
                                })}
                                style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Ver Detalhes do Turno
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />

            <AppFooter
                activeKey="explore"
                items={[
                    {
                        key: "explore",
                        label: user?.role === "COMPANY" ? "Home" : "Explorar",
                        icon: (active) => (
                            <Ionicons
                                name={user?.role === "COMPANY" ? "home-outline" : "search-outline"}
                                size={20}
                                color={active ? "#2563EB" : "#9CA3AF"}
                            />
                        ),
                        onPress: () => {
                            if (user?.role === "COMPANY") {
                                router.push("/(screens)/CompanyHome");
                            } else {
                                router.push("/(screens)/Home");
                            }
                        },

                    },
                    {
                        key: "turns",
                        label: user?.role === "COMPANY" ? "Turnos" : "Meus Turnos",
                        icon: (active) => (
                            <Ionicons
                                name={user?.role === "COMPANY" ? "list-outline" : "calendar-outline"}
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
