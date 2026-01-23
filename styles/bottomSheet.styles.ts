import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "flex-end",
    },

    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.45)",
    },

    sheet: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 24,
    },

    handle: {
        width: 44,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#E5E7EB",
        alignSelf: "center",
        marginBottom: 16,
    },

    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#111827",
        fontFamily: "Century Gothic",
    },

    subtitle: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 6,
        lineHeight: 18,
        fontFamily: "SF Pro Text",
    },

    checklist: {
        marginTop: 20,
        gap: 16,
    },

    checkItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 12,
    },

    checkTextWrapper: {
        flex: 1,
    },

    checkTitle: {
        fontSize: 14,
        color: "#111827",
        fontWeight: "500",
        fontFamily: "SF Pro Text",
    },

    checkDescription: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 2,
        fontFamily: "SF Pro Text",
    },

    primaryButton: {
        backgroundColor: "#2563EB",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 24,
    },

    primaryButtonText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "600",
        fontFamily: "SF Pro Text",
    },

    cancelText: {
        textAlign: "center",
        color: "#6B7280",
        fontSize: 13,
        marginTop: 16,
        fontFamily: "SF Pro Text",
    },
    primaryButtonDisabled: {
        opacity: 0.5,
    },
});
