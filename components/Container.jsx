import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 10,
  },
});
