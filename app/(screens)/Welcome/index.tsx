import { Stack } from "expo-router";
import { Image, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../../styles/welcome.styles";
import ComponentHome from "../../components/componentHome";

export default function Welcome() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar hidden />

      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={[styles.logo, { top: insets.top + 20 }]}
            resizeMode="contain"
          />
          <Image
            source={require("../../../assets/images/bg-home.png")}
            style={styles.bgImage}
            resizeMode="cover"
          />
        </View>
        <View style={[styles.content, { paddingBottom: Math.max(insets.bottom, 24) }]}>
          <ComponentHome />
        </View>
      </View>
    </>
  );
}
