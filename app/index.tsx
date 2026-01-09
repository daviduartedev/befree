import { Pressable, Text, View } from "react-native";
import CardHero from "./src/components/cardHero";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={{ alignSelf: 'flex-end' }}>
        <Pressable>
          <Text style={{ color: "#9CA3AF", fontWeight: 600, fontSize: 14 }}>
            Pular
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={{ color: "#000000", fontWeight: 700, fontSize: 26, alignSelf: 'center', marginTop: 100, marginBottom: 16, fontFamily: 'San-Francisco' }}>
          Sua saúde, seus dados.
        </Text>
        <Text style={{ marginHorizontal: 10,color: "#4B5563", fontWeight: 400, fontSize: 16, alignSelf: 'center', fontFamily: 'San-Francisco' }}>
          {"Guarde, organize e acompanhe seus\nexames e documentos de saúde em um só\nlugar, com total controle e privacidade."}
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <CardHero/>
      </View>
    </View>
  );
}
