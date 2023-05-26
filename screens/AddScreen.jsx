import { TextInput, StyleSheet, Modal, Text, View, Button } from 'react-native';
import Container from '../components/Container';
import { useContext } from 'react';
import { TodoContext } from '../store/context/todoContext';

const AddScreen = () => {
  const { title, setTitle, description, setDescription } =
    useContext(TodoContext);

  return (
    <Container>
      <TextInput
        value={title}
        onChange={({ nativeEvent: { text } }) => setTitle(text)}
        placeholder='Title'
        style={styles.input}
      />
      <TextInput
        value={description}
        onChange={({ nativeEvent: { text } }) => setDescription(text)}
        placeholder='Description'
        style={styles.description}
        multiline
      />
    </Container>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    width: 350,
    marginVertical: 40,
  },
  description: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingTop: 15,
    width: 350,
    height: 300,
  },
});
