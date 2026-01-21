import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { styles } from "../../styles/requirementsCard.styles";

type RequirementItemProps = {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    description: string;
};

function RequirementItem({ icon, title, description }: RequirementItemProps) {
    return (
        <View style={styles.item}>
            <View style={styles.iconWrapper}>
                <Ionicons name={icon} size={18} color="#2563EB" />
            </View>

            <View style={styles.textWrapper}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemDescription}>{description}</Text>
            </View>
        </View>
    );
}

export default function RequirementsCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Requisitos</Text>

            <View style={styles.card}>
                <RequirementItem
                    icon="shirt-outline"
                    title="Uniforme"
                    description="Camisa preta social, calça preta e sapato fechado."
                />

                <RequirementItem
                    icon="briefcase-outline"
                    title="Experiência"
                    description="Mínimo de 1 ano comprovado em restaurantes."
                />
            </View>
        </View>
    );
}
