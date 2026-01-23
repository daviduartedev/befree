import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/createShift.styles copy";
import AppHeader from "@/app/components/header";
import { router } from "expo-router";

export default function CreateShift() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("05/12/2023");
    const [startTime, setStartTime] = useState("08:00");
    const [endTime, setEndTime] = useState("17:00");
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    return (
        <ScrollView style={styles.container}>
            <AppHeader
                leftAction={{
                    icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                    onPress: () => router.back(),
                }}
                title="Publicar Novo Turno" />

            {/* Progress */}
            <Text style={styles.stepText}>Passo 1 de 2</Text>

            <View style={styles.progressBar}>
                <View style={styles.progressFill} />
            </View>

            <Text style={styles.progressPercent}>50%</Text>

            {/* Title */}
            <View style={styles.field}>
                <Text style={styles.label}>Título da função</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder="Ex: Barman"
                        value={title}
                        onChangeText={setTitle}
                        style={styles.input}
                    />
                    <Ionicons name="briefcase-outline" size={18} color="#2563eb" />
                </View>
            </View>

            {/* Date */}
            <View style={styles.field}>
                <Text style={styles.label}>Data do turno</Text>

                <View style={styles.calendarMock}>
                    <Text style={styles.calendarMonth}>Dezembro 2023</Text>

                    <View style={styles.calendarDay}>
                        <Text style={styles.calendarDayText}>5</Text>
                    </View>
                </View>
            </View>

            {/* Time */}
            <View style={styles.row}>
                <View style={styles.fieldSmall}>
                    <Text style={styles.label}>Horário Início</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={startTime}
                            onChangeText={setStartTime}
                            style={styles.input}
                        />
                        <Ionicons name="time-outline" size={18} color="#2563eb" />
                    </View>
                </View>

                <View style={styles.fieldSmall}>
                    <Text style={styles.label}>Horário Fim</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={endTime}
                            onChangeText={setEndTime}
                            style={styles.input}
                        />
                        <Ionicons name="time-outline" size={18} color="#2563eb" />
                    </View>
                </View>
            </View>

            {/* Value */}
            <View style={styles.field}>
                <Text style={styles.label}>Valor total do turno</Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.currency}>R$</Text>
                    <TextInput
                        placeholder="0,00"
                        keyboardType="numeric"
                        value={value}
                        onChangeText={setValue}
                        style={styles.input}
                    />
                </View>
            </View>

            {/* Description */}
            <View style={styles.field}>
                <Text style={styles.label}>Descrição das atividades</Text>
                <TextInput
                    placeholder="Descreva as tarefas e requisitos do turno..."
                    multiline
                    numberOfLines={4}
                    value={description}
                    onChangeText={setDescription}
                    style={styles.textArea}
                />
            </View>

            {/* Button */}
            <TouchableOpacity
                onPress={() => router.push("/(screens)/CreateShift/step-2.index")}
                style={styles.button}>
                <Text style={styles.buttonText}>Próximo →</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
