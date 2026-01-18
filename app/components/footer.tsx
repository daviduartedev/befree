import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/footer.styles";

type FooterItem = {
  key: string;
  label: string;
  icon: (active: boolean) => React.ReactNode;
  onPress: () => void;
};

type AppFooterProps = {
  items: FooterItem[];
  activeKey: string;
};

export default function AppFooter({
  items,
  activeKey,
}: AppFooterProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        const active = item.key === activeKey;

        return (
          <Pressable
            key={item.key}
            onPress={item.onPress}
            style={styles.item}
          >
            {item.icon(active)}
            <Text
              style={[
                styles.label,
                active && styles.labelActive,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
