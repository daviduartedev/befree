import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { styles } from './cardHero.styles';

export default function CardHero() {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <View style={[styles.iconWrapperBase, styles.iconGreen]}>
          <MaterialCommunityIcons
            name="fingerprint"
            size={20}
            color="#1A73E8"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Você é o dono dos seus dados
          </Text>
          <Text style={styles.description}>
            Todas as suas informações ficam salvas com segurança no seu dispositivo.
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.iconWrapperBase, styles.iconBlue]}>
          <MaterialCommunityIcons
            name="shield-lock"
            size={20}
            color="#1A73E8"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Privacidade absoluta
          </Text>
          <Text style={styles.description}>
            Nada é compartilhado com terceiros sem sua permissão explícita.
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.iconWrapperBase, styles.iconOrange]}>
          <MaterialCommunityIcons
            name="briefcase-check"
            size={20}
            color="#1A73E8"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Organização, não diagnóstico
          </Text>
          <Text style={styles.description}>
            Este app ajuda a organizar, mas não realiza diagnósticos médicos.
          </Text>
        </View>
      </View>

    </View>
  );
}
