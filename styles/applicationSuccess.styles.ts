import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 24,
        paddingTop: 24,
        alignItems: "center",
    },

    close: {
        alignSelf: "flex-start",
        marginBottom: 12,
    },

    circleWrapper: {
        width: 160,
        height: 160,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        marginBottom: 24,
    },

    dashedCircle: {
        position: "absolute",
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "#C7D2FE",
    },

    mainCircle: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: "#2563EB",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#2563EB",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 6,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111827",
        textAlign: "center",
        marginBottom: 12,
    },

    subtitle: {
        fontSize: 14,
        color: "#6B7280",
        textAlign: "center",
        lineHeight: 20,
        marginBottom: 24,
        paddingHorizontal: 12,
    },

    card: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 12,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },

    cardInfo: {
        flex: 1,
        paddingRight: 12,
    },

    cardLabel: {
        fontSize: 11,
        fontWeight: "700",
        color: "#2563EB",
        marginBottom: 4,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 8,
    },

    cardRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginBottom: 4,
    },

    cardText: {
        fontSize: 13,
        color: "#6B7280",
    },

    cardImage: {
        width: 72,
        height: 72,
        borderRadius: 8,
    },

    primaryButton: {
        width: "100%",
        height: 48,
        backgroundColor: "#2563EB",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },

    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },

    secondaryButton: {
        width: "100%",
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#2563EB",
        alignItems: "center",
        justifyContent: "center",
    },

    secondaryButtonText: {
        color: "#2563EB",
        fontSize: 16,
        fontWeight: "600",
    },
});
