import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },

    imageCard: {
        margin: 16,
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#000",
    },

    image: {
        width: "100%",
        height: 240,
        opacity: 0.9,
    },

    imageOverlay: {
        position: "absolute",
        inset: 0,
        padding: 16,
        justifyContent: "flex-end",
    },

    badge: {
        alignSelf: "flex-start",
        backgroundColor: "#2563EB",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        marginBottom: 8,
    },

    badgeText: {
        color: "#FFF",
        fontSize: 12,
        fontFamily: "SF Pro Text",
    },

    title: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Century Gothic",
    },

    dateRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },

    dateText: {
        color: "#E5E7EB",
        marginLeft: 6,
        fontSize: 13,
        fontFamily: "SF Pro Text",
    },

    infoRow: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginTop: -2,
        gap: 12,
    },

    infoCard: {
        flex: 1,
        backgroundColor: "#FFF",
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },

    infoLabel: {
        fontSize: 12,
        color: "#6B7280",
    },

    infoValuePrimary: {
        fontSize: 18,
        fontWeight: "600",
        color: "#2563EB",
        marginTop: 4,
        fontFamily: "Century Gothic",
    },

    infoValue: {
        fontSize: 18,
        fontWeight: "600",
        color: "#111827",
        marginTop: 4,
        fontFamily: "Century Gothic",
    },

    infoSub: {
        fontSize: 12,
        color: "#6B7280",
    },

    infoSubPositive: {
        fontSize: 12,
        color: "#10B981",
    },

    section: {
        backgroundColor: "#FFF",
        margin: 16,
        borderRadius: 12,
        padding: 16,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Century Gothic",
    },

    locationRow: {
        flexDirection: "row",
        marginTop: 8,
    },

    locationText: {
        marginLeft: 6,
        color: "#374151",
    },

    mapPlaceholder: {
        height: 100,
        backgroundColor: "#e5ebea",
        borderRadius: 12,
        marginTop: 12,
    },

    primaryButton: {
        backgroundColor: "#2563EB",
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 16,
    },

    primaryButtonText: {
        color: "#FFF",
        fontWeight: "600",
        fontFamily: "SF Pro Text",
    },

    taskItem: {
        flexDirection: "row",
        marginTop: 16,
    },

    taskText: {
        marginLeft: 8,
        color: "#374151",
        flex: 1,
        fontFamily: "SF Pro Text",
    },

    companyRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 12,
    },

    companyName: {
        fontWeight: "600",
        fontFamily: "Century Gothic",
    },

    companyRating: {
        color: "#6B7280",
        marginTop: 4,
    },
});
