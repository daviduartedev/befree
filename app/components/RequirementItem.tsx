import { Ionicons } from "@expo/vector-icons";
import { Switch, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/createShift-step2.styles";

function RequirementItem({
    icon,
    label,
    value,
    onChange,
    active,
}: any) {
    return (
        <TouchableOpacity
            style={[
                styles.requirementItem,
                active && styles.requirementActive,
            ]}
            onPress={() => onChange(!value)}
        >
            <Ionicons
                name={icon}
                size={18}
                color={active ? "#2563eb" : "#6b7280"}
            />

            <Text
                style={[
                    styles.requirementText,
                    active && { color: "#2563eb" },
                ]}
            >
                {label}
            </Text>

            <Switch
                value={value}
                onValueChange={onChange}
                trackColor={{ false: "#e5e7eb", true: "#93c5fd" }}
                thumbColor={value ? "#2563eb" : "#fff"}
            />
        </TouchableOpacity>
    );
}

export default RequirementItem;
