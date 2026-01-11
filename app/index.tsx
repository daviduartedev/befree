import { Stack } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import CardHero from "./src/components/cardHero";
import { styles } from "./src/screens/Welcome/index.styles";

export default function Index() {
  const disabled = true;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>

        <View
          style={styles.imgContainer

          }
        >
          <Image
            source={require("../assets/images/bg-he.jpg")}
            style={styles.bgImage}
            resizeMode="cover"
          />
        </View>


        <View>
          <Text style={styles.title}>Sua saúde, seus dados.</Text>

          <Text style={styles.subtitle}>
            {
              "Um espaço seguro para organizar seu\nhistórico de saúde. Simples, visual e\nhumano."
            }
          </Text>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: "#E5E7EB",
            marginVertical: 24,
            opacity: 0.6,
          }}
        />

        <View style={styles.sectionSpacing}>
          <CardHero />
        </View>

        <View style={styles.sectionSpacing}>
          <Pressable 
            
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            disabled={disabled}
          >
            <Text style={styles.buttonText}>Começar</Text>
          </Pressable>
        </View>

        <View>
          <Text style={styles.disclaimer}>
            Este aplicativo não realiza diagnósticos médicos nem substitui
            profissionais de saúde.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
