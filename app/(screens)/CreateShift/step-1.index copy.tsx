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
import * as ImagePicker from 'expo-image-picker';
import { Image } from "react-native";
import { useUser } from "@/app/context/UserContext";

export default function CreateShift() {
    const { theme } = useUser();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("garcom");
    const [date, setDate] = useState("05/12/2023");
    const [startTime, setStartTime] = useState("08:00");
    const [endTime, setEndTime] = useState("17:00");
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <AppHeader
                leftAction={{
                    icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                    onPress: () => router.back(),
                }}
                title="Publicar Novo Turno" />

            {/* Progress */}
            <Text style={styles.stepText}>Passo 1 de 2</Text>

            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { backgroundColor: theme.primary }]} />
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
                    <Ionicons name="briefcase-outline" size={18} color={theme.primary} />
                </View>
            </View>

            {/* Date */}
            <View style={styles.field}>
                <Text style={styles.label}>Data do turno</Text>

                <View style={styles.calendarMock}>
                    <Text style={styles.calendarMonth}>Dezembro 2023</Text>

                    <View style={[styles.calendarDay, { backgroundColor: theme.primary }]}>
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
                        <Ionicons name="time-outline" size={18} color={theme.primary} />
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
                        <Ionicons name="time-outline" size={18} color={theme.primary} />
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

            {/* Image Picker */}
            <View style={styles.field}>
                <Text style={styles.label}>Imagem de capa (Opcional)</Text>
                <TouchableOpacity onPress={pickImage} style={[styles.inputWrapper, { height: 120, justifyContent: 'center', alignItems: 'center', borderStyle: 'dashed', borderWidth: 1, borderColor: '#cbd5e1' }]}>
                    {image ? (
                        <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 8 }} />
                    ) : (
                        <>
                            <Ionicons name="image-outline" size={32} color={theme.primary} />
                            <Text style={{ color: '#64748b', marginTop: 8 }}>Toque para selecionar uma imagem</Text>
                        </>
                    )}
                </TouchableOpacity>
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
                onPress={() => router.push({
                    pathname: "/(screens)/CreateShift/step-2.index",
                    params: {
                        title,
                        category,
                        date,
                        startTime,
                        endTime,
                        value,
                        description,
                        image: image || ""
                    }
                })}
                style={[styles.button, { backgroundColor: theme.primary }]}>
                <Text style={styles.buttonText}>Próximo →</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
