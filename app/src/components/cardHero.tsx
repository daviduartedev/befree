import { Image, Text, View } from 'react-native';

export default function CardHero() {
  return (
    <View
      style={{
        backgroundColor: '#F6F7F8',
        borderRadius: 20,
        padding: 16,
      }}
    >

      {/* Item 1 */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#E6F4EA',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 12,
          }}
        >
          <Image
            source={require('../../../assets/images/react-logo.png')}
            style={{ width: 20, height: 20 }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '600', fontSize: 14 }}>
            Você é o dono dos seus dados
          </Text>
          <Text style={{ fontSize: 12, color: '#555', marginTop: 2 }}>
            Todas as suas informações ficam salvas com segurança no seu dispositivo.
          </Text>
        </View>
      </View>

      {/* Item 2 */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#E8F0FE',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 12,
          }}
        >
          <Image
            source={require('../../../assets/images/react-logo.png')}
            style={{ width: 20, height: 20 }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '600', fontSize: 14 }}>
            Privacidade absoluta
          </Text>
          <Text style={{ fontSize: 12, color: '#555', marginTop: 2 }}>
            Nada é compartilhado com terceiros sem sua permissão explícita.
          </Text>
        </View>
      </View>

      {/* Item 3 */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#FFF3E0',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 12,
          }}
        >
          <Image
            source={require('../../../assets/images/react-logo.png')}
            style={{ width: 20, height: 20 }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '600', fontSize: 14 }}>
            Organização, não diagnóstico
          </Text>
          <Text style={{ fontSize: 12, color: '#555', marginTop: 2 }}>
            Este app ajuda a organizar, mas não realiza diagnósticos médicos.
          </Text>
        </View>
      </View>

    </View>
  );
}
