import { Ionicons } from "@expo/vector-icons";
import { Switch, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/createShift-step2.styles";

import { useUser } from "../context/UserContext";

function RequirementItem({
    icon,
    label,
    value,
    onChange,
    active,
}: any) {
    const { theme } = useUser();
    
    return (
        <TouchableOpacity
            style={[
                styles.requirementItem,
                active && [styles.requirementActive, { borderColor: theme.primary, backgroundColor: theme.primary + "10" }],
            ]}
            onPress={() => onChange(!value)}
        >
            <Ionicons
                name={icon}
                size={18}
                color={active ? theme.primary : "#6b7280"}
            />

            <Text
                style={[
                    styles.requirementText,
                    active && { color: theme.primary },
                ]}
            >
                {label}
            </Text>

            <Switch
                value={value}
                onValueChange={onChange}
                trackColor={{ false: "#e5e7eb", true: theme.primary + "80" }}
                thumbColor={value ? theme.primary : "#fff"}
            />
        </TouchableOpacity>
    );
}

export default RequirementItem;
