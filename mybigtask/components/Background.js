import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Background({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.patternOverlay}>
        {Array.from({ length: 20 }).map((_, i) => (
          <View key={i} style={styles.patternRow}>
            {Array.from({ length: 10 }).map((_, j) => (
              <View key={j} style={styles.patternCell} />
            ))}
          </View>
        ))}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5f7',
  },
  patternOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
  },
  patternRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    height: 50,
  },
  patternCell: {
    width: 20,
    height: 20,
    backgroundColor: '#1a237e',
    transform: [{ rotate: '45deg' }],
    margin: 15,
  },
}); 