import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    Text,
    View,
} from "react-native";
import { styles } from "../../../styles/home.styles";
import AppFooter from "../../components/footer";
import AppHeader from "../../components/header";
import { categories, turns } from "./mock";

export default function Home() {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState("all");

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
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />

                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                {item.category.toUpperCase()}
                            </Text>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.row}>
                                <View style={styles.info}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.subtitle}>{item.place}</Text>
                                </View>

                                <View style={styles.priceBox}>
                                    <Text style={styles.price}>{item.price}</Text>
                                    <Text style={styles.total}>{item.total}</Text>
                                </View>
                            </View>

                            <Text style={styles.meta}>
                                {item.location} • {item.distance}
                            </Text>
                            <Text style={styles.meta}>
                                {item.time} • {item.hours}
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
                        label: "Explorar",
                        icon: (active) => (
                            <Ionicons
                                name="search"
                                size={20}
                                color={active ? "#2563EB" : "#9CA3AF"}
                            />
                        ),
                        onPress: () => { },

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
                        onPress: () => {
                            router.push("/Profile");
                        },
                    },
                ]}
            />
        </View>
    );
}
