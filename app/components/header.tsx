import React from "react";
import { Pressable, StatusBar, Text, View } from "react-native";
import { styles } from "../../styles/header.styles";

type HeaderAction = {
    icon: React.ReactNode;
    onPress: () => void;
};

type AppHeaderProps = {
    title?: string;
    leftAction?: HeaderAction;
    rightActions?: HeaderAction[];
};

import { useUser } from "../context/UserContext";

export default function AppHeader({
    title,
    leftAction,
    rightActions,
}: AppHeaderProps) {
    const { theme } = useUser();
    
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <StatusBar hidden />
            <View style={styles.side}>
                {leftAction && (
                    <Pressable
                        onPress={leftAction.onPress}
                        hitSlop={10}
                        style={styles.iconButton}
                    >
                        {leftAction.icon}
                    </Pressable>
                )}
            </View>

            <View style={styles.center}>
                {title && <Text style={styles.title}>{title}</Text>}
            </View>

            <View style={[styles.side, styles.right]}>
                {rightActions?.map((action, index) => (
                    <Pressable
                        key={index}
                        onPress={action.onPress}
                        hitSlop={10}
                        style={styles.iconButton}
                    >
                        {action.icon}
                    </Pressable>
                ))}
            </View>
        </View>
    );
}
