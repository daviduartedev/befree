import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7F8',
    borderRadius: 20,
    padding: 16,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  iconWrapperBase: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  iconGreen: {
    backgroundColor: '#E6F4EA',
  },

  iconBlue: {
    backgroundColor: '#E8F0FE',
  },

  iconOrange: {
    backgroundColor: '#FFF3E0',
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontWeight: '600',
    fontSize: 14,
  },

  description: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
    fontWeight: '500',
  },
});
