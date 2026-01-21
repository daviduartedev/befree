import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { styles } from "../../styles/bottomSheet.styles";
import { useRouter } from "expo-router";

type Props = {
    onCancel?: () => void;
};

/**
 * Retorna o ícone correto baseado se é obrigatório ou opcional
 */
const getCheckIcon = (checked: boolean, required: boolean) => {
    if (required) {
        return checked ? "checkmark-circle" : "ellipse-outline";
    }

    return checked ? "checkbox" : "square-outline";
};

export default function ConfirmApplication({ onCancel }: Props) {
    const router = useRouter();

    const [hasAvailability, setHasAvailability] = useState(false);
    const [hasUniform, setHasUniform] = useState(false);
    const [acceptsValue, setAcceptsValue] = useState(false);

    // Apenas os obrigatórios bloqueiam a confirmação
    const canConfirm = hasAvailability && hasUniform;

    const onConfirm = () => {
        if (!canConfirm) return;

        router.replace("/(screens)/ApplicationSuccess");
    };

    return (
        <View style={styles.overlay}>
            <Pressable style={styles.backdrop} onPress={onCancel} />

            <View style={styles.sheet}>
                <View style={styles.handle} />

                <Text style={styles.title}>Confirmar Candidatura?</Text>
                <Text style={styles.subtitle}>
                    Revise os requisitos para garantir que você está apto para este turno.
                </Text>

                <View style={styles.checklist}>
                    {/* OBRIGATÓRIO */}
                    <Pressable
                        style={styles.checkItem}
                        onPress={() => setHasAvailability(v => !v)}
                    >
                        <Ionicons
                            name={getCheckIcon(hasAvailability, true)}
                            size={18}
                            color={hasAvailability ? "#2563EB" : "#9CA3AF"}
                        />

                        <View style={styles.checkTextWrapper}>
                            <Text style={styles.checkTitle}>
                                Tenho disponibilidade
                            </Text>
                            <Text style={styles.checkDescription}>
                                Para todo o período do turno
                            </Text>
                        </View>
                    </Pressable>

                    {/* OBRIGATÓRIO */}
                    <Pressable
                        style={styles.checkItem}
                        onPress={() => setHasUniform(v => !v)}
                    >
                        <Ionicons
                            name={getCheckIcon(hasUniform, true)}
                            size={18}
                            color={hasUniform ? "#2563EB" : "#9CA3AF"}
                        />

                        <View style={styles.checkTextWrapper}>
                            <Text style={styles.checkTitle}>
                                Possuo uniforme
                            </Text>
                            <Text style={styles.checkDescription}>
                                Camiseta preta e calça escura
                            </Text>
                        </View>
                    </Pressable>

                    {/* OPCIONAL */}
                    <Pressable
                        style={styles.checkItem}
                        onPress={() => setAcceptsValue(v => !v)}
                    >
                        <Ionicons
                            name={getCheckIcon(acceptsValue, false)}
                            size={18}
                            color={acceptsValue ? "#2563EB" : "#9CA3AF"}
                        />

                        <View style={styles.checkTextWrapper}>
                            <Text style={styles.checkTitle}>
                                Aceito o valor de R$ 180,00
                            </Text>
                            <Text style={styles.checkDescription}>
                                Pagamento em até 24h após o turno
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <Pressable
                    style={[
                        styles.primaryButton,
                        !canConfirm && styles.primaryButtonDisabled,
                    ]}
                    disabled={!canConfirm}
                    onPress={onConfirm}
                >
                    <Text style={styles.primaryButtonText}>
                        Confirmar e Enviar
                    </Text>
                </Pressable>

                <Pressable onPress={onCancel}>
                    <Text style={styles.cancelText}>Cancelar</Text>
                </Pressable>
            </View>
        </View>
    );
}
