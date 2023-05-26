import { StyleSheet, Text, View, Button } from 'react-native';
import Container from '../components/Container';
import { useContext, useState } from 'react';
import { TodoContext } from '../store/context/todoContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const DetailScreen = ({ route, navigation }) => {
  const { todoList, removeItem, changeStatus } = useContext(TodoContext);
  const { itemId } = route.params;
  const [item, setItem] = useState(
    todoList.filter((item) => item.id === itemId)[0]
  );

  const date = new Date().toLocaleDateString();

  return (
    <View style={styles.details}>
      <Container>
        <Text style={{ marginTop: 80 }}>{item.description}</Text>
        <Button
          title={item.done ? 'Undo' : 'Done'}
          onPress={() => (changeStatus(item.id), navigation.goBack())}
        />
      </Container>
      <View style={styles.footer}>
        <Text style={styles.date}>Created: {date}</Text>
        <FontAwesome.Button
          name='trash'
          backgroundColor='none'
          size={30}
          onPress={() => (removeItem(item.id), navigation.goBack())}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  details: {
    flex: 1,
  },
  footer: {
    flex: 0.12,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  date: {
    fontSize: 15,
    color: '#fff',
  },
});
