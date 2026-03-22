import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Switch,
    Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/createShift-step2.styles";
import RequirementItem from "@/app/components/RequirementItem";
import AppHeader from "@/app/components/header";
import { router, useLocalSearchParams } from "expo-router";
import api, { uploadImage } from "@/app/services/api";

import { useUser } from "@/app/context/UserContext";

export default function CreateShiftStep2() {
    const params = useLocalSearchParams();
    const { user, theme } = useUser();

    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [professionals, setProfessionals] = useState("1");

    const [uniform, setUniform] = useState(false);
    const [experience, setExperience] = useState(true);
    const [documents, setDocuments] = useState(false);
    const [recurring, setRecurring] = useState(false);

    async function publishShift() {
        // ... (existing logic)
    }

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header */}
            <AppHeader leftAction={{
                icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                onPress: () => router.back(),
            }} title="Publicar Novo Turno" />

            {/* Progress */}
            <Text style={styles.stepText}>Passo 2 de 2</Text>

            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { backgroundColor: theme.primary }]} />
            </View>

            <Text style={styles.progressPercent}>100%</Text>

            {/* Address */}
            <View style={styles.field}>
                <Text style={styles.label}>Endereço do local</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder="CEP (00000-000)"
                        value={cep}
                        onChangeText={setCep}
                        style={styles.input}
                    />
                    <Ionicons name="search-outline" size={18} color={theme.primary} />
                </View>

                <View style={[styles.inputWrapper, { marginTop: 10 }]}>
                    <TextInput
                        placeholder="Rua, Número e Bairro"
                        value={address}
                        onChangeText={setAddress}
                        style={styles.input}
                    />
                </View>
            </View>

            {/* Professionals */}
            <View style={styles.field}>
                <Text style={styles.label}>Número de profissionais</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        value={professionals}
                        onChangeText={setProfessionals}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    <Ionicons name="people-outline" size={18} color={theme.primary} />
                </View>
            </View>

            {/* Requirements */}
            <View style={styles.field}>
                <Text style={styles.label}>Requisitos específicos</Text>

                <RequirementItem
                    icon="shirt-outline"
                    label="Uniforme próprio"
                    value={uniform}
                    onChange={setUniform}
                />

                <RequirementItem
                    icon="flash-outline"
                    label="Experiência prévia"
                    value={experience}
                    onChange={setExperience}
                    active
                />

                <RequirementItem
                    icon="document-text-outline"
                    label="Documentação em dia"
                    value={documents}
                    onChange={setDocuments}
                />
            </View>

            {/* Recurring */}
            <View style={[styles.recurringBox, { backgroundColor: theme.secondary + "20" }]}>
                <Ionicons name="repeat-outline" size={20} color={theme.primary} />

                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.recurringTitle}>Turno Recorrente</Text>
                    <Text style={styles.recurringSubtitle}>
                        Repetir semanalmente
                    </Text>
                </View>

                <Switch
                    value={recurring}
                    onValueChange={setRecurring}
                    trackColor={{ false: "#e5e7eb", true: theme.secondary + "80" }}
                    thumbColor={recurring ? theme.primary : "#fff"}
                />
            </View>

            {/* Button */}
            <TouchableOpacity onPress={publishShift} style={[styles.button, { backgroundColor: theme.primary }]}>
                <Text style={styles.buttonText}>Publicar Turno</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
